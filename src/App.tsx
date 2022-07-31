import './App.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import Aside from './components/Aside';
import Choice from './components/Choice';
import Header from './components/Header';
import { AppProvider } from './reducers/context';

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

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<AppProvider>
					<Header setSelectedOption={setSelectedOption} />
					<main>
						<Aside />
						{selectedOption === 'choice' ? <Choice /> : null}
					</main>
				</AppProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
