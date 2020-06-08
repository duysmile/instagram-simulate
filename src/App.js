import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import PublicRoute from 'hoc/PublicRoute';
import Register from 'pages/Register'
import Login from 'pages/Login';

const RedirectToLogin = () => (<Redirect to='/login' />);

const App = () => {
  return (
    <ThemeProvider theme={colorsDark}>
      <Router>
        <Switch>
          <Route exact path="/" component={RedirectToLogin} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/login" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
