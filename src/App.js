import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={FAQ} />
            </Switch>
        </Router>
    );
}

export default App;
