import { navigation } from '@/common/constants/navigation';
import { cn } from '@/common/utils/cn';
import { NavItem } from './NavItem';

type Props = {
	className?: string;
};

export const Navigation = ({ className }: Props) => {
	return (
		<div className={cn('hidden items-center gap-x-8 xl:flex', className)}>
			{navigation.map((item) => (
				<NavItem key={item.label} href={item.href} label={item.label} />
			))}
		</div>
	);
};
