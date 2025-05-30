'use client'

import { formatText } from '@/utils/formatText'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Image from 'next/image'
import { useRef, useState } from 'react'
import styles from './Post.module.scss'

gsap.registerPlugin(ScrollToPlugin)

export type IPostItem = {
	id: number
	img: string
	alt: string
	date: string
	previewText: string
	fullText: string
}

type PostProps = {
	post: IPostItem
}

export const Post = ({ post }: PostProps) => {
	const [fullPostVisible, setFullPostVisible] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const formattedFullText = formatText(post.fullText)
	const fullTextRef = useRef<HTMLDivElement>(null)
	const arrowRef = useRef<HTMLImageElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const previewTextRef = useRef<HTMLParagraphElement>(null)

	const togglePost = () => {
		if (!fullTextRef.current || !arrowRef.current || isAnimating) return
		setIsAnimating(true)

		gsap.killTweensOf(fullTextRef.current)
		gsap.killTweensOf(arrowRef.current)
		gsap.killTweensOf(window)

		if (!fullPostVisible) {
			// Анимация открытия
			fullTextRef.current.style.display = 'block'
			const contentHeight = fullTextRef.current.scrollHeight
			fullTextRef.current.style.height = '0'
			fullTextRef.current.style.overflow = 'hidden'

			gsap.to(fullTextRef.current, {
				height: contentHeight,
				duration: 0.5,
				ease: 'power2.out',
				onStart: () => {
					setFullPostVisible(true)
				},
				onComplete: () => {
					fullTextRef.current!.style.height = 'auto'
					setIsAnimating(false)
				},
			})

			gsap.to(arrowRef.current, {
				rotate: 180,
				duration: 0.5,
				ease: 'power2.out',
			})
		} else {
			// Анимация закрытия
			const currentHeight = fullTextRef.current.scrollHeight
			fullTextRef.current.style.height = `${currentHeight}px`
			fullTextRef.current.style.overflow = 'hidden'

			gsap.to(fullTextRef.current, {
				height: 0,
				duration: 0.5,
				ease: 'power2.in',
				onComplete: () => {
					fullTextRef.current!.style.display = 'none'
					setIsAnimating(false)
					setFullPostVisible(false)
				},
			})

			gsap.to(window, {
				scrollTo: {
					y: containerRef.current!,
					offsetY: 100,
				},
				duration: 0.5,
				ease: 'power2.out',
			})

			gsap.to(arrowRef.current, {
				rotate: 0,
				duration: 0.5,
				ease: 'power2.out',
			})
		}
	}

	return (
		<div className={styles.container} ref={containerRef}>
			<Image
				width={387}
				height={387}
				src={post.img}
				alt={post.alt}
				quality={100}
				className={styles.postImage}
			/>
			<div className={styles.rightColumn}>
				<span className={styles.date}>{post.date}</span>

				{!fullPostVisible && <p ref={previewTextRef}>{post.previewText}</p>}

				<div ref={fullTextRef} className={styles.fullText}>
					<p dangerouslySetInnerHTML={{ __html: formattedFullText }} />
				</div>

				<button className={styles.button} onClick={togglePost} aria-expanded={fullPostVisible}>
					<Image
						ref={arrowRef}
						width={17.5}
						height={10}
						src={'/blog-posts/arrow.svg'}
						alt={fullPostVisible ? 'Свернуть' : 'Развернуть'}
						quality={100}
						className={styles.arrow}
						style={{ transform: fullPostVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
					/>
				</button>
			</div>
		</div>
	)
}
