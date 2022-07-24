import { FaWeightHanging } from 'react-icons/fa';
import IArgumentItem from './interfaces/IArgumentItem';

export default function ArgumentsSummaryItem({ text, weight }: IArgumentItem) {
	const renderWeight = (weight: number) => {
		if (weight === 1) return <FaWeightHanging />;
		if (weight === 2)
			return (
				<>
					<FaWeightHanging />
					<FaWeightHanging />
				</>
			);
		if (weight === 3)
			return (
				<>
					<FaWeightHanging />
					<FaWeightHanging />
					<FaWeightHanging />
				</>
			);
	};

	return (
		<div>
			<p>{text}</p>
			<p>{text && renderWeight(weight)}</p>
		</div>
	);
}
