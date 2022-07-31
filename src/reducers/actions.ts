import IChoice from '../components/Choice/IChoice';
import { ActionTypes } from './types';

export const createChoice = (choice: IChoice) => {
	return {
		type: ActionTypes.CREATE_CHOICE,
		payload: choice,
	};
};
