import { createContext, useReducer } from 'react';
import choicesReducers, { IInitialState, initialState } from './reducers';

const AppContext = createContext<{
	state: IInitialState;
	dispatch: React.Dispatch<any>;
}>({
	state: initialState,
	dispatch: () => null,
});

// TODO
// const mainReducer = ({ choices }: IInitialState, action: ActionType) => ({
// 	choices: choicesReducers({ choices }, action),
// });

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(choicesReducers, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
