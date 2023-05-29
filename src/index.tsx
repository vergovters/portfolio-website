import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  {store}  from './store/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

i18next.init({
  lng: 'en', // Set the default language
  resources: {
    en: {
      translation: require('.//locals/en/en.json')
    },
    ua: {
      translation: require('.//locals/ua/ua.json')
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
  </React.StrictMode>
);


