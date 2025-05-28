import { ContentBlock } from '@/components/blocks/content-block/ContentBlock'
import { TextBlock } from '@/components/blocks/text-block/TextBlock'
import { ButtonColor, ContactButtons } from '@/components/contact-buttons/ContactButtons'
import { FooterBlock } from '@/components/footer/FooterBlock'
import { BigImage } from '@/components/image-blocks/big-image/BigImage'
import { ProductionPosters } from '@/components/image-blocks/prod-posters/ProductionPosters'
import { ImagesWithDescription } from '@/components/image-blocks/with-description/ImagesWithDescription'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { Paragraph } from '@/components/paragraph/Paragraph'
import { TRINKETS } from '@/constants/trinkets'
import styles from './page.module.scss'

const ProductionPage = () => {
	return (
		<PageLayout bgColor="#FFFF00">
			<div className={styles.container}>
				<ContentBlock title="Что мы создаем из&nbsp;переработанного пластика?">
					<Paragraph text="Мы собираем пластиковый мусор, учим этому и привлекаем к&nbsp;сортировке абхазов. Путем переработки в нашем производственном цехе мы создаем из вашего мусора мебель для&nbsp;нашего города — табуреты, скамьи, урны и другое. Также&nbsp;мы&nbsp;производим мерч бренда, который участвует в акции «Аԥхьашьа — ҳалука»." />
					<Paragraph text="Принесите свои пластиковые отходы нам в любое время или&nbsp;поместите их в наши специальные контейнеры." />
				</ContentBlock>
				<ProductionPosters id="objects" />
				<Paragraph text="Для нас переработка — не только экологическая необходимость, но&nbsp;и&nbsp;образ жизни. Этот процесс способствует бережному отношению к ресурсам и вдохновляет на творчество. Переработанные нами материалы становятся основой для&nbsp;функциональных решений, которые помогут разнообразить нашу городскую среду и сотворить красоту." />
				<BigImage
					src="/big-images/chair.png"
					date="20.05.25"
					text="Посмотрите, как красиво выглядят наши&nbsp;объекты в окружающей среде"
					alt="chair"
				/>
				<TextBlock
					id="gifts"
					title="Уоу, каждый может стать частью нашего проекта!"
					paragraph="Мы запускаем акцию «Аԥхьашьа — ҳалука»\nДля этого всего лишь нужно:\n1. Собрать 1 кг или больше пластиковых отходов\n2. Принести их на наше производство\n3. Получить в качестве благодарности фирменный брелок из&nbsp;переработанного пластика!\n\nКаждый килограмм пластика — это шаг к чистой планете. Всех участников акции ждут не только приятные подарки, но и шанс стать частью экосообщества, где каждая мелочь важна. Поделитесь впечатлениями в социальных сетях и вдохновляйте других на заботу об экологии!"
				/>
				<ImagesWithDescription data={TRINKETS} />

				<ContentBlock titleIndent={false} title="Присоединяйся к нашей команде!">
					<ContactButtons
						buttonColors={{ left: ButtonColor.GRAY, right: ButtonColor.BLACK }}
					/>
				</ContentBlock>
				<FooterBlock />
			</div>
		</PageLayout>
	)
}

export default ProductionPage
