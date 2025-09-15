'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tv } from 'tailwind-variants';

import { useHashPath } from '@/hooks/useHashPath';

const navVariants = tv({
	base: 'text-black hover:text-secondary transition-colors px-1 border-b-2 border-transparent',
	variants: {
		isActive: {
			true: 'border-secondary font-semibold ',
		},
	},
	defaultVariants: {
		isActive: false,
	},
});

type Props = {
	label: string;
	href: string;
};

export const NavItem = ({ href, label }: Props) => {
	const pathname = usePathname();
	const hashPath = useHashPath();

	const isAnchor = href.startsWith('#');

	const isActive = isAnchor ? hashPath === href : pathname === href;

	const variants = navVariants({ isActive });

	if (isAnchor) {
		return (
			<a href={href} className={variants}>
				{label}
			</a>
		);
	}

	return (
		<Link href={href} className={variants}>
			{label}
		</Link>
	);
};
