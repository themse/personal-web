import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME } from '@/common/constants/app';

export const Brand = () => {
	const { resolvedTheme } = useTheme();

	let imgSrc = '/logo/light.jpg';

	switch (resolvedTheme) {
		case 'light':
			imgSrc = '/logo/light.jpg';
			break;
		case 'dark':
			imgSrc = '/logo/dark.jpg';
			break;
	}

	return (
		<Link href="/">
			<Image src={imgSrc} alt={APP_NAME} width={50} height={50} className="rounded-full" />
		</Link>
	);
};
