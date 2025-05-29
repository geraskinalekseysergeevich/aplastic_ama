import { ContentBlock } from '@/components/blocks/content-block/ContentBlock'
import { ReelsBlock } from '@/components/blocks/reels-block/ReelsBlock'
import { TextBlock } from '@/components/blocks/text-block/TextBlock'
import { ButtonColor, ContactButtons } from '@/components/contact-buttons/ContactButtons'
import { EnterComposition } from '@/components/enter-comp/EnterComposition'
import { FooterBlock } from '@/components/footer/FooterBlock'
import { BigImage } from '@/components/image-blocks/big-image/BigImage'
import { Posters } from '@/components/image-blocks/posters/Posters'
import { Recycling } from '@/components/image-blocks/recycling/Recycling'
import { ImagesWithDescription } from '@/components/image-blocks/with-description/ImagesWithDescription'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { Paragraph } from '@/components/paragraph/Paragraph'
import { Title } from '@/components/title/Title'
import { TEAM_MEMBERS } from '@/constants/team'
import styles from './page.module.scss'

export default function Home() {
	return (
		<PageLayout>
			<div className={styles.container}>
				<TextBlock
					title="Что происходит с&nbsp;пластиком в Абхазии?"
					paragraph="В последние годы количество пластикового мусора в нашем регионе растет. По статистике, жители Абхазии производят в&nbsp;среднем более 20 тыс. тонн пластиковых отходов в год, и&nbsp;это&nbsp;число продолжает увеличиваться. Большая часть отходов пластика оказывается на свалках, что негативно сказывается на&nbsp;экосистеме нашего региона."
				/>
				<EnterComposition />
				<TextBlock
					title="Переработка дает шанс&nbsp;[[сделать мир чуть лучше!]] Это&nbsp;путь к осознанности и&nbsp;ответственности за то, что&nbsp;мы&nbsp;потребляем."
					paragraph="Переработка — это процесс превращения отходов в новые материалы или продукты. Она подразумевает масштабный цикл действий — сбор, сортировку, переработку и производство нового из вторсырья. К сожалению, не весь пластиковый мусор подходит для переработки."
				/>
				<ContentBlock
					id={'labeling-plastic-waste'}
					title="Что означает маркировка пластиковых отходов?"
				>
					<Posters />
				</ContentBlock>
				<Paragraph text="Переработка учит нас бережному отношению к продуктам и&nbsp;открывает новые возможности для креатива. Например, пластиковые бутылки могут стать основой для создания уникальной городской мебели, которая украсит наши площади, парки и другие общественные места. Наш проект фокусируется именно на этом. " />

				<ContentBlock id="recycling" title="Как мы перерабатываем ваши пластиковые отходы?">
					<Recycling />
				</ContentBlock>

				<TextBlock
					title="Мы собираем пластиковый&nbsp;мусор, сортируем его и перерабатываем, создавая&nbsp;[[совершенно новые]] [[изделия — городскую мебель]] и&nbsp;мерч нашего проекта."
					paragraph="В результате появляются не только удобные, но и уникальные решения, которые придают нашему региону особый стиль и&nbsp;индивидуальность."
				/>
				<ReelsBlock />
				<TextBlock
					title="Это команда нашего проекта. Познакомимся?"
					paragraph="Мы регулярно проводим образовательные лекции, распространяем знания о переработке в социальный сетях и каждый день трудимся на производстве, чтобы уникальной городской мебели в Абхазии стало больше, а пластикового мусора — меньше. "
				/>
				<ImagesWithDescription data={TEAM_MEMBERS} />
				<Title text="Переработка — это [[возможность дать вторую жизнь]] не только пластиковым отходам, но и [[нашим идеям и мечтам]]. Начни с малого: сортируй отходы, участвуй в акциях по сбору мусора. Поддерживай нас и&nbsp;другие проекты, которые работают над экологией!" />
				<BigImage
					src="/big-images/subbotnik.png"
					date="05.05.25"
					text="Уоу! Наш первый общественный субботник на побережье, было просто супер"
					alt="subbotnik"
				/>
				<ContentBlock
					id="contacts"
					titleIndent={false}
					title="Присоединяйся\nк нашей команде!"
				>
					<ContactButtons
						buttonColors={{ left: ButtonColor.YELLOW, right: ButtonColor.BLACK }}
					/>
				</ContentBlock>
				<FooterBlock />
			</div>
		</PageLayout>
	)
}
