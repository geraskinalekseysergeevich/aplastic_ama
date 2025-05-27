'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import styles from './ScrollOn.module.scss'

export const ScrollOn = () => {
	const elementRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!elementRef.current) return

		const tl = gsap.timeline({
			delay: 3,
		})

		tl.to(elementRef.current, {
			keyframes: [
				{ x: 0, rotation: -30, duration: 0 },
				{ x: -20, rotation: -36, duration: 0.15 },
				{ x: 15, rotation: -24, duration: 0.15 },
				{ x: -15, rotation: -33.6, duration: 0.15 },
				{ x: 9, rotation: -27.6, duration: 0.15 },
				{ x: -6, rotation: -31.2, duration: 0.15 },
				{ x: 0, rotation: -30, duration: 0.15 },
			],
			ease: 'none',
		})

		return () => {
			tl.kill()
		}
	}, [])

	return (
		<div ref={elementRef} className={styles.container}>
			<h2>Листай дальше</h2>
		</div>
	)
}
