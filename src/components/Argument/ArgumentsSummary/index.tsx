import ArgumentsSummaryItem from './ArgumentsSummaryItem';

import IArgumentsSummary from './IArgumentsSummary';
import IArgumentItem from './ArgumentsSummaryItem/interfaces/IArgumentItem';

export default function ArgumentsSummary({ args }: IArgumentsSummary) {
	return (
		<span>
			{args?.map(({ text, weight }: IArgumentItem) => (
				<ArgumentsSummaryItem text={text} weight={weight} />
			))}
		</span>
	);
}
