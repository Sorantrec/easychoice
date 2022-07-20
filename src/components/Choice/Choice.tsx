import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ConsProsItem from './../ConsProsItem/ConsProsItem';
import IChoice from './interfaces/IChoice';
import IItem from './../Item/interfaces/IItem';

const errorMessage = 'Field is required';

export default function Choice() {
	const [choiceItem, setChoiceItem] = useState<IChoice>();
	const [choiceTxt, setChoiceTxt] = useState<string>('');
	const [cons, setCons] = useState<IItem[]>([]);
	const [consWeight, setConsWeight] = useState<number>(0);
	const [pros, setPros] = useState<IItem[]>([]);
	const [prosWeight, setProsWeight] = useState<number>(0);
	const [saveBtnClicked, setSaveBtnClicked] = useState<boolean>(false);
	const [suggestion, setSuggestion] = useState<string>('');

	useEffect(() => {
		if (consWeight > 0 || prosWeight > 0) {
			if (prosWeight > consWeight) setSuggestion('Looks like good');
			else if (consWeight > prosWeight) setSuggestion('Probably bad choice');
			else setSuggestion('Too complected to make a good choice');
		}
	}, [consWeight, prosWeight]);

	useEffect(() => {
		for (const item of cons) {
			setConsWeight(() => consWeight + item.weight);
		}
	}, [cons]);

	useEffect(() => {
		for (const item of pros) {
			setProsWeight(() => prosWeight + item.weight);
		}
	}, [pros]);

	useEffect(() => {
		if (choiceItem) {
			window.localStorage.setItem(
				choiceItem.txt.split(' ').join('_'),
				JSON.stringify(choiceItem)
			);
		}
	}, [choiceItem]);

	const saveChoice = () => {
		setSaveBtnClicked(true);
		if (consWeight || prosWeight) {
			setChoiceItem({
				txt: choiceTxt,
				suggestion: suggestion,
				details: {
					cons: consWeight,
					pros: prosWeight,
					hint:
						consWeight < 5 || prosWeight < 5
							? 'Maybe you should add more cons or pros?'
							: '',
				},
			});
		}
	};

	return (
		<form>
			<TextField
				error={saveBtnClicked && choiceTxt === ''}
				helperText={saveBtnClicked && choiceTxt === '' ? errorMessage : null}
				id="outlined-basic"
				label="Choice title"
				onChange={(event) => setChoiceTxt(event.target.value)}
				required
				variant="outlined"
			/>
			<ConsProsItem
				choiceTxt={choiceTxt}
				items={cons}
				itemsName={'Cons'}
				setItems={setCons}
			/>
			<ConsProsItem
				choiceTxt={choiceTxt}
				items={pros}
				itemsName={'Pros'}
				setItems={setPros}
			/>
			<div>
				{choiceTxt ? (
					<>
						Your choice<h3>{choiceTxt}</h3>
					</>
				) : null}
			</div>
			<div>{suggestion}</div>
			<Button type="submit" variant="contained" onClick={saveChoice}>
				Save choice
			</Button>
		</form>
	);
}
