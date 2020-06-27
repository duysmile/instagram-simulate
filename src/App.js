import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import PublicRoute from 'hoc/PublicRoute';
import Register from 'pages/Register'
import Login from 'pages/Login';
import Home from 'pages/Home';

import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <ThemeProvider theme={colorsDark}>
      <Router>
        <Switch>
          <PublicRoute exact path="/accounts/emailsignup" component={Register} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
