import ITitleField from './ITitleField';
import ErrorMessage from './../Error';
import { useState } from 'react';

const errorMessages = {
	invalid: 'Field is required',
};

export const TitleField = ({ choiceTitle, setChoiceTitle }: ITitleField) => {
	const [errors, setErrors] = useState<string[]>([]);

	return (
		<label>
			<p>Title</p>
			<input
				type="text"
				onChange={(event) => setChoiceTitle(event.target.value)}
				onInvalid={() => {
					setErrors((state) => [
						...state.filter((error) => error !== errorMessages.invalid),
						errorMessages.invalid,
					]);
				}}
				value={choiceTitle}
				required
			/>
			<ErrorMessage errorMessages={errors} />
		</label>
	);
};
