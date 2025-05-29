'use client'

import { RECYCLING } from '@/constants/recycling'
import Image from 'next/image'
import styles from './Recycling.module.scss'

export const Recycling = () => {
	return (
		<div className={styles.container}>
			{RECYCLING.map(({ id, img, alt, hoverImg }) => (
				<div key={id} className={styles.photo}>
					<Image width={595} height={595} src={img} alt={alt} quality={100} />
					<div className={styles.hoverCard}>
						<Image width={595} height={595} src={hoverImg} alt={alt} quality={100} />
					</div>
				</div>
			))}
		</div>
	)
}
