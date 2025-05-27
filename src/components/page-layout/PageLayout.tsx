import { CSSProperties, ReactNode } from 'react'
import { LeftScreen } from '../left-screen/LeftScreen'
import styles from './PageLayout.module.scss'

type PageLayoutProps = {
	children: ReactNode
	bgColor?: string
}

export const PageLayout = ({ children, bgColor = '#FFFFFF' }: PageLayoutProps) => {
	return (
		<div className={styles.container} style={{ '--bg-color': bgColor } as CSSProperties}>
			<LeftScreen />
			<div className={styles.content}>{children}</div>
		</div>
	)
}
