import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import {Auth, Chat} from './pages';


const App = props => {

    const { isAuth } = props;

    return (
        <div className="wrapper" data-theme="default">
            <Route exact path={['/', '/signin', '/signup', '/signup/result']} component={Auth}/>
            <Route exact path='/' render={() => (isAuth ? <Chat/> : <Redirect to='/signin'/>)} />
        </div>
    )
}


export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
