import { PROD_OBJECTS } from '@/constants/objects'
import Image from 'next/image'
import styles from './ProductionPosters.module.scss'

type ProductionPostersProps = {
	id: string
}

export const ProductionPosters = ({ id }: ProductionPostersProps) => {
	return (
		<div id={id} className={styles.container}>
			{PROD_OBJECTS.map(({ id, bgImg, maskImg, alt, name }) => (
				<div key={id} className={styles.object}>
					<Image width={318.68} height={318.68} src={bgImg} alt={alt} quality={100} />
					<Image
						className={styles.mask}
						width={318.68}
						height={318.68}
						src={maskImg}
						alt={alt}
						quality={100}
					/>
					<span className={styles.label}>{`[${id}] ${name}`}</span>
				</div>
			))}
		</div>
	)
}
