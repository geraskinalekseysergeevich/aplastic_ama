'use client'

import { DEVICE_TYPES, useDeviceType } from '@/hooks/useDeviceType'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Image from 'next/image'
import { CustomNav } from '../nav/CustomNav'
import styles from './LeftScreen.module.scss'

gsap.registerPlugin(ScrollToPlugin)

export const LeftScreen = () => {
	const { deviceType } = useDeviceType()

	const handleScrollToTop = () => {
		gsap.to(window, {
			scrollTo: {
				y: 0,
				autoKill: true,
			},
			duration: 0.5,
		})
	}

	return (
		<div className={styles.container}>
			{deviceType === DEVICE_TYPES.DESKTOP && (
				<>
					<button className={styles.button} onClick={handleScrollToTop}>
						<Image width={144} height={68.69} src="/logo.svg" quality={100} alt="logo" />
					</button>
					<CustomNav />
				</>
			)}
			{/* <Bottle /> */}
		</div>
	)
}
