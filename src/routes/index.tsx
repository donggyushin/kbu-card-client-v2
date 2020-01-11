import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import MainComponent from '../components/MainComponent';
import LoginComponent from '../components/LoginComponent';

const ReactRoutesComponent: React.FC = () => {
    return <Switch>
        <Route exact path='/login'>
            <LoginComponent />
        </Route>
        <Route exact path='/'>
            <MainComponent />
        </Route>
        <Route>
            <MainComponent />
        </Route>
    </Switch>

}

export default ReactRoutesComponent