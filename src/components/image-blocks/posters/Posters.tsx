import { POSTERS } from '@/constants/posters'
import Image from 'next/image'
import styles from './Posters.module.scss'

export const Posters = () => {
	return (
		<div className={styles.container}>
			{POSTERS.map(({ id, img, alt }) => (
				<div key={id} className={styles.poster}>
					<Image width={318.68} height={318.68} src={img} alt={alt} quality={100} />
				</div>
			))}
		</div>
	)
}
