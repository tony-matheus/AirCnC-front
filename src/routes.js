import React from 'react';
import { Router } from '@reach/router';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
  return(
    <>
      <Router>
        <Login path="/"/>
        <Dashboard path="/dashboard"/>
        <New path="/new"/>
      </Router>
    </>
  )
}