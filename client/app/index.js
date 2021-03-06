import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Workspace from './components/Workspace/Workspace';
import WorkspaceList from './components/Workspacelist/Workspacelist';
import Home from './components/Home/Home';
import Verify from './components/Verify/verify';

import HelloWorld from './components/HelloWorld/HelloWorld';
import Chartboard from './components/Mainpages/Chartboard';
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Workspace}/>
        <Route exact path="/workspaces" component={WorkspaceList}/>
        <Route exact path="/sign/:displayname" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route path="/mailverify/:token" component={ Verify } />
        <Route path="/chartboard/:token" component={ Chartboard } />
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
