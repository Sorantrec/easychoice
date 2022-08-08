import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';

import IImportance from './IImportance';

export default function Importance({ importance, setImportance }: IImportance) {
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Importance</InputLabel>
			<Select
				id="demo-simple-select"
				label="Importance"
				labelId="demo-simple-select-label"
				required
				value={String(importance)}
				onChange={(event: SelectChangeEvent) =>
					setImportance(Number(event.target.value))
				}
				defaultValue="Low"
			>
				<MenuItem value={1}>Low</MenuItem>
				<MenuItem value={2}>Middle</MenuItem>
				<MenuItem value={3}>High</MenuItem>
			</Select>
		</FormControl>
	);
}
