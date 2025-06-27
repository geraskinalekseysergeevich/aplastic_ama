import Image from 'next/image'
import styles from './BigImage.module.scss'

type BigImageProps = {
	src: string
	date: string
	text: string
	alt: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BigImage = ({ src, date, text, alt }: BigImageProps) => {
	return (
		<div className={styles.container}>
			<Image width={1921} height={1298} src={src} alt={alt} quality={100} />
			{/* <ImageDescription date={date} text={text} /> */}
		</div>
	)
}
