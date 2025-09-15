'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof NextThemesProvider>;

export const ThemeProvider = ({ children, ...props }: Props) => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
