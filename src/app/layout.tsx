import type { Metadata } from 'next'
import '../styles/fonts.scss'
import '../styles/globals.scss'

export const metadata: Metadata = {
	title: 'aplasticama',
	description: 'aplasticama website',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	)
}
