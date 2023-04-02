import React from 'react'
import "./Modal.css"
import OperationSuccessfulComponent from '../OperationSuccessfulComponent/OperationSuccessfulComponent';
import Seatmap from 'react-seatmap';

const Modal = (props) => {
    const [success, setSuccess] = React.useState(false);
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

    const handleCost = event => {
        document.getElementById("lblName").innerHTML = "Total: $" + (document.getElementById("tickets").selectedIndex + 1)*8.5
    };

    return (
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
                    <div cclassName="container">
                        <div cclassName="screen"></div>

                            <div className="row">
                                <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                </div>

                                <div className="row">
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                </div>
                                <div className="row">
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat sold"></div>
                                </div>
                                <div className="row">
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                </div>
                                <div className="row">
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                </div>
                                <div className="row">
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat sold"></div>
                                    <div className="seat"></div>
                                </div>
                                </div>
                <div className="modal-body4">
                    <label id="lblName">Total: $8.50 </label> 
                </div>
                    <div className="btn">
                        <button id="pay" onClick={() => {handleClick(true);}} >Pay</button>
                    </div>
                    
                </div>
                {success ? <OperationSuccessfulComponent message={"Successfully emailed your tickets"}/> : null}
            </div>
        </div>
        
    )
    
}
export default Modal