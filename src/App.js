import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import {Auth, Chat} from './pages';


class App extends Component {
    render() {
        return <div className="wrapper" data-theme="default">
            <Route exact path={['/', '/login', '/signup']} component={Auth}/>
            <Route exact path='/im' component={Chat}/>
        </div>
    }
}

export default App;
