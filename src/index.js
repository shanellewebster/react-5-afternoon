import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//Since we're using routing we'll be needing to import HashRouter from react-router-dom and wrap the App component.
import { HashRouter } from 'react-router-dom';
//Since our store has been created, we can hook it up to our App. This will allow our App to have access to the store and the reducers and will also allow our App to compile correctly.
import store from './store'
import { Provider } from 'react-redux'



ReactDOM.render(
//The Provider component will "provide" the store to our App.
<Provider store = {store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();

