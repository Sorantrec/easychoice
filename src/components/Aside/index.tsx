import { useState, useEffect, useRef } from 'react';

import IChoice from './../Choice/interfaces/IChoice';

import { AsideWrapper, AsideWrapperItem } from './index.styles';

export default function Aside() {
	const [yourChoices, setYourChoices] = useState<any>([]);
	useEffect(() => {
		const data = JSON.parse(JSON.stringify(localStorage));
		let dataArr: IChoice[] = [];
		for (const key in data) {
			if (Object.prototype.hasOwnProperty.call(data, key)) {
				const element = JSON.parse(data[key]);
				dataArr = [...dataArr, element];
			}
			setYourChoices(dataArr);
		}
	}, []);
	interface IChoceTitle {
		currentKey: any;
		txt: any;
	}

	let choicesWidthArray: any = [];
	const ChoiceTitle = ({ currentKey, txt }: IChoceTitle) => {
		return (
			<p ref={(ref) => (choicesWidthArray[currentKey] = ref?.offsetWidth)}>
				{txt}
			</p>
		);
	};
	const choiceTitleRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (choicesWidthArray.length > 0) console.log(choicesWidthArray);
	}, [choicesWidthArray]);

	return (
		<AsideWrapper>
			<h1>Your choices</h1>
			{yourChoices.map((item: IChoice, key: any) => {
				return (
					<AsideWrapperItem>
						<ChoiceTitle currentKey={key} txt={item.txt}></ChoiceTitle>
						<p>{item.suggestion}</p>
					</AsideWrapperItem>
				);
			})}
		</AsideWrapper>
	);
}
