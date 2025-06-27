'use client'

import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useEffect, useRef } from 'react'
import styles from './Circle.module.scss'

gsap.registerPlugin(ScrambleTextPlugin)

export const Circle = () => {
	const numberRef = useRef<HTMLSpanElement>(null)
	const percentRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		gsap.set(numberRef.current, { textContent: '100' })
		gsap.set(percentRef.current, { opacity: 1 })

		const numbers = Array.from({ length: 100 }, (_, i) => 100 - i)
		const tl = gsap.timeline()

		numbers.forEach(num => {
			let duration: number

			if (num > 5) duration = 0.01
			else duration = 0.1

			tl.to(
				numberRef.current,
				{
					duration,
					textContent: num,
					ease: 'power1.inOut',
					onUpdate: function () {
						if (numberRef.current) {
							numberRef.current.textContent = Math.round(num).toString()
						}
					},
				},
				`+=${duration}`
			)
		})

		return () => {
			tl.kill()
		}
	}, [])

	return (
		<div className={styles.circle}>
			<div className={styles.fill}></div>
			<div className={styles.content}>
				<div className={styles.percent}>
					<span ref={numberRef}>100</span>
					<span ref={percentRef}>%</span>
				</div>
				<p>
					Столько из них идет
					<br />
					на переработку
				</p>
			</div>
		</div>
	)
}
