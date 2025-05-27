import { formatText } from '@/utils/formatText'
import styles from './Paragraph.module.scss'

type ParagraphProps = {
	text: string
}

export const Paragraph = ({ text }: ParagraphProps) => {
	const formattedText = formatText(text)

	return <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: formattedText }} />
}
