import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import MainComponent from '../components/MainComponent';
import LoginComponent from '../components/LoginComponent';
import CafeteriaPage from '../components/CafeteriaPage';
import TodayPray from '../components/TodayPray';
import LecturePage from '../components/LectureComponent';
import ChapelPage from '../components/ChapelPage';
import SchedulePage from '../components/SchedulePage';
import MileagePage from '../components/MileagePage';

const ReactRoutesComponent: React.FC = () => {
    return <Switch>
        <Route exact path='/login'>
            <LoginComponent />
        </Route>
        <Route exact path='/'>
            <MainComponent />
        </Route>
        <Route exact path='/cafeteria'>
            <CafeteriaPage />
        </Route>
        <Route exact path='/pray'>
            <TodayPray />
        </Route>
        <Route exact path='/lecture'>
            <LecturePage />
        </Route>
        <Route exact path='/chapel'>
            <ChapelPage />
        </Route>
        <Route exact path='/schedule'>
            <SchedulePage />
        </Route>
        <Route exact path='/mileage'>
            <MileagePage />
        </Route>
        <Route>
            <MainComponent />
        </Route>
    </Switch>

}

export default ReactRoutesComponent