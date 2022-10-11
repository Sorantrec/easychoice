import { Button } from '@mui/material';
import { MouseEvent } from 'react';

import ICustomButton from './ICustomButton';

export default function CustomButton({
	classes,
	onClick,
	text,
}: ICustomButton) {
	const customOnlick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if(onClick) onClick();
	};
	return (
		<Button
			type="submit"
			className={classes}
			variant="contained"
			onClick={customOnlick}
		>
			{text}
		</Button>
	);
}
