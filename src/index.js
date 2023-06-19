import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import  { store, persistor }  from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';


const root = createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)


// basename ="/goit-react-hw-08-phonebook/"
