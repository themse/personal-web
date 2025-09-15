import { Header } from '@/components/organisms/Header';
import { TemplateScaffold } from '@/components/templates/Scaffold';

export default function HomePage() {
	return (
		<TemplateScaffold header={<Header />} footer={<p>Some footer</p>}>
			<div className="container mx-auto">Hello world</div>
		</TemplateScaffold>
	);
}
