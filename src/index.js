import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Style from './style/style.scss';
import Root from './Root';
import App from './component/App';
import * as serviceWorker from './component/serviceWorker';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" render={({ match }) => <App match={match} />}/>
            {/*<Route path="/" render={({ match }) => <App match={match}{...this.props} />}/>*/}
        </BrowserRouter>
    </Root>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
