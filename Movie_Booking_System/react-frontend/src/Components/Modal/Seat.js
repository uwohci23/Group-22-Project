import React from 'react';

const Seat = (props) => {
    const [selected, setSelected] = React.useState(false);

    React.useEffect(() => {
        console.log(selected)
        // Update seat map
        props.setSeatMap(props.seatMap.map((row, i) => {
            if (i === props.row) {
                return row.map((col, j) => {
                    if (j === props.col) {
                        return selected ? 1 : 0;
                    }
                    return col;
                });
            }
            return row;
        }));
        console.log(props.seatMap);
    }, [selected]);

    const handleSeat  = (event) => {
        console.log("Row: " + props.row + " Col: " + props.col);
        setSelected(!selected);
        if (event.target.className === "seat") {
            event.target.className = "seat selected";
            props.setSeats(props.seats + 1);
        } else {
            event.target.className = "seat";
        }

        // console.log(props.seatMap);
    };

    return (
        <div className="seat" onClick={e => (handleSeat(e))}></div>
    )
}

export default Seat;