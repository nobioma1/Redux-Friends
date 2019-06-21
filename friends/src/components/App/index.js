import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import FriendList from '../FriendsList';
import Header from '../Header';
import NotFound from '../NotFound';
import LoginForm from '../LoginForm';
import PrivateRoute from '../PrivateRoute';
import AddFriend from '../AddFriend';

const withRouterLoginForm = withRouter(LoginForm);
const withRouterAddForm = withRouter(AddFriend);
const withRouterNotFound = withRouter(NotFound);

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={withRouterLoginForm} />} />
          <PrivateRoute exact path="/" component={FriendList} />
          <PrivateRoute exact path="/add" component={withRouterAddForm} />
          <Route component={withRouterNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
