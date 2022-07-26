import { useCallback, useState } from 'react';

import { TextField } from '@mui/material';
import ArgumentsSummary from './ArgumentsSummary';
import CustomButton from '../CustomButton';
import Importance from './Importance';

import { FormWrapper, Wrapper } from './index.styles';

import IArgumentItem from './ArgumentsSummary/ArgumentsSummaryItem/interfaces/IArgumentItem';
import IProps from './IArgument';

export default function Argument({
	choiceTitle,
	args,
	name,
	setArguments,
}: IProps) {
	const [argument, setArgument] = useState<string>('');
	const [importance, setImportance] = useState<number>(1);
	const [error, setError] = useState<boolean>(false);

	const addArgument = useCallback(() => {
		if (argument.length > 1 && choiceTitle.length > 1) {
			if (!error)
				setArguments((oldItems: IArgumentItem[]) => [
					...oldItems,
					{ text: argument, weight: importance },
				]);
			setError(false);
		} else setError(true);
	}, [argument, choiceTitle]);

	return (
		<Wrapper>
			<h5>Fill {name}</h5>
			<FormWrapper>
				<TextField
					error={error}
					id="outlined-basic"
					label={name}
					required
					variant="outlined"
					onChange={(event) => setArgument(event.target.value)}
				/>
				<Importance
					importance={importance}
					itemError={error}
					setImportance={setImportance}
				/>
				<CustomButton text="Add" classes="secondary" onClick={addArgument} />
			</FormWrapper>
			<ArgumentsSummary args={args} />
		</Wrapper>
	);
}
