import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/app/app';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from '~/app/i18n/i18n';
import { Provider } from 'react-redux';
import { store } from '~/app/store/store';
import GlobalStyles from '~/app/components/global-styles/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <GlobalStyles children={<App />} />
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
