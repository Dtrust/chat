import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import {Auth, Chat} from './pages';


const App = props => {

    const { isAuth } = props;

    return (
        <div className="wrapper" data-theme="default">
            <Route
                exact
                path={['/signin', '/signup', '/signup/verify']}
                component={Auth}
            />
            <Route
                path='/'
                render={() => (isAuth ? <Chat/> : <Redirect to='/signin'/>)}
            />
        </div>
    )
}


export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
