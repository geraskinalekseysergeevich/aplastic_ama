import { CSSProperties, ReactNode } from 'react'
import { LeftScreen } from '../left-screen/LeftScreen'
import { Toggle } from '../mobile/toggle/Toggle'
import styles from './PageLayout.module.scss'

type PageLayoutProps = {
	children: ReactNode
	bgColor: string
}

export const PageLayout = ({ children, bgColor }: PageLayoutProps) => {
	return (
		<div className={styles.container} style={{ '--bg-color': bgColor } as CSSProperties}>
			<Toggle />
			<LeftScreen />
			<div className={styles.content}>{children}</div>
		</div>
	)
}
