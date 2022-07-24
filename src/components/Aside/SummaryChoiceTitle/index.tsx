import ISummaryChoiceTitle from './ISummaryChoiceTitle';

export default function SummaryChoiceTitle({
	currentKey,
	text,
}: ISummaryChoiceTitle) {
	let choicesWidthArray: any = [];

	return (
		<p ref={(ref) => (choicesWidthArray[currentKey] = ref?.offsetWidth)}>
			{text}
		</p>
	);
}
