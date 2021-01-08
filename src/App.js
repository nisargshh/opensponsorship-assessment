import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';

import SignUp from './containers/SignUp/SignUp'
import PlayerList from './containers/PlayerList'
import Profile from './containers/Profile'

import './App.css';
import 'antd/dist/antd.css';

function App() {
  let data = []

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/newprofile">
            <SignUp />
          </Route>
          <Route path="/:id" component={Profile} />
          <Route exact path="/">
            <PlayerList data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
