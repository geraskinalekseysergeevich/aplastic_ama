import styles from './ImageDescription.module.scss'

type ImageDescriptionProps = {
	date: string
	text: string
}

export const ImageDescription = ({ date, text }: ImageDescriptionProps) => {
	return (
		<div className={styles.container}>
			<span>{date}</span>
			<span>{text}</span>
		</div>
	)
}
