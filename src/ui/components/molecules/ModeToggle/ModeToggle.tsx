import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@/ui/icons';
import { cn } from '@/common/utils/cn';

type Props = {
	className?: string;
};

export const ModeToggle = ({ className }: Props) => {
	const { theme, setTheme } = useTheme();

	const Icon = theme === 'dark' ? SunIcon : MoonIcon;

	const handleToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button
			type="button"
			onClick={handleToggle}
			className={cn(className, 'cursor-pointer text-black')}
		>
			<Icon className="size-7" />
		</button>
	);
};
