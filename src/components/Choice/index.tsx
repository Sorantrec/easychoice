import { useEffect, useState } from 'react';

import { TitleField } from './TitleField';
import Argument from '../Argument';
import CurrentChoiceTitle from './CurrentChoiceTitle';
import CustomButton from '../CustomButton';
import Suggestion from './Suggestion';

import IArgumentItem from '../Argument/ArgumentsSummary/ArgumentsSummaryItem/interfaces/IArgumentItem';
import IChoice from './IChoice';

export default function Choice() {
	const [choiceTitle, setChoiceTitle] = useState<string>('');

	const [cons, setCons] = useState<IArgumentItem[]>([]);
	const [consImportance, setConsImportance] = useState<number>(0);

	const [pros, setPros] = useState<IArgumentItem[]>([]);
	const [prosImportance, setProsImportance] = useState<number>(0);

	const [saveBtnClicked, setSaveBtnClicked] = useState<boolean>(false);

	const [savedChoice, setSavedChoice] = useState<IChoice>();

	const [suggestion, setSuggestion] = useState<string>('');

	useEffect(() => {
		cons.forEach((item) =>
			setConsImportance(() => consImportance + item.weight)
		);
	}, [cons]);

	useEffect(() => {
		pros.forEach((item) =>
			setProsImportance(() => prosImportance + item.weight)
		);
	}, [pros]);

	useEffect(() => {
		if (savedChoice) {
			window.localStorage.setItem(
				savedChoice.text.split(' ').join('_'),
				JSON.stringify(savedChoice)
			);
		}
	}, [savedChoice]);

	const saveChoice = () => {
		setSaveBtnClicked(true);
		if (consImportance || prosImportance) {
			setSavedChoice({
				text: choiceTitle,
				suggestion: suggestion,
				details: {
					cons: consImportance,
					pros: prosImportance,
					hint:
						consImportance < 5 || prosImportance < 5
							? 'Maybe you should add more cons or pros?'
							: '',
				},
			});
		}
	};

	return (
		<form>
			<TitleField
				choiceTitle={choiceTitle}
				saveBtnClicked={saveBtnClicked}
				setChoiceTitle={setChoiceTitle}
			/>
			<Argument
				choiceTitle={choiceTitle}
				args={cons}
				name={'Cons'}
				setArguments={setCons}
			/>
			<Argument
				choiceTitle={choiceTitle}
				args={pros}
				name={'Pros'}
				setArguments={setPros}
			/>
			<CurrentChoiceTitle choiceTitle={choiceTitle} />
			<Suggestion
				consImportance={consImportance}
				prosImportance={prosImportance}
				setSuggestion={setSuggestion}
				suggestion={suggestion}
			/>
			<CustomButton text="Save choice" onClick={saveChoice} />
		</form>
	);
}
