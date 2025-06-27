import styles from './ImageDescription.module.scss'

type ImageDescriptionProps = {
	date: string
	text: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ImageDescription = ({ date, text }: ImageDescriptionProps) => {
	return (
		<div className={styles.container}>
			{/* <span>{date}</span> */}
			<span>{text}</span>
		</div>
	)
}
