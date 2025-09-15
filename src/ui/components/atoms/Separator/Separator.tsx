import { cn } from '@/common/utils/cn';

type Props = {
	className?: string;
};

export const Separator = ({ className }: Props) => {
	return <hr className={cn('my-4 h-0.5 w-full border-none bg-gray-400/30', className)} />;
};
