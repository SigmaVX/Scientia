import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Game from '../containers/Game/Game';
import Results from '../containers/Results/Results';
import Home from '../containers/Home/Home';

export const getRoutes = () =>{
    // Abstracted Routes So We Can Add Guards & Complexity
    let routes = (
        <Switch>
            <Route exact path="/game" component={Game}/>
            <Route exact path="/results" component={Results}/>
            <Route exact path="/" component={Home}/>
            <Redirect to="/" />
        </Switch>
        );
    return routes;
};