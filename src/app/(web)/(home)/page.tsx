import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';
import { Navigation } from '@/components/organisms/Navigation';
import { TemplateScaffold } from '@/components/templates/Scaffold';

export default function HomePage() {
	return (
		<TemplateScaffold
			header={<Header navigation={<Navigation className="justify-end" />} />}
			footer={<Footer />}
		>
			<Hero />
		</TemplateScaffold>
	);
}
