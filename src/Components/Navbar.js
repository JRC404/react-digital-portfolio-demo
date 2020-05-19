import React from 'react';
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';

const Navbar = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar;