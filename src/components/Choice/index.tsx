import { useContext, useState } from 'react';

import { TitleField } from './TitleField';
import Argument from '../Argument';
import Suggestion from './Suggestion';

import IArgumentItem from '../Argument/ArgumentsSummary/ArgumentsSummaryItem/interfaces/IArgumentItem';
import { AppContext } from '../../reducers/context';
import { createChoice } from '../../reducers/actions';

const getSummaryImportance = (obj: IArgumentItem[]) => {
	let summary = 0;
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			const { importance } = obj[key];
			summary += importance;
		}
	}
	return summary;
};

export default function Choice() {
	const { dispatch } = useContext(AppContext);

	const [choiceTitle, setChoiceTitle] = useState<string>('');

	const [cons, setCons] = useState<IArgumentItem[]>([]);

	const [pros, setPros] = useState<IArgumentItem[]>([]);

	const [suggestion, setSuggestion] = useState<string>('');

	const saveChoice = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!choiceTitle) {
			return;
		}
		const choice = {
			id:
				choiceTitle.split(' ').join('') +
				getSummaryImportance(cons) +
				getSummaryImportance(pros),
			text: choiceTitle,
			suggestion: suggestion,
			details: {
				cons: getSummaryImportance(cons),
				pros: getSummaryImportance(pros),
				hint:
					getSummaryImportance(cons) < 5 || getSummaryImportance(pros) < 5
						? 'Maybe you should add more cons or pros?'
						: '',
			},
		};
		dispatch(createChoice(choice));
		window.localStorage.setItem(
			choiceTitle.split(' ').join('_'),
			JSON.stringify(choice)
		);
		setChoiceTitle('');
		setSuggestion('');
	};

	return (
		<form
			onSubmit={(event: React.FormEvent<HTMLFormElement>) => saveChoice(event)}
		>
			<TitleField choiceTitle={choiceTitle} setChoiceTitle={setChoiceTitle} />
			<Argument
				choiceTitle={choiceTitle}
				args={{ data: cons, setArg: setCons }}
				name={'Cons'}
			/>
			<Argument
				choiceTitle={choiceTitle}
				args={{ data: pros, setArg: setPros }}
				name={'Pros'}
			/>
			<Suggestion
				consImportance={getSummaryImportance(cons)}
				prosImportance={getSummaryImportance(pros)}
				setSuggestion={setSuggestion}
				suggestion={suggestion}
			/>
			<button>Save choice</button>
		</form>
	);
}
