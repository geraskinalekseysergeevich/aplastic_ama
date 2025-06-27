import { ContentBlock } from '@/components/blocks/content-block/ContentBlock'
import { Post } from '@/components/blocks/post/Post'
import { TextBlock } from '@/components/blocks/text-block/TextBlock'
import { ButtonColor, ContactButtons } from '@/components/contact-buttons/ContactButtons'
import { FooterBlock } from '@/components/footer/FooterBlock'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { Title } from '@/components/title/Title'
import { POSTS } from '@/constants/blogPosts'
import { PAGE_COLORS } from '@/constants/navtabs'
import Image from 'next/image'
import styles from './page.module.scss'

const BlogPage = () => {
	return (
		<PageLayout bgColor={PAGE_COLORS.BLOG_PAGE}>
			<div className={styles.container}>
				<TextBlock
					title="Афиша мероприятий и&nbsp;познавательный блог"
					paragraph="Здесь у нас есть всё: афиша крутых мероприятий, где мы учимся, общаемся и вдохновляем друг друга, а также наш блог с полезными постами. Мы&nbsp;делаем переработку доступной и&nbsp;понятной, делясь интересными фактами и лайфхаками, которые помогут вам стать настоящими эко-активистами в повседневной жизни!"
				/>
				<ContentBlock title="Прошедшие события" titleIndent={false}>
					<div className={styles.eventsBlock}>
						<Image width={391} height={387} src="/events/post_1.svg" alt="post 1" />
						{/* <Image width={391} height={387} src="/events/post_2.svg" alt="post 2" /> */}
					</div>
				</ContentBlock>
				<div className={styles.postsBlock}>
					<Title text="Посты" indent={false} />
					<div className={styles.postsContainer}>
						{POSTS.map(post => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</div>
				<ContentBlock titleIndent={false} title="Присоединяйся\nк нашей команде!">
					<ContactButtons
						buttonColors={{ left: ButtonColor.YELLOW, right: ButtonColor.BLACK }}
					/>
				</ContentBlock>{' '}
				<FooterBlock />
			</div>
		</PageLayout>
	)
}

export default BlogPage
