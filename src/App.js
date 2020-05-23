import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './utils';
import AppRouter from './routes';

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<h3>Hello World</h3>
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
