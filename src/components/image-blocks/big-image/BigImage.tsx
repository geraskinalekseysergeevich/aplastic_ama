import Image from 'next/image'
import { ImageDescription } from '../image-description/ImageDescription'
import styles from './BigImage.module.scss'

type BigImageProps = {
	src: string
	date: string
	text: string
	alt: string
}

export const BigImage = ({ src, date, text, alt }: BigImageProps) => {
	return (
		<div className={styles.container}>
			<Image width={658} height={444} src={src} alt={alt} quality={100} />
			<ImageDescription date={date} text={text} />
		</div>
	)
}
