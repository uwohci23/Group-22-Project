import React from "react";
import "./RequestModal.css";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";
import OperationSuccessfulComponent from '../OperationSuccessfulComponent/OperationSuccessfulComponent';
import greenCheckmark from "../../assets/checkmark-green.png";


const backdrop = {
    visible: { opacity: 1},
    hidden: {opacity: 0}
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const RequestModal = ({queryCompleted, setQueryCompleted, message, success }) => {

    return (
        <AnimatePresence mode="wait">
            {
                queryCompleted && (
                    <motion.div className="backdrop"
                        variants={backdrop}
                        animate="visible"
                        initial="hidden"
                    >
                        <motion.div className="staffModal"
                            variants={modal}
                            // no need for inittial or animate, defined in parent
                        >
                            <button className="modalButtonClose" onClick={() => {setQueryCompleted(!queryCompleted)}}>Close</button>
                            <motion.h1 className="modalTitle">Final Posting</motion.h1>
                            {success ? 
                                <div className="successBlock">
                                    <div className="imageWrapper">
                                        <motion.img src={greenCheckmark} alt="" />
                                    </div>
                                    <motion.p className="successText">{message}</motion.p>
                                </div>
                            :
                                <div className="successBlock">
                                    <div className="imageWrapper">
                                        <motion.img src={greenCheckmark} alt="" />
                                    </div>
                                    <motion.p>supposed to be error</motion.p>
                                </div>                            
                            
                            }
                            <motion.div className="buttonWrapper">
                                <button className="modalButtonCancel" onClick={() => {setQueryCompleted(!queryCompleted)}}>Close</button>
                            </motion.div>
                            <Link to="/admin"></Link>
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
     );
}
 
export default RequestModal;