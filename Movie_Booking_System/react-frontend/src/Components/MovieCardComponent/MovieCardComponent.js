import React, {useState} from "react";
import "./MovieCardComponent.css";
import { motion } from "framer-motion";

// Props to Pass:
//     - imageUrl: url of the imageUrl
//     - title: title of the Movie
//     - body: body description of the movie
const MovieCardComponent = (props) => {

    const handleClick = (event) => {
        if (props.setDisplayModal) {
            props.setDisplayModal({
                imageUrl: props.imageUrl,
                title: props.title,
                releaseDate: props.releaseDate
            });
          };
        }


    return (
        <motion.div className="cardContainer" key={props.key}>
            <motion.div className="imageContainer">
                <motion.img src={props.imageUrl} alt="Image Unavailable" />
            </motion.div>
            <motion.div className="cardContent">
                <motion.div className="cardTitle">
                    <motion.h3>{props.title}</motion.h3>
                </motion.div>
                <motion.div className="cardReleaseDate">
                    <motion.p>{props.releaseDate}</motion.p>
                </motion.div>
                <motion.div className="cardButton">
                    <motion.button onClick= {() => {handleClick(true);}}>
                        See Sessions
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
        
    )
}

export default MovieCardComponent;