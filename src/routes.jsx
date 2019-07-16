import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import ClassList from './components/ClassList/ClassList.jsx'
import Student from './components/Student/Student.jsx';

export default (
  <Switch>
    <Route component={Home} exact path='/'/>
    <Route component={About} path='/about'/>
    <Route component={ClassList} path='/classlist/:class'/>
    <Route component={Student} path='/student/:id'/>
  </Switch>
)