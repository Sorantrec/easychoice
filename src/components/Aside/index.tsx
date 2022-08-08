import { useState, useEffect, useContext } from 'react';

import IChoice from '../Choice/IChoice';

import { AsideWrapper, AsideWrapperItem } from './index.styles';
import SummaryChoiceTitle from './SummaryChoiceTitle';
import { AppContext } from '../../reducers/context';

export default function Aside() {
	const [choicesSummary, setChoicesSummary] = useState<IChoice[]>([]);
	const context = useContext(AppContext);

	useEffect(() => {
		const data = JSON.parse(JSON.stringify(localStorage));
		let choices: IChoice[] = [];
		for (const key in data) {
			if (Object.prototype.hasOwnProperty.call(data, key)) {
				const choice = JSON.parse(data[key]);
				choices = [...choices, choice];
			}
			setChoicesSummary(choices);
		}
	}, [context]);

	return (
		<AsideWrapper>
			<h1>Your choices</h1>
			{choicesSummary.map((choice: IChoice, key: number) => {
				return (
					<AsideWrapperItem key={key}>
						<SummaryChoiceTitle
							currentKey={key}
							text={choice.text}
						></SummaryChoiceTitle>
						<p>{choice.suggestion}</p>
					</AsideWrapperItem>
				);
			})}
		</AsideWrapper>
	);
}
