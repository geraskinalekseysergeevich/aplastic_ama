'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Bottle.module.scss'

export const Bottle = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particlesRef = useRef<Particle[]>([])
	const animationIdRef = useRef<number>(null)
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	})
	const mouseRef = useRef({
		x: -1000,
		y: -1000,
		radius: 100,
	})

	class Particle {
		x: number
		y: number
		size: number
		baseX: number
		baseY: number
		density: number
		vx: number = 0
		vy: number = 0
		friction: number = 0.5
		springFactor: number = 0.03 + Math.random() * 0.02

		constructor(x: number, y: number) {
			this.x = x
			this.y = y
			this.size = 10
			this.baseX = x
			this.baseY = y
			this.density = Math.random() * 8 + 2
		}

		update() {
			const dx = mouseRef.current.x - this.x
			const dy = mouseRef.current.y - this.y
			const distance = Math.sqrt(dx * dx + dy * dy)

			if (distance < mouseRef.current.radius) {
				const angle = Math.atan2(dy, dx)
				const force = Math.pow(
					(mouseRef.current.radius - distance) / mouseRef.current.radius,
					2
				)
				const pushForce = force * this.density * 40

				this.vx -= Math.cos(angle) * pushForce
				this.vy -= Math.sin(angle) * pushForce
			}

			this.vx += (this.baseX - this.x) * this.springFactor
			this.vy += (this.baseY - this.y) * this.springFactor

			this.vx *= this.friction
			this.vy *= this.friction

			this.x += this.vx
			this.y += this.vy
		}

		draw(ctx: CanvasRenderingContext2D) {
			ctx.fillStyle = '#DCDCDC'
			ctx.fillRect(this.x, this.y, this.size, this.size)
		}
	}

	useEffect(() => {
		// Устанавливаем размеры canvas при загрузке и ресайзе
		const handleResize = () => {
			const halfWidth = Math.floor(window.innerWidth / 2)
			const fullHeight = window.innerHeight
			setDimensions({
				width: halfWidth,
				height: fullHeight,
			})
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		if (!dimensions.width || !dimensions.height) return

		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		canvas.width = dimensions.width
		canvas.height = dimensions.height

		const img = new Image()
		img.src = '/bottle.png'

		img.onload = function () {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Позиционирование изображения
			const imgWidth = img.width
			const imgHeight = img.height
			const rightMargin = 25
			const bottomMargin = 50

			// Координаты для размещения у правого нижнего края
			const posX = canvas.width - imgWidth - rightMargin
			const posY = canvas.height - imgHeight - bottomMargin

			ctx.drawImage(img, posX, posY, imgWidth, imgHeight)

			// Создаем частицы с учетом позиции изображения
			const pixelSize = 10
			const imageData = ctx.getImageData(posX, posY, imgWidth, imgHeight)
			particlesRef.current = []

			for (let y = 0; y < imgHeight; y += pixelSize) {
				for (let x = 0; x < imgWidth; x += pixelSize) {
					const pixelIndex = (y * imgWidth + x) * 4
					const alpha = imageData.data[pixelIndex + 3]

					if (alpha > 128) {
						particlesRef.current.push(
							new Particle(
								x + posX, // Учитываем позицию изображения
								y + posY
							)
						)
					}
				}
			}

			const animate = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height)

				particlesRef.current.forEach(particle => {
					particle.update()
					particle.draw(ctx)
				})

				animationIdRef.current = requestAnimationFrame(animate)
			}

			animate()
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (!canvas) return
			const rect = canvas.getBoundingClientRect()
			mouseRef.current.x = e.clientX - rect.left
			mouseRef.current.y = e.clientY - rect.top
		}

		const handleMouseLeave = () => {
			mouseRef.current.x = -1000
			mouseRef.current.y = -1000
		}

		canvas.addEventListener('mousemove', handleMouseMove)
		canvas.addEventListener('mouseleave', handleMouseLeave)

		return () => {
			if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
			canvas.removeEventListener('mousemove', handleMouseMove)
			canvas.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [dimensions])

	return (
		<canvas
			ref={canvasRef}
			className={styles.canvas}
			style={{
				width: `${dimensions.width}px`,
				height: `${dimensions.height}px`,
			}}
		/>
	)
}
