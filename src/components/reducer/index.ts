import IChoice from './../Choice/IChoice';

interface IAction {
	type: string;
}

export const initialState: IChoice[] = {
	choices: [
		{
			suggestion: '',
			text: '',
			details: {
				cons: 0,
				hint: '',
				pros: 0,
			},
		},
	],
};

export default function rootReducer(state: IChoice[], action: IAction) {
	switch (action.type) {
		case 'CREATE_TITLE':
			return { title: 'title' };

		default:
			break;
	}
}
