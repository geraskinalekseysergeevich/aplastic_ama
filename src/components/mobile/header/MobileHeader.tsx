'use client'

import Image from 'next/image'
import { CSSProperties } from 'react'
import styles from './MobileHeader.module.scss'

type MobileHeaderProps = {
	bgColor: string
	onClick: () => void
}

export const MobileHeader = ({ bgColor, onClick }: MobileHeaderProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.header} style={{ '--bg-color': bgColor } as CSSProperties}>
				<Image
					width={144}
					height={68.69}
					src="/logo.svg"
					quality={100}
					alt="logo"
					className={styles.logo}
				/>
				<button className={styles.button} onClick={onClick}>
					<Image
						width={35}
						height={7}
						src="/header-dots.svg"
						quality={100}
						alt="header dots"
					/>
				</button>
			</div>
		</div>
	)
}
