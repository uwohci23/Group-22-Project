import React from "react";
import "./StaffModal.css";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import MovieCardComponent from "../Components/MovieCardComponent/MovieCardComponent";
import OperationSuccessfulComponent from '../Components/OperationSuccessfulComponent/OperationSuccessfulComponent';


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

const StaffModal = ({cardData, showModal, setShowModal }) => {
    const [success, setSuccess] = React.useState(false);

    const handleMoviePost = (data) => {
        const request = {
            title: data.title,
            image_url: data.imageUrl,
            release_date: data.releaseDate,
            age_rating: data.ageRating,
        };
        const result = Axios.post("http://127.0.0.1:5000/movie/add", request).then(
            (response) => {
                if (response.data.status) {
                    setSuccess(true);
                }
            }
        ).catch((error) => {console.log(false);});
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
                            <motion.h1 className="modalTitle">Review Final Posting</motion.h1>
                            <MovieCardComponent key={6789998212} id={6789998212} className="movieChild" title={cardData.title} imageUrl={cardData.imageUrl}
                                releaseDate={cardData.releaseDate} bookmark={true} />
                            {/* <p>Testing out</p> */}
                            <motion.div className="buttonWrapper">
                                <button className="modalButtonCancel"onClick={() => {handleMoviePost(cardData)}}>Submit</button>
                                <button className="modalButtonCancel"onClick={() => {setShowModal(!showModal)}}>Cancel</button>
                            </motion.div>
                            <Link to="/admin"></Link>
                            {success ? <OperationSuccessfulComponent message={"Movie was posted successfully"}/> : null}
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
     );
}
 
export default StaffModal;