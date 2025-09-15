import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { TemplateScaffold } from '@/components/templates/Scaffold';

export default function HomePage() {
	return (
		<TemplateScaffold header={<Header />} footer={<Footer />}>
			<div className="container mx-auto">Hello world</div>
		</TemplateScaffold>
	);
}
