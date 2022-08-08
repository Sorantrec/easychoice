import IChoice from '../components/Choice/IChoice';
import { ActionTypes } from './types';
import {
	ICreateChoiceActionType,
	IEditChoiceActionType,
	IDeleteChoiceActionType,
} from './interfaces';

const { CREATE_CHOICE, EDIT_CHOICE, DELETE_CHOICE } = ActionTypes;

export type ActionType =
	| ICreateChoiceActionType
	| IEditChoiceActionType
	| IDeleteChoiceActionType;

export interface IInitialState {
	choices: IChoice[];
}

export const initialState: IInitialState = {
	choices: [],
};

export default function choicesReducers(
	state: IInitialState,
	action: ActionType
) {
	const { choices } = state;

	switch (action.type) {
		case CREATE_CHOICE:
			return (state = {
				choices: [
					...choices.filter((choice) => choice.id !== action.payload.id),
					action.payload,
				],
			});

		// case ADD_ARGUMENT:
		// 	return (state = { choices: [...choices, action.payload] });

		default:
			return state;
	}
}
