import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './Hello'
import 'tachyons';
import * as serviceWorker from './serviceWorker';

// can give properties to Hello -> can use it in Hello.js file
ReactDOM.render(<Hello greeting={'Hello!'}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
