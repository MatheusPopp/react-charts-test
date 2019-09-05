import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NivoChart from './components/NivoChart';
import Recharts from './components/Recharts';
import Plotly from './components/Plotly';
import DevExpressChart from './components/DevExpressChart';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
<Router>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nivochart" component={NivoChart} />
            <Route path="/devexpress" component={DevExpressChart} />
            <Route path="/recharts" component={Recharts} />
            <Route path="/plotlyjs" component={Plotly} />
        </Switch>
    </App>
</Router>,
document.getElementById('root'));
