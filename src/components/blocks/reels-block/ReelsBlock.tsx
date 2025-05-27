'use client'

import { VideoReel } from '@/components/video-reel/VideoReel'
import styles from './ReelsBlock.module.scss'

export const ReelsBlock = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<VideoReel src="/video/recycling.mp4" />
			</div>
			<div className={styles.right}>
				<VideoReel src="/video/demo.mp4" />
			</div>
		</div>
	)
}
