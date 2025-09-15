import Link from 'next/link';

import { ArrowLeftIcon } from '@/ui/icons';
import { cn } from '@/common/utils/cn';

type Props = {
	className?: string;
};

export const ButtonBackToMain = ({ className }: Props) => {
	return (
		<Link
			href="/"
			className={cn(
				'hover:text-secondary/80 flex items-center gap-x-2 font-semibold text-black transition-colors',
				className,
			)}
		>
			<ArrowLeftIcon className="size-5" />
			<span>Повернутися на головну</span>
		</Link>
	);
};
