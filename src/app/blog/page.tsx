import { ContentBlock } from '@/components/blocks/content-block/ContentBlock'
import { Post } from '@/components/blocks/post/Post'
import { TextBlock } from '@/components/blocks/text-block/TextBlock'
import { ButtonColor, ContactButtons } from '@/components/contact-buttons/ContactButtons'
import { FooterBlock } from '@/components/footer/FooterBlock'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { POSTS } from '@/constants/blogPosts'
import styles from './page.module.scss'

const BlogPage = () => {
	return (
		<PageLayout bgColor="#E4E4E4">
			<div className={styles.container}>
				<TextBlock
					title="Афиша мероприятий и познавательный блог"
					paragraph="Здесь у нас есть всё: афиша крутых мероприятий, где мы учимся, общаемся и вдохновляем друг друга, а также наш блог с полезными постами. Мы делаем переработку доступной и&nbsp;понятной, делясь интересными фактами и лайфхаками, которые помогут вам стать настоящими эко-активистами в повседневной жизни!"
				/>
				{POSTS.map(post => (
					<Post key={post.id} post={post} />
				))}
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
