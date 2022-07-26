import './App.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, createContext } from 'react';

import Aside from './components/Aside';
import Choice from './components/Choice';
import Header from './components/Header';

const theme = createTheme({
	palette: {
		secondary: {
			contrastText: '#fefefe',
			main: '#4CAF50',
		},
	},
});

function App() {
	const [selectedOption, setSelectedOption] = useState<string>('choice');
	const initialState: any[] = [];
	const Data = createContext(initialState);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Data.Provider value={initialState}>
					<Header setSelectedOption={setSelectedOption} />
					<main>
						<Aside />
						{selectedOption === 'choice' ? <Choice /> : null}
					</main>
				</Data.Provider>
			</ThemeProvider>
		</div>
	);
}

export default App;
