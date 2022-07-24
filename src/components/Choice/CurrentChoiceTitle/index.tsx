import ICurrentChoiceTitle from './ICurrentChoiceTitle';

export default function CurrentChoiceTitle({
	choiceTitle,
}: ICurrentChoiceTitle) {
	return (
		<div>
			{choiceTitle ? (
				<>
					Your choice<h3>{choiceTitle}</h3>
				</>
			) : null}
		</div>
	);
}
