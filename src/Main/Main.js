import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Roster from '../Roster/Roster';
import Schedule from '../Schedule/Schedule';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
        </Switch>
    </main>
);

export default Main;