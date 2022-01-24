import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import Inputs from './components/pages/Inputs/Inputs';
import DataDisplay from './components/pages/DataDisplay/DataDisplay';
import Layout from './components/pages/Layout/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#9c27b0',
		},
		error: {
			main: '#d32f2f',
		},
		warning: {
			main: '#ed6c02',
		},
		info: {
			main: '#0288d1',
		},
		success: {
			main: '#2e7d32',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.6)',
			disabled: 'rgba(0, 0, 0, 0.12)',
		},
		background: {
			paper: '#fff',
			default: '#eee',
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontSize: '5rem',
			fontWeight: 300,
			lineHeight: 1.167,
		},
		h2: {
			fontSize: '3.75rem',
			fontWeight: 300,
			lineHeight: 1.2,
		},
		h3: {
			fontSize: '3rem',
			fontWeight: 400,
			lineHeight: 1.167,
		},
		h4: {
			fontSize: '2.12rem',
			fontWeight: 400,
			lineHeight: 1.235,
		},
		h5: {
			fontSize: '1.5rem',
			fontWeight: 400,
			lineHeight: 1.334,
		},
		subtitle1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: 1.75,
		},
		subtitle2: {
			fontSize: '0.875rem',
			fontWeight: 500,
			lineHeight: 1.57,
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight: 400,
			lineHeight: 1.43,
		},
		button: {
			fontSize: '0.875rem',
			fontWeight: 500,
			lineHeight: 1.75,
		},
		caption: {
			fontSize: '0.75rem',
			fontWeight: 400,
			lineHeight: 1.66,
		},
		overline: {
			fontSize: '0.75rem',
			fontWeight: 400,
			lineHeight: 2.66,
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="Inputs" element={<Inputs />} />
						<Route path="DataDisplay" element={<DataDisplay />} />
						<Route path="Layout" element={<Layout />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
