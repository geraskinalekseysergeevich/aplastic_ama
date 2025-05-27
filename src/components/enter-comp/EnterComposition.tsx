import { Circle } from '../animations/circle/Circle'
import { Cups } from '../animations/cups/Cups'
import { ScrollOn } from '../animations/scroll-on/ScrollOn'
import { Square } from '../animations/square/Square'
import styles from './EnterComposition.module.scss'

export const EnterComposition = () => {
	return (
		<div className={styles.container}>
			<ScrollOn />
			<div className={styles.grid}>
				<Square />
				<Circle />
			</div>
			<Cups />
		</div>
	)
}
