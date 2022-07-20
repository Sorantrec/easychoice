import { FaWeightHanging } from 'react-icons/fa';

import IItem from './interfaces/IItem';

export default function Item({ txt, weight }: IItem) {
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
			<p>{txt}</p>
			<p>{txt && renderWeight(weight)}</p>
		</div>
	);
}
