import clsx from 'clsx'
import Link from 'next/link'
import styles from './ContactButtons.module.scss'

export enum ButtonColor {
	YELLOW = 'yellow',
	BLACK = 'black',
	GRAY = 'gray',
}

type ContactButtonsProps = {
	buttonColors: {
		left: ButtonColor
		right: ButtonColor
	}
}

export const ContactButtons = ({ buttonColors }: ContactButtonsProps) => {
	return (
		<div className={styles.container}>
			<Link
				className={clsx(styles.link, styles.left, styles[buttonColors.left])}
				href="https://t.me/lost_in_space2"
			>
				<p>Стать волонтером</p>
			</Link>
			<Link
				className={clsx(styles.link, styles.right, styles[buttonColors.right])}
				href="https://t.me/lost_in_space2"
			>
				<p>Стать партнером</p>
			</Link>
		</div>
	)
}
