import Image from 'next/image'
import { ImageDescription } from '../image-description/ImageDescription'
import styles from './ImagesWithDescription.module.scss'

export type ImageItem = {
	id: number
	img: string
	date: string
	text: string
	alt: string
}

type ImagesWithDescriptionProps = {
	data: ImageItem[]
}

export const ImagesWithDescription = ({ data }: ImagesWithDescriptionProps) => {
	return (
		<div className={styles.container}>
			{data.map(({ id, img, date, text, alt }) => (
				<div key={id} className={styles.member}>
					<Image width={318} height={215} src={img} alt={alt} quality={100} unoptimized />
					<ImageDescription date={date} text={text} />
				</div>
			))}
		</div>
	)
}
