import { TextField } from '@mui/material';

import ITitleField from './ITitleField';

const errorMessage = 'Field is required';

export const TitleField = ({
	choiceTitle,
	setChoiceTitle,
	saveBtnClicked,
}: ITitleField) => {
	return (
		<TextField
			error={saveBtnClicked && choiceTitle === ''}
			helperText={saveBtnClicked && choiceTitle === '' ? errorMessage : null}
			id="outlined-basic"
			label="Title"
			onChange={(event) => setChoiceTitle(event.target.value)}
			required
			variant="outlined"
		/>
	);
};
