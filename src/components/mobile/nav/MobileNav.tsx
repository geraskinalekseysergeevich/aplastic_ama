import { CustomNav } from '@/components/nav/CustomNav'
import styles from './MobileNav.module.scss'

export const MobileNav = () => {
	return (
		<div className={styles.container}>
			<CustomNav />
		</div>
	)
}
