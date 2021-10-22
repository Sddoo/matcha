import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import store from './store/store';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { SnackbarProvider } from "notistack";

const theme = createTheme({
	palette: {
		primary: {
			main: "#AD6551",
		},
		secondary: {
			main: "#F7E4D4",
		}
	},
})

ReactDOM.render(
    <Provider store={store}>
	    <SnackbarProvider maxSnack={3}>
		    <ThemeProvider theme={theme}>
			    <App />
		    </ThemeProvider>
	    </SnackbarProvider>
    </Provider>,
    document.getElementById('root')
);
