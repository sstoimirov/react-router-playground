import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Users } from './components/Users/Users';
import Todos from './components/Todos/Todos';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
      <Router className="App">
        <nav className="navigation-items">
          <div className="navigation-items__home-page"><Link to="/">Home</Link></div>
          <div className="navigation-items__todos-page"><Link to="/todos">Todos</Link></div>
          <div className="navigation-items__users-page"><Link to="/users">Users</Link></div>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/todos" component={Todos} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
  );
}

export default App;
