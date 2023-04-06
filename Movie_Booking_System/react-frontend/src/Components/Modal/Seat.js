import React from 'react';
import { setGrid } from './Modal';

const Seat = (props) => {
    const handleSeat  = (event) => {
        console.log("Row: " + props.row + " Col: " + props.col);
        if (event.target.className === "seat") {
            event.target.className = "seat selected";
            setGrid(props.row, props.col, 1);
            props.setSeats(props.seats + 1);
        } else {
            event.target.className = "seat";
            setGrid(props.row, props.col, 0);
            props.setSeats(props.seats - 1);
        }
    };

    return (
        <div className="seat" onClick={e => (handleSeat(e))}></div>
    )
}

export default Seat;