import React from 'react'
import { useEffect } from 'react'
import "./Modal.css"
import Seat from './Seat'
import Axios from "axios";
import OperationSuccessfulComponent from '../OperationSuccessfulComponent/OperationSuccessfulComponent';

const totalSeatRows = 6;
const totalSeatColumns = 8;
let grid = Array.from({ length: totalSeatRows }, () => Array(totalSeatColumns).fill(0));

export const setGrid = (row, col, value) => {
    grid[row][col] = value;
    console.log(grid);
}

const Modal = (props) => {
    /*
    0 - Unselected
    1 - selected
    2 - sold
    */

    const [success, setSuccess] = React.useState(false);
    const [totalSeats, setTotalSeats] = React.useState(0);
    
    // React.useEffect(() => {
    //     if (props) {
    //         const result = Axios.post(`http://127.0.0.1:5000/theatre/${props.movieData.title}`).then(
    //         (response) => {
    //             if (response.data.status) {
    //                 console.log("SUCCESSFUL CREATION");
    //                 console.log(response.data.data)
    //             } else {
    //                 console.log("DID NOT CREATE");
    //             }
    //         }
    //         ).catch((error) => {
    //             console.log("USEEFFECT ERROR");
    //         });
    //     }
    // }, []);

    const handleClose = () => {
        props.setShow(false);
    }

    const request = () => {
        let seats = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    seats.push(
                        {
                            "row": i,
                            "col": j
                        }
                    );
                }
            }
        }

        return {
            "movie_title": props.movieData.title,
            "seats": seats
        }
    };

    const handleClick = event => {
        const result = Axios.post("http://127.0.0.1:5000/movie/book", request()).then(
        (response) => {
            if (response.data.status) {
                console.log("SUCCESSFUL CREATION");
            } else {
                console.log("DID NOT CREATE");
            }
        }
        ).catch((error) => {
            console.log("ERROR");
        });
    };

    return (
        <div className ="pop-up">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="btn2">
                            <button id="close" onClick={() => {handleClose(true);}} >Close</button>
                        </div>
                        <h1 className="modal-title">{props.movieData.title}</h1>
                        <div className="moviePoster">
                            <img src={props.movieData.imageUrl} alt="" />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="modal-body">
                    Release date: {props.movieData.releaseDate}
                    </div>
                    <hr></hr>
                    <div className="modal-body2">
                        <label>Please select your seats. Each ticket is $8.50. Taxes are included. </label> 
                        <hr></hr>
                    </div>
                    <div className="modal-footer">
                        <div className="container2">
                            <div className="screen"></div>

                            {grid.map((row, rowIndex) => (
                                <div className="row">
                                    {row.map((seat, seatIndex) => (
                                        grid[rowIndex][seatIndex] === 2 ? (
                                            <div className="seat sold"></div>
                                        ) : (
                                            <Seat 
                                                row={rowIndex}
                                                col={seatIndex}
                                                seats={totalSeats}
                                                setSeats={setTotalSeats}
                                            />
                                        )
                                    ))}
                                </div>
                            ))}
                        </div>
                    <div className="modal-body4">
                        <label id="lblName">{`Total: $${totalSeats * 8.5}`}</label> 
                    </div>
                        <div className="btn">
                            <button id="pay" onClick={() => {handleClick(true);}} >Pay</button>
                        </div>
                        
                    </div>
                    {success ? <OperationSuccessfulComponent message={"Successfully emailed your tickets"}/> : null}
                </div>
                <div className ="combo">
                <div className="combo-content">
                    <div className="combo-header">
                        Please Select Combo
                    </div>
                    <div className="combo-body">
                    <div className="moviePoster">
                        <img src={"https://i.pinimg.com/originals/c3/38/f5/c338f52826e44e0be91b677bc476671d.png"} alt="" />
                        <img src={"https://i.pinimg.com/originals/c3/38/f5/c338f52826e44e0be91b677bc476671d.png"} alt="" />
                        </div>
                    </div>
                    <div>
                            <input type="radio" value="Combo 1 (Popcorn with pop)   " name="gender" /> Combo 1 (Popcorn with pop)        
                            <input type="radio" value="Combo 2 (Popcorn with water)   " name="gender" /> Combo 2 (Popcorn with water)   
                            <input type="radio" value="None" name="gender" /> None 
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
    
    
}
export default Modal;