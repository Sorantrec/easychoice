import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';

import IImportance from './IImportance';

export default function Importance({
	importance,
	itemError,
	setImportance,
}: IImportance) {
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Weight</InputLabel>
			<Select
				id="demo-simple-select"
				label="Weight"
				labelId="demo-simple-select-label"
				error={itemError}
				value={String(importance)}
				onChange={(event: SelectChangeEvent) =>
					setImportance(Number(event.target.value))
				}
			>
				<MenuItem value={1}>Low</MenuItem>
				<MenuItem value={2}>Middle</MenuItem>
				<MenuItem value={3}>High</MenuItem>
			</Select>
		</FormControl>
	);
}
