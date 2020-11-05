import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./redux/store";

import './index.css';
import Wayfinder from './components/Wayfinder';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<React.StrictMode>
					<Wayfinder />
			  	</React.StrictMode>
			  </Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
