import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NivoChart from './components/NivoChart';
import DevExpressChart from './components/DevExpressChart';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
<Router>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nivochart" component={NivoChart} />
            <Route path="/DevExpressChart" component={DevExpressChart} />
        </Switch>
    </App>
</Router>,
document.getElementById('root'));
