import React from 'react';

// Dumb Component (not a smart Component)
export const Square = ({onClick, value}) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);
