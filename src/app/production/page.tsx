import { ContentBlock } from '@/components/blocks/content-block/ContentBlock'
import { TextBlock } from '@/components/blocks/text-block/TextBlock'
import { ButtonColor, ContactButtons } from '@/components/contact-buttons/ContactButtons'
import { FooterBlock } from '@/components/footer/FooterBlock'
import { BigImage } from '@/components/image-blocks/big-image/BigImage'
import { ProductionPosters } from '@/components/image-blocks/prod-posters/ProductionPosters'
import { ImagesWithDescription } from '@/components/image-blocks/with-description/ImagesWithDescription'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { Paragraph } from '@/components/paragraph/Paragraph'
import { PAGE_COLORS } from '@/constants/navtabs'
import { TRINKETS } from '@/constants/trinkets'
import styles from './page.module.scss'

const ProductionPage = () => {
	return (
		<PageLayout bgColor={PAGE_COLORS.PRODUCTION_PAGE}>
			<div className={styles.container}>
				<ContentBlock title="Что мы создаем из&nbsp;переработанного пластика?">
					<Paragraph text="Мы собираем крышки от бутылок и другой твердый пластик, учим этому подрастающее поколение и привлекаем к сбору всех жителей Абхазии. Из собранного и переработанного пластика мы можем производить: Мебель — столы и стулья для помещений и уличных пространств. Интерьерные решения — декоративные панели и стеновые покрытия. Органайзеры — корзины и контейнеры для хранения дома и в офисах. Аксессуары — подносы, подставки, брелоки и многие другие изделия." />
					<Paragraph text="Принесите свои пластиковые отходы с маркировками № 2 и № 5 нам в любое время или&nbsp;поместите их в  специальные контейнеры." />
				</ContentBlock>
				<ProductionPosters id="objects" />
				<Paragraph text="Для нас переработка — не только экологическая необходимость, но&nbsp;и&nbsp;образ жизни. Этот процесс способствует бережному отношению к&nbsp;ресурсам и&nbsp;вдохновляет на творчество. Переработанные нами материалы становятся основой для&nbsp;функциональных решений, которые помогут разнообразить нашу городскую среду и&nbsp;сотворить красоту." />
				<BigImage
					src="/big-images/chair.png"
					date="20.05.25"
					text="Посмотрите, как красиво выглядят наши&nbsp;объекты в окружающей среде"
					alt="chair"
				/>
				<TextBlock
					id="gifts"
					title="Уоу, каждый может стать частью нашего проекта!"
					paragraph="Хочешь внести свой вклад в улучшение экологии Абхазии? Собери пластики № 2 и № 5 и сдай его нам. Участвуй в наших мероприятиях, воркшопах и мастер-классах! Мы открыты для сотрудничества с&nbsp;бизнесом: кафе и рестораны, гостиницы и отели, офисные пространства, магазины и другие компании. Предложим индивидуальные решения и экологичную продукцию, подходящую именно вашему бизнесу."
				/>
				<ImagesWithDescription data={TRINKETS} />

				<ContentBlock titleIndent={false} title="Присоединяйся\nк нашей команде!">
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
