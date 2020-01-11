import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainComponent from '../components/MainComponent';

const ReactRoutesComponent: React.FC = () => {
    return <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path={'/'}>
                <MainComponent />
            </Route>
            <Route>
                <MainComponent />
            </Route>
        </Switch>
    </Router>
}

export default ReactRoutesComponent