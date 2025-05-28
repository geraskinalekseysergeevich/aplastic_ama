'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import he from 'he'
import { Fragment, useEffect, useRef } from 'react'
import styles from './Title.module.scss'

type TitleProps = {
	text: string
	indent?: boolean
}

export const Title = ({ text, indent = true }: TitleProps) => {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const highlightRefs = useRef<(HTMLSpanElement | null)[]>([])

	useEffect(() => {
		if (!titleRef.current) return

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const tl = gsap.timeline()

						highlightRefs.current.forEach(highlight => {
							if (highlight) {
								tl.to(
									highlight,
									{
										width: '100%',
										duration: 1,
										ease: 'power2.out',
									},
									'>0.2'
								)
							}
						})

						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.5 }
		)

		observer.observe(titleRef.current)

		return () => {
			observer.disconnect()
		}
	}, [])

	const renderHighlightedText = () => {
		const decoded = he.decode(text)
		const lines = decoded.split('\\n')

		return lines.map((line, lineIndex) => {
			const parts = line.split(/(\[\[.*?\]\])/)

			return (
				<Fragment key={`line-${lineIndex}`}>
					{lineIndex > 0 && <br />}
					{parts.map((part, partIndex) => {
						if (part.startsWith('[[') && part.endsWith(']]')) {
							const content = part.slice(2, -2).replace(/&nbsp;/g, '\u00A0')
							return (
								<mark key={`part-${lineIndex}-${partIndex}`} className={styles.highlight}>
									<span className={styles.highlightContent}>{content}</span>
									<span
										ref={el => {
											if (el) highlightRefs.current.push(el)
										}}
										className={styles.highlightOverlay}
									/>
								</mark>
							)
						}
						return (
							<Fragment key={`part-${lineIndex}-${partIndex}`}>
								{part.replace(/&nbsp;/g, '\u00A0')}
							</Fragment>
						)
					})}
				</Fragment>
			)
		})
	}

	return (
		<h1 ref={titleRef} className={clsx(styles.title, indent && styles.indent)}>
			{renderHighlightedText()}
		</h1>
	)
}
