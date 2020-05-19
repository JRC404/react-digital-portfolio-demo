This project has been made to help with the creation of the digital portfolio.

Starting projects can be really tough, hopefully this will help you with the idea of how to create.

I'll be updating it with differnt features from react as we cover them.

- [x] React Router
- [ ] Props
- [ ] State

# Process

1. Create a Navbar component and render that in the App.js
2. Go to https://www.npmjs.com/package/react-router-dom & https://reacttraining.com/react-router/ to advance your research and learning!
3. Install react-router-dom and import it inside of the Navbar.js like so:

```javascript
/**
 * inside the terminal: npm i react-router-dom
 */

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
```

4. Create a navigation bar inside of the Navbar component like so:

```javascript
return (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
      {/* what is the switch doing here? */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
```
