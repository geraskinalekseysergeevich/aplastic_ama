'use client'

import { DEVICE_TYPES, useDeviceType } from '@/hooks/useDeviceType'
import Image from 'next/image'
import { ContentBlock } from '../blocks/content-block/ContentBlock'
import { Paragraph } from '../paragraph/Paragraph'
import styles from './FooterBlock.module.scss'

export const FooterBlock = () => {
	const { deviceType } = useDeviceType()

	return (
		<ContentBlock titleIndent={false} title="Как нас найти?">
			<div className={styles.container}>
				<div>
					<Paragraph text="Наше производство находится по адресу:" />
					<Paragraph text="ул. Генерала В.Г. Аршба, 38, Сухум" />
				</div>
				<div className={styles.grid}>
					<div>
						<Paragraph text="+7 (940) 226-52-44" />
						<Paragraph text="aplasticama@gmail.com" />
					</div>
					{deviceType === DEVICE_TYPES.MOBILE ? (
						<div className={styles.mobileGrid}>
							<Paragraph text="Instagram" />
							<Paragraph text="Telegram" />
						</div>
					) : (
						<div className={styles.grid}>
							<div>
								<Paragraph text="Instagram" />
								<Paragraph text="Telegram" />
							</div>
							<Image
								className={styles.logo}
								width={114.29}
								height={54.52}
								src="/logo.svg"
								quality={100}
								alt="logo"
							/>
						</div>
					)}
				</div>
			</div>
		</ContentBlock>
	)
}
