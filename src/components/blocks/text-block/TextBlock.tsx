import { Paragraph } from '@/components/paragraph/Paragraph'
import { Title } from '@/components/title/Title'
import styles from './TextBlock.module.scss'

type TextBlockProps = {
	id?: string
	title: string
	paragraph: string
}

export const TextBlock = ({ id, title, paragraph }: TextBlockProps) => {
	const formattedParagraph = paragraph.replace(/\\n/g, '\n')

	return (
		<div id={id} className={styles.container}>
			<Title text={title} />
			<Paragraph text={formattedParagraph} />
		</div>
	)
}
