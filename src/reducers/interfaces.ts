import IChoice from '../components/Choice/IChoice';
import IArgument from './../components/Argument/IArgument';

import { ActionTypes } from './types';

export interface ICreateChoiceActionType {
	type: ActionTypes.CREATE_CHOICE;
	payload: IChoice;
}

export interface IEditChoiceActionType {
	type: ActionTypes.EDIT_CHOICE;
	payload: IChoice;
}

export interface IDeleteChoiceActionType {
	type: ActionTypes.DELETE_CHOICE;
	payload: number;
}
