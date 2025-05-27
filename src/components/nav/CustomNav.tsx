'use client'

import { NAV_TABS } from '@/constants/navtabs'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './CustomNav.module.scss'

export const CustomNav = () => {
	const pathname = usePathname()

	return (
		<nav className={styles.container}>
			<div className={styles.body}>
				{NAV_TABS.map(({ text, path }) => {
					const isActive = path === '/' ? pathname === path : pathname.startsWith(path)
					return (
						<Link key={path} className={styles.item} href={path}>
							<span className={clsx(styles.linkText, isActive && styles.active)}>
								{text}
								<span className={styles.hoverEffect} />
							</span>
						</Link>
					)
				})}
			</div>
		</nav>
	)
}
