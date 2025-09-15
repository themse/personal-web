import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { APP_NAME, DOCTOR_FULLNAME } from '@/common/constants/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { geistMono, geistSans } from '@/ui/fonts';
import '@/ui/styles/main.css';

export const metadata: Metadata = {
	title: DOCTOR_FULLNAME,
	description: APP_NAME,
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
