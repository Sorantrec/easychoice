import { TextField } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IItem from './../Item/interfaces/IItem';
import InputLabel from '@mui/material/InputLabel';
import IProps from './IProps';
import Item from '../Item/Item';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormWrapper, Wrapper } from './index.styles';

export default function ConsProsItem({
	choiceTxt,
	items,
	itemsName,
	setItems,
}: IProps) {
	const [currentItem, setCurrentItem] = useState<string>('');
	const [currentItemWeight, setCurrentItemWeight] = useState<number>(1);
	const [itemError, setItemError] = useState<boolean>(false);
	const addItem = () => {
		if (currentItem.length > 1 && choiceTxt.length > 1) {
			if (!itemError)
				setItems((oldItems: IItem[]) => [
					...oldItems,
					{ txt: currentItem, weight: currentItemWeight },
				]);
			setItemError(false);
		} else setItemError(true);
	};
	return (
		<Wrapper>
			<h5>Fill {itemsName}</h5>
			<FormWrapper>
				<TextField
					error={itemError}
					id="outlined-basic"
					label={itemsName}
					onChange={(event) => setCurrentItem(event.target.value)}
					required
					variant="outlined"
				/>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Weight</InputLabel>
					<Select
						id="demo-simple-select"
						label="Weight"
						labelId="demo-simple-select-label"
						onChange={(event) =>
							setCurrentItemWeight(Number(event.target.value))
						}
						value={String(currentItemWeight)}
						error={itemError}
					>
						<MenuItem value={1}>Low</MenuItem>
						<MenuItem value={2}>Middle</MenuItem>
						<MenuItem value={3}>High</MenuItem>
					</Select>
				</FormControl>
				<Button variant="contained" color="secondary" onClick={addItem}>
					Add
				</Button>
			</FormWrapper>
			<span>
				{items.map(({ txt, weight }: IItem) => (
					<Item txt={txt} weight={weight} />
				))}
			</span>
		</Wrapper>
	);
}
