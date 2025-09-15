import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<
	Partial<{
		header: ReactNode;
		footer: ReactNode;
	}>
>;

export const TemplateScaffold = ({ children, header, footer }: Props) => {
	return (
		<div className="flex min-h-screen flex-col">
			{header && (
				<header className="border-border sticky top-0 z-50 border-b border-gray-300">
					{header}
				</header>
			)}

			<main className="flex-1">{children}</main>

			{footer && <footer>{footer}</footer>}
		</div>
	);
};
