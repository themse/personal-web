'use client';

import { Slot } from '@radix-ui/react-slot';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import { ButtonAppointment } from '@/components/organisms/ButtonAppointment';

const Brand = dynamic(() => import('@/components/organisms/Brand').then((module) => module.Brand), {
	ssr: false,
});
const ModeToggle = dynamic(
	() => import('@/components/molecules/ModeToggle').then((module) => module.ModeToggle),
	{ ssr: false },
);

type Props = {
	navigation?: ReactNode;
};

export const Header = ({ navigation }: Props) => {
	return (
		<div className="bg-header flex min-h-16 items-center">
			<div className="container mx-auto">
				<div className="mx-1.5 flex flex-col items-center justify-center gap-4 py-2 sm:flex-row sm:justify-between sm:py-0">
					<Brand />

					<Slot className="flex-1">{navigation}</Slot>

					<div className="flex items-center gap-x-4">
						<ButtonAppointment />
						<ModeToggle />
					</div>
				</div>
			</div>
		</div>
	);
};
