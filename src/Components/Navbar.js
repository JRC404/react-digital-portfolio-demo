import React from 'react';
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Employment from './Employment';


const Navbar = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/employment'>Employment</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/employment'>
                        <Employment />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar;