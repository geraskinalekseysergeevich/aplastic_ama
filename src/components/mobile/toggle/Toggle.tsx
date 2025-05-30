'use client'

import { PAGE_COLORS } from '@/constants/navtabs'
import { ROUTES } from '@/constants/routes'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MobileHeader } from '../header/MobileHeader'
import { Menu } from '../open-menu/Menu'
import styles from './Toggle.module.scss'

export const Toggle = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()
	let bgColor = ''

	if (pathname.includes(ROUTES.BLOG_PAGE)) {
		bgColor = PAGE_COLORS.BLOG_PAGE
	} else if (pathname.includes(ROUTES.PRODUCTION_PAGE)) {
		bgColor = PAGE_COLORS.PRODUCTION_PAGE
	} else {
		bgColor = PAGE_COLORS.HOME_PAGE
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className={styles.container}>
			{isMenuOpen ? (
				<Menu onClick={toggleMenu} />
			) : (
				<MobileHeader bgColor={bgColor} onClick={toggleMenu} />
			)}
		</div>
	)
}
