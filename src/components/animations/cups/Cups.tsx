'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './Cups.module.scss'

export const Cups = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const cup1Ref = useRef<HTMLImageElement>(null)
	const cup2Ref = useRef<HTMLImageElement>(null)
	const cup3Ref = useRef<HTMLImageElement>(null)
	const animationPlayed = useRef(false)

	useEffect(() => {
		if (
			!containerRef.current ||
			!cup1Ref.current ||
			!cup2Ref.current ||
			!cup3Ref.current ||
			animationPlayed.current
		)
			return

		gsap.set([cup1Ref.current, cup2Ref.current, cup3Ref.current], {
			opacity: 0,
		})

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !animationPlayed.current) {
						animationPlayed.current = true

						const tl = gsap.timeline()

						// Первая волна (слева направо)
						tl.to(cup1Ref.current, {
							opacity: 1,
							duration: 0.1,
						})
						tl.to({}, { duration: 0.2 })

						tl.to(cup2Ref.current, {
							opacity: 1,
							duration: 0.1,
						})
						tl.to({}, { duration: 0.2 })

						tl.to(cup3Ref.current, {
							opacity: 1,
							duration: 0.1,
						})
						tl.to({}, { duration: 0.2 })

						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 1,
			}
		)

		observer.observe(containerRef.current)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div ref={containerRef} className={styles.container}>
			<Image
				ref={cup1Ref}
				className={styles.cup1}
				width={155}
				height={204}
				src={'/cups/cup_1.svg'}
				alt="cup 1"
				quality={100}
			/>
			<Image
				ref={cup2Ref}
				className={styles.cup2}
				width={204}
				height={204}
				src={'/cups/cup_2.svg'}
				alt="cup 2"
				quality={100}
			/>
			<Image
				ref={cup3Ref}
				className={styles.cup3}
				width={204}
				height={204}
				src={'/cups/cup_3.svg'}
				alt="cup 3"
				quality={100}
			/>
			<div className={styles.text}>
				<h1>450 лет</h1>
				<p>Столько разлагается в земле пластиковый&nbsp;стаканчик</p>
			</div>
		</div>
	)
}
