import React, {useState} from "react";
import "./MovieCardComponent.css";
import {  BsBookmarkPlus } from 'react-icons/bs'
import {  FaBookmark } from 'react-icons/fa'
import Axios from 'axios';
import { motion } from "framer-motion";

// Props to Pass:
//     - imageUrl: url of the imageUrl
//     - title: title of the Movie
//     - body: body description of the movie
const MovieCardComponent = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    React.useEffect(() => {
        if(props.bookmark !== undefined) {
            setIsBookmarked(props.bookmark);
        }

    },[props.bookmark]);

    const handleClick = (event) => {
        props.setDisplayModal({
            imageUrl: props.imageUrl,
            title: props.title,
            releaseDate: props.releaseDate
        });
      };
    
  
    const handleButtonClick = (event) => {
        setIsBookmarked(!isBookmarked);
        const movie_id = props.id
        const user_id = props.userid
        const request = {user_id:user_id,movie_id:movie_id}
        let url = ""
        if (isBookmarked === false){
            console.log("we are going to ADD", isBookmarked)
            const result = Axios.post('http://13.58.139.97:5000/user/bookmark/add',request).then(
                (response) => {
                    if (response.data.status) {
                        console.log("successful")
                    }
                    else{
                        console.log("unsuccessful")
    
                    }
                }
            )
        }
        else{
            console.log("WE ARE GOING TO REMOVE", isBookmarked)
            console.log("request in delete is ",request)

            const del_result = Axios.delete('http://13.58.139.97:5000/user/bookmark/delete',{data: request}).then(
                (response) => {
                    if (response.data.status) {
                        console.log("successful")
                    }
                    else{
                        console.log("unsuccessful")
    
                    }
                }
            )
        }
     

    }

    // React.useEffect(() => {
    //     console.log(props.id,props.bookmark)
    // }, [isBookmarked]);
    return (
        <motion.div className="cardContainer" key={props.id}>
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
                <motion.div className="bookmarkButton" onClick={handleButtonClick}>
                    <motion.a
                        style={{
                            transition: "background-color 0.3s ease-in-out",
                            cursor: "pointer"
                          }}                    
                        >
             {isBookmarked ? <FaBookmark /> : <BsBookmarkPlus/>}

                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
        
    )
}

export default MovieCardComponent;