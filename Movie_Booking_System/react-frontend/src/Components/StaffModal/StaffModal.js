import React from "react";
import "./StaffModal.css";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";
import OperationSuccessfulComponent from '../OperationSuccessfulComponent/OperationSuccessfulComponent';
import spinLoading from "../../assets/spinning-loading.svg";


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

const StaffModal = ({cardData, showModal, setShowModal, setLoadingStatus, setQueryCompleted, showLoading, setSuccess, setMessage }) => {

    const handleMoviePost = async (data) => {
        const request = {
            title: data.title,
            image_url: data.imageUrl,
            release_date: data.releaseDate,
            age_rating: data.ageRating,
        };
        const result = await Axios.post("http://127.0.0.1:5000/movie/add", request).then(
            (response) => {
                if (response.data.status) {
                    // set status here
                    setSuccess(true);
                    setMessage("Posting Successful! You can close this window.");
                } else {
                    setSuccess(false);
                    setMessage("Posting failed! duplicate movie name");
                }
            }
        ).catch((error) => {
            setSuccess(false);
            setMessage("Posting failed! interval server error");
        });
    }

    const handlePostLogic = (data) => {
        // handleMoviePost(data);
        console.log("post movie :)");
        const logTest = () => {
            setShowModal(false);
            setQueryCompleted(true);
        }
        setLoadingStatus(true);
        setSuccess(true);
        setMessage("Posting Successful! You can close this window.");

        // handleMoviePost(data);
        setTimeout(logTest, 3000);
    }


    return (
        <AnimatePresence mode="wait">
            {
                showModal && (
                    <motion.div className="backdrop"
                        variants={backdrop}
                        animate="visible"
                        initial="hidden"
                    >
                        <motion.div className="staffModal"
                            variants={modal}
                            // no need for inittial or animate, defined in parent
                        >
                            <button className="modalButtonClose" onClick={() => {setShowModal(!showModal)}}>Close</button>
                            <motion.h1 className="modalTitle">Review Final Posting</motion.h1>
                            <MovieCardComponent key={6789998212} id={6789998212} className="movieChild" title={cardData.title} imageUrl={cardData.imageUrl}
                                releaseDate={cardData.releaseDate} bookmark={true} />
                            <motion.div className="svgWrapper">
                                {showLoading ? <motion.img src={spinLoading} alt="nothing here" /> : null}
                            </motion.div>
                            <motion.div className="buttonWrapper">
                                <button className="modalButtonSubmit" onClick={() => {handlePostLogic(cardData)}}>Submit</button>
                                <button className="modalButtonCancel" onClick={() => {setShowModal(!showModal)}}>Cancel</button>
                            </motion.div>
                            <Link to="/admin"></Link>
                            {/* {success ? <OperationSuccessfulComponent  className="successMsg" message={"Movie was posted successfully"}/> : null} */}
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
     );
}
 
export default StaffModal;