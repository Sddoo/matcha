import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import store from './store/store';
import {ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { SnackbarProvider } from "notistack";import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
`

const defaultTheme = createTheme();

let theme = createTheme({
	palette: {
		primary: {
			main: "#1E2F2F",
		},
		secondary: {
			main: "#FFFFFF",
		},
		background: {
			main: "#edeef0"
		},
		border: {
			main: "#D5DCDC"
		},
		elemBackground: {
			main: "#FFFFFF"
		}
	},
	
	typography: {
		body1: {
			[defaultTheme.breakpoints.down('lg')]: {
				fontSize: '0.8rem',
			},
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: '0.8rem',
			}
		},
		button: {
			[defaultTheme.breakpoints.down('lg')]: {
				fontSize: '0.8rem',
			},
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: '0.6rem',
			}
		}
	},
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
    <Provider store={store}>
	    <Global />
	    <SnackbarProvider maxSnack={3}>
		    <ThemeProvider theme={theme}>
			    <App />
		    </ThemeProvider>
	    </SnackbarProvider>
    </Provider>,
    document.getElementById('root')
);
