'use client'

import styles from './VideoReel.module.scss'

type VideoReelProps = {
	src: string
}

export const VideoReel = ({ src }: VideoReelProps) => {
	return (
		<div className={styles.container}>
			<video autoPlay loop muted playsInline className={styles.video}>
				<source src={src} type="video/mp4" />
			</video>
		</div>
	)
}
