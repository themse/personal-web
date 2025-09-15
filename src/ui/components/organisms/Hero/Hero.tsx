'use client';

import Image from 'next/image';

import { DOCTOR_FULLNAME } from '@/common/constants/app';
import { Button } from '@/components/atoms/Button';
import { ButtonAppointment } from '@/components/organisms/ButtonAppointment';
import { HeartIcon } from '@/ui/icons';

export const Hero = () => {
	const handleGoTo = (anchor: string) => {
		document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section id="home" className="bg-hero py-16">
			<div className="container mx-auto">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="flex flex-col gap-y-6">
						<div className="flex flex-col gap-y-4">
							<h1 className="text-foreground text-4xl font-bold lg:text-5xl">
								Леп&apos;явко Інна Юріївна
							</h1>
							<div className="flex flex-col gap-y-2">
								<p className="text-primary text-xl font-semibold">Сімейний лікар, Алерголог</p>
								<p className="text-secondary text-lg font-medium">Гастроентеролог дитячий</p>
							</div>
						</div>

						<p className="text-foreground text-lg leading-relaxed">
							Працюю з дітьми від народження та дорослими. Спеціалізуюся на лікуванні захворювань
							шлунково-кишкового тракту, алергій, астми. Проводжу вакцинацію та консультації з
							питань харчування.
						</p>

						<div className="flex flex-col gap-4 sm:flex-row">
							<ButtonAppointment />

							<Button
								variant="outline"
								className="px-8 py-4 text-lg"
								onClick={() => handleGoTo('contact')}
							>
								Контакти
							</Button>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="relative h-96 w-80">
							<Image
								src="/dr-photo.jpg"
								alt={DOCTOR_FULLNAME}
								fill
								className="rounded-2xl bg-gray-500 object-cover object-center shadow-2xl"
							/>
							<div className="absolute -right-6 -bottom-6 rounded-xl bg-white p-4 shadow-lg">
								<div className="flex items-center gap-x-2 text-black">
									<HeartIcon className="size-6" />
									<span className="font-semibold">9 років досвіду</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
