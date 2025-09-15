'use client';

import dynamic from 'next/dynamic';

const Brand = dynamic(() => import('@/components/organisms/Brand').then((module) => module.Brand), {
	ssr: false,
});
const ModeToggle = dynamic(
	() => import('@/components/molecules/ModeToggle').then((module) => module.ModeToggle),
	{ ssr: false },
);

export const Header = () => {
	return (
		<div className="bg-header flex min-h-16 items-center">
			<div className="container mx-auto">
				<div className="mx-1.5 flex">
					<Brand />

					<ModeToggle className="ml-auto" />
				</div>
			</div>
		</div>
	);
};
