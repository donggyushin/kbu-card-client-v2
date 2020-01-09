import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from './MainPage';

const PrivateRouter: React.FC = () => {
    return <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route>
                <MainPage />
            </Route>
        </Switch>
    </Router>
}

export default PrivateRouter