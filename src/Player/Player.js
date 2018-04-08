import React from 'react';

const players = [
    {
        id: '1',
        name: 'John McQueen',
    },
    {
        id: '2',
        name: 'Robert Brosh',
    }
];

const getPlayer = (id) => players.filter(p => p.id === id);

const Player = (props) => (
    <div>
        <h1>Player {getPlayer(props.match.params.number)[0].name}</h1>
    </div>
);

export default Player;