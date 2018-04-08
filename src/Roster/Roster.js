import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import FullRoster from '../FullRoster/FullRoster';
import Player from '../Player/Player';

const Roster = () => (
    <div>
        <h1>Roster</h1>

        <Link to='/roster/1'>Player 1</Link>
        <Link to='/roster/2'>Player 2</Link>
        
        <Switch>
            <Route exact path='/roster' component={FullRoster} />
            <Route path='/roster/:number' component={Player} />
        </Switch>
    </div>
);

export default Roster;