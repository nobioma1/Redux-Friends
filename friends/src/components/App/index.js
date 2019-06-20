import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FriendList from '../FriendsList';
import Header from '../Header';
import NotFound from '../NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={FriendList} />
          <Route path="/login" />
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
