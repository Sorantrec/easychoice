import { useCallback, useState } from 'react';

import { TextField } from '@mui/material';
import ArgumentsSummary from './ArgumentsSummary';
import CustomButton from '../CustomButton';
import Importance from './Importance';

import { FormWrapper, Wrapper } from './index.styles';

import IArgumentItem from './ArgumentsSummary/ArgumentsSummaryItem/interfaces/IArgumentItem';
import IArgument from './IArgument';

export default function Argument({ name, args }: IArgument) {
	const [argument, setArgument] = useState<string>('');
	const [importance, setImportance] = useState<number>(1);
	const [error, setError] = useState<boolean>(false);
	const { data, setArg } = args;

	const addArgument = useCallback(() => {
		if (argument.length > 1) {
			if (!error) {
				setArg((oldItems: IArgumentItem[]) => [
					...oldItems,
					{ text: argument, importance },
				]);
				setError(false);
				setArgument('');
			}
		} else setError(true);
	}, [argument, importance, error, setArg]);

	return (
		<Wrapper>
			<h5>Fill {name}</h5>
			<FormWrapper>
				<TextField
					error={error}
					id="outlined-basic"
					label={name}
					variant="outlined"
					value={argument}
					onChange={(event) => {
						setError(false);
						setArgument(event.target.value);
					}}
				/>
				<Importance importance={importance} setImportance={setImportance} />
				<CustomButton text="Add" classes="secondary" onClick={addArgument} />
			</FormWrapper>
			<ArgumentsSummary args={data} />
		</Wrapper>
	);
}
