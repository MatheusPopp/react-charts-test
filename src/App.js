import React, { Component } from 'react';
import './App.css';
import './css/pure-min.css';
import { Link } from 'react-router-dom';
import './css/pure-min.css'
import './css/side-menu.css'




class App extends Component {
  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <Link to="/" className="pure-menu-link">Chart test</Link>
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><Link to="/nivochart" className="pure-menu-link">NivoRocks</Link></li>
              <li className="pure-menu-item"><Link to="/devexpress" className="pure-menu-link">DevExpress</Link></li>
              <li className="pure-menu-item"><Link to="/recharts" className="pure-menu-link">Recharts</Link></li>
            </ul>
          </div>
        </div>

        <div id="main">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
