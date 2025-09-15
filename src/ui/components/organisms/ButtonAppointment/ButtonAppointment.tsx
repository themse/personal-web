import { HELSI_ME_URL } from '@/common/constants/app';
import { Button } from '@/components/atoms/Button';
import { ExternalLinkIcon } from '@/ui/icons';

export const ButtonAppointment = () => {
	return (
		<Button asChild className="bg-appointment hover:bg-appointment/80">
			<a href={HELSI_ME_URL} target="_blank" rel="noopener noreferrer">
				<span>Записатись на прийом</span>
				<ExternalLinkIcon className="ml-2 size-4" />
			</a>
		</Button>
	);
};
