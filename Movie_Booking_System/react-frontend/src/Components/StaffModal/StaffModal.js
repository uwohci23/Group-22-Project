import React from "react";
import "./StaffModal.css";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";
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
    const [stillCall, setStillCall] = React.useState(false);

    const handleMoviePost = async (data) => {
        const request = {
            title: data.title,
            image_url: data.imageUrl,
            release_date: data.releaseDate,
            age_rating: data.ageRating,
        };
        const result = await Axios.post("http://13.58.139.97:5000/movie/add", request).then(
            (response) => {
                if (response.data.status < 300) {
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
            setMessage("Posting failed! Check to see if movie is duplicate");
        });
    }




    // will handle showing new modal and everything related to this
    const handlePostLogic = (data) => {
        // handleMoviePost(data);
        console.log("post movie :)");
        const logTest = () => {
            if (stillCall) {
                handleMoviePost(data);
                setShowModal(false);
                setLoadingStatus(false);
                setQueryCompleted(true);
            }
        }
        setLoadingStatus(true);
        setStillCall(true);
        setTimeout(logTest, 3000);
    }

    const handleCancellation = () => {
        setStillCall(false);
        setLoadingStatus(false);
        setShowModal(!showModal);
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
                                <button className="modalButtonCancel" onClick={() => {handleCancellation()}}>Cancel</button>
                            </motion.div>
                            <Link to="/admin"></Link>
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
     );
}
 
export default StaffModal;