import React from "react";
import "./RequestModal.css";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";
import OperationSuccessfulComponent from '../OperationSuccessfulComponent/OperationSuccessfulComponent';


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

const RequestModal = ({showLoading, setLoadingStatus, requestStatus, setRequestStatus }) => {
    const [success, setSuccess] = React.useState(false);

    const handlePostLogic = (data) => {
        // handleMoviePost(data);
        console.log("post movie :)");
    }
    return (
        <AnimatePresence mode="wait">
            {
                showLoading && (
                    <motion.div className="backdrop"
                        variants={backdrop}
                        animate="visible"
                        initial="hidden"
                    >
                        <motion.div className="staffModal"
                            variants={modal}
                            // no need for inittial or animate, defined in parent
                        >
                            <button className="modalButtonClose" onClick={() => {setLoadingStatus(!showLoading)}}>Close</button>
                            <motion.h1 className="modalTitle">Review Final Posting</motion.h1>
                            {/* <p>Testing out</p> */}
                            <motion.div className="buttonWrapper">
                                <button className="modalButtonCancel" onClick={() => {setLoadingStatus(!showLoading)}}>Cancel</button>
                            </motion.div>
                            <Link to="/admin"></Link>
                            {success ? <OperationSuccessfulComponent  className="successMsg" message={"Movie was posted successfully"}/> : null}
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
     );
}
 
export default RequestModal;