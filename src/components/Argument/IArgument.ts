import { Dispatch, SetStateAction } from 'react';
import IArgumentItem from './ArgumentsSummary/ArgumentsSummaryItem/interfaces/IArgumentItem';

export default interface IArgument {
	choiceTitle: string;
	args: {
		data: IArgumentItem[];
		setArg: Dispatch<SetStateAction<Array<IArgumentItem>>>;
	};
	name: string;
	// setArguments: Dispatch<SetStateAction<Array<IArgumentItem>>>;
}
