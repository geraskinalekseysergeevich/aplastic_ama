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
				{/* <div>
					<Paragraph text="Наше производство находится по адресу:" />
					<Paragraph text="ул. Генерала В.Г. Аршба, 38, Сухум" />
				</div> */}
				<div className={styles.grid}>
					<div>
						<a href="tel:+79409399999">
							<Paragraph text="+7 (940) 939-99-99" />
						</a>

						{/* <Paragraph text="aplasticama@gmail.com" /> */}
					</div>
					{deviceType === DEVICE_TYPES.MOBILE ? (
						<div className={styles.mobileGrid}>
							<a
								href="https://www.instagram.com/idea_republic_apsny?igsh=cDc5eXdqeWc3YXph"
								target="blank"
							>
								<Paragraph text="Instagram" />
							</a>

							{/* <Paragraph text="Telegram" /> */}
						</div>
					) : (
						<div className={styles.grid}>
							<div>
								<a
									href="https://www.instagram.com/idea_republic_apsny?igsh=cDc5eXdqeWc3YXph"
									target="blank"
								>
									<Paragraph text="Instagram" />
								</a>
								{/* <Paragraph text="Telegram" /> */}
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
