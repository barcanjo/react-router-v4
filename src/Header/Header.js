import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to='/roster'>Roster</Link>
        <Link to='/schedule'>Schedule</Link>
    </div>
);

export default Header;