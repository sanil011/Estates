import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from "@mui/material";
import App from './App';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const theme = createTheme({
    palette: {
        mode: "light",
        white: {
            main: "#fbfbfb",
        },
        primary: {
            main: "#6C63FF",
        },
        secondary: {
            main: "#4D4D4D",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            ms:430,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: "'Source Sans Pro', sans-serif",
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(Store);
root.render(
<React.StrictMode>
<Provider store={Store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </PersistGate>
</Provider>
</React.StrictMode>

);


