import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from './LoginPage';

const PublicRouter: React.FC = () => {
    return <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path={'/'}>
                <LoginPage />
            </Route>
            <Route path={'/login'}>
                <LoginPage />
            </Route>
            <Route>
                <LoginPage />
            </Route>
        </Switch>
    </Router>
}

export default PublicRouter