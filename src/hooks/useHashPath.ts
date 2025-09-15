import { useState, useEffect } from 'react';

export const useHashPath = () => {
	const [hash, setHash] = useState(() => {
		if (typeof window === 'undefined') return '';

		return window.location.hash;
	});

	useEffect(() => {
		const onHashChange = () => {
			setHash(window.location.hash);
		};

		window.addEventListener('hashchange', onHashChange);

		return () => {
			window.removeEventListener('hashchange', onHashChange);
		};
	}, []);

	return hash;
};
