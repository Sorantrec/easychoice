import CustomButton from '../CustomButton';

import IHeader from './IHeader';

export default function Header({ setSelectedOption }: IHeader) {
	return (
		<header>
			<h1 className="logo">EasyChoice</h1>
			<CustomButton
				text="Make choice"
				onClick={() => setSelectedOption('choice')}
			/>
			<CustomButton
				text="Compare choices"
				onClick={() => setSelectedOption('compare')}
			/>
		</header>
	);
}
