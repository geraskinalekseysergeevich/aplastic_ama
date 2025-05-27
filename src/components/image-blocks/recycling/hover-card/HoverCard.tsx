import styles from './HoverCard.module.scss'

type HoverCardProps = {
	text: string
}

export const HoverCard = ({ text }: HoverCardProps) => {
	return (
		<div className={styles.container}>
			<span>Так происходит</span>
			<p>{text}</p>
		</div>
	)
}
