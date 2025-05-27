'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import styles from './Square.module.scss'

export const Square = () => {
	const fillRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!fillRef.current || !contentRef.current) return

		// Создаем timeline для последовательной анимации
		const tl = gsap.timeline({
			defaults: { ease: 'power2.out' },
		})

		// Анимация заполнения
		tl.to(fillRef.current, {
			height: '100%',
			duration: 2.3,
			ease: 'power2.inOut',
		})

		return () => {
			tl.kill() // Очистка анимации при размонтировании
		}
	}, [])

	return (
		<div className={styles.square}>
			<div ref={fillRef} className={styles.fill}></div>
			<div ref={contentRef} className={styles.content}>
				<h1>20 000</h1>
				<p>
					Столько тонн пластиковых отходов&nbsp;люди производят в&nbsp;Абхазии&nbsp;ежегодно
				</p>
			</div>
		</div>
	)
}
