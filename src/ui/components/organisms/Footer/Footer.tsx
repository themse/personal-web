'use client';

import { Separator } from '@/components/atoms/Separator';
import dynamic from 'next/dynamic';

const Brand = dynamic(() => import('@/components/organisms/Brand').then((module) => module.Brand), {
	ssr: false,
});

export const Footer = () => {
	return (
		<div className="bg-footer border-t border-gray-300">
			<div className="container mx-auto">
				<div className="grid gap-8 px-2 py-4 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
					<div className="flex flex-col gap-y-4">
						<div className="flex items-center gap-x-2">
							<Brand />
						</div>
						<p className="text-black/80">
							Професійна медична допомога з турботою та увагою до кожного пацієнта
						</p>
					</div>

					<div className="flex flex-col gap-y-4">
						<h4 className="text-secondary text-lg font-semibold">Контакти</h4>
						<div className="flex flex-col gap-y-2 text-black/80">
							<p>м. Київ, вул. Святослава Хороброго, 2</p>
							<p>
								<a href="tel:+380935999617">+380 93 599 96 17</a>
							</p>
							<p>
								<a href="+380954981225">+380 95 498 12 25</a>
							</p>
							<p className="break-all">
								<a href="mailto:inna.lepiavko.kabimed@gmail.com">inna.lepiavko.kabimed@gmail.com</a>
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-y-4">
						<h4 className="text-secondary text-lg font-semibold">Ліцензійна інформація</h4>
						<div className="flex flex-col gap-y-2 text-sm text-black/80">
							<p>Ліцензія МОЗ України №706 від 14.04.2023</p>
							<p>ФОП Леп&apos;явко Інна Юріївна</p>
							<p>ЄДРПОУ: 3104602648</p>
						</div>
					</div>
				</div>

				<Separator className="mx-2 my-6 sm:mx-0" />

				<div className="px-2 pb-8 text-center text-sm text-black/60 sm:px-0">
					<p>&copy; 2025 Кабінет лікаря Інни Леп&apos;явко. Всі права захищені.</p>
				</div>
			</div>
		</div>
	);
};
