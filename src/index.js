import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import {BrowserRouter as Router} from 'react-router-dom';


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
            <Router>
                <App/>
            </Router>
    </Provider>,
    document.getElementById('root')
);