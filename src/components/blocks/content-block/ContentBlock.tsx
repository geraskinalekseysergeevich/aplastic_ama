import { Title } from '@/components/title/Title'
import { ReactNode } from 'react'
import styles from './ContentBlock.module.scss'

type ContentBlockProps = {
	id?: string
	title: string
	children: ReactNode
	titleIndent?: boolean
}

export const ContentBlock = ({ id, title, children, titleIndent }: ContentBlockProps) => {
	return (
		<div id={id} className={styles.container}>
			<Title indent={titleIndent} text={title} />
			{children}
		</div>
	)
}
