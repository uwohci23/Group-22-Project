import React from 'react'
import { useEffect } from 'react'
import "./Modal.css"
import Seat from './Seat'
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

    let combo1 = 12.50;
    let combo2 = 10.50;
    const [comboCost, setComboCost] = React.useState(0);
    const [success, setSuccess] = React.useState(false);
    const [totalSeats, setTotalSeats] = React.useState(0);
    
    if (!props) {
        return null;
    } 

    const handleClose = () => {
        props.setShow(false);
    }
    const handleClick = event => {
        // props.setShow(false);
        setSuccess(true);
      };

    const handleCombo1 = event => {

        let checkbox = document.getElementById("combo1");
        checkbox.addEventListener( "change", () => {
            if ( checkbox.checked ) {
               setComboCost(combo1);
            } else {
              setComboCost(0);
            }
         });
    };

    const handleCombo2 = event => {
        
        let checkbox = document.getElementById("combo2");
        checkbox.addEventListener( "change", () => {
            if ( checkbox.checked ) {
               setComboCost(combo2);
            } else {
              setComboCost(0);
            }
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
                        <label id="lblName">{"Total: $" + ((totalSeats * 8.5)+comboCost)}</label> 
                    </div>
                        <div className="btn">
                            <button id="pay" onClick={() => {handleClick(true);}} >Pay</button>
                        </div>
                        
                    </div>
                    {success ? <OperationSuccessfulComponent message={"Successfully emailed your tickets"}/> : null}
                </div>
                <div className ="combo">
                <div className="combo-content">
                    <div className="combo-title">
                        Please Select Combo
                    </div>
                    <div className="combo-body">
                    <div className="comboPic">
                        <img src={"https://i.pinimg.com/originals/c3/38/f5/c338f52826e44e0be91b677bc476671d.png"} alt="" />
                        <img src={"https://cdn-icons-png.flaticon.com/512/2892/2892731.png"} alt="" />
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Location_arithmetic_vertical.svg/1200px-Location_arithmetic_vertical.svg.png"} alt="" />
                        <img src={"https://i.pinimg.com/originals/c3/38/f5/c338f52826e44e0be91b677bc476671d.png"} alt="" />
                        <img src={"https://static.vecteezy.com/system/resources/previews/009/380/496/original/soda-can-clipart-design-illustration-free-png.png"} alt="" />
                        </div>   
                    </div> 
                    <div className= "radioBtns" >      
                            <input type="checkbox" id="combo1" onChange={() => {handleCombo1();}} value="Combo 1 (Popcorn with soda)   "  /> Combo 1: $10.50 (Popcorn with water)  
                        </div>
                        <div className= "radioBtns">      
                        <input type="checkbox" id="combo2" onChange={(event) => {handleCombo2(event);}} value="Combo 2 (Popcorn with water)   "  /> Combo 2: $12.50 (Popcorn with soda)   
                        </div>
                    <div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
    
    
}
export default Modal;