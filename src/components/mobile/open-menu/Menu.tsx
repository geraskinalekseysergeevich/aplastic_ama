import { MobileHeader } from '../header/MobileHeader'
import { MobileNav } from '../nav/MobileNav'
import styles from './Menu.module.scss'

type MenuProps = {
	onClick: () => void
}

export const Menu = ({ onClick }: MenuProps) => {
	return (
		<div className={styles.container}>
			<MobileHeader bgColor="#D0D0D0" onClick={onClick} />
			<MobileNav />
		</div>
	)
}
