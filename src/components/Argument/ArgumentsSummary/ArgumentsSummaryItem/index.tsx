import { FaWeightHanging } from 'react-icons/fa';
import IArgumentItem from './interfaces/IArgumentItem';

export default function ArgumentsSummaryItem({
	text,
	importance,
}: IArgumentItem) {
	const renderWeight = (importance: number) => {
		if (importance === 1) return <FaWeightHanging />;
		if (importance === 2)
			return (
				<>
					<FaWeightHanging />
					<FaWeightHanging />
				</>
			);
		if (importance === 3)
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
			<p>{text && renderWeight(importance)}</p>
		</div>
	);
}
