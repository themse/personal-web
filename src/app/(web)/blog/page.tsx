import { ButtonBackToMain } from '@/components/organisms/ButtonBackToMain';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { TemplateScaffold } from '@/components/templates/Scaffold';

export default function BlogPage() {
	return (
		<TemplateScaffold
			header={<Header navigation={<ButtonBackToMain className="justify-end" />} />}
			footer={<Footer />}
		>
			<div className="container mx-auto">Blog</div>
		</TemplateScaffold>
	);
}
