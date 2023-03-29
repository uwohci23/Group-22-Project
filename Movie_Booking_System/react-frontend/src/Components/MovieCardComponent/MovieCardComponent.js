import React, {useState} from "react";
import "./MovieCardComponent.css";
import {  BsBookmarkPlus } from 'react-icons/bs'
import {  FaBookmark } from 'react-icons/fa'
import Axios from 'axios';

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

    // console.log("movie card: ",props.userid)
    // React.useEffect(() => {
    // const updateBookmarks = (event) => {
    //     console.log("user id is ",props.userid);
    //     const result = Axios.get(`http://127.0.0.1:5000/user/${props.userid}/bookmarklist`).then(
    //     (response) => {
    //         if(response.data.status){
    //             console.log("successful",result);
                
    //         }
    //         else{
    //             console.log("unsuccessful");
    //         }
    //     }
    //     )
    // }
    // updateBookmarks();
    // },[1]);
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
        if (isBookmarked == false){
            console.log("we are going to ADD", isBookmarked)
            const result = Axios.post('http://127.0.0.1:5000/user/bookmark/add',request).then(
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

            const del_result = Axios.delete('http://127.0.0.1:5000/user/bookmark/delete',{data: request}).then(
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
        <div className="cardContainer" key={props.id}>
            <div className="imageContainer">
                <img src={props.imageUrl} alt="Image Unavailable" />
            </div>
            <div className="cardContent">
                <div className="cardTitle">
                    <h3>{props.title}</h3>
                </div>
                <div className="cardReleaseDate">
                    <p>{props.releaseDate}</p>
                </div>
                <div className="cardButton">
                    <button onClick= {() => {handleClick(true);}}>
                        See Sessions
                    </button>
                </div>
                <div className="bookmarkButton" onClick={handleButtonClick}>
                    <a
                        style={{
                            transition: "background-color 0.3s ease-in-out",
                            cursor: "pointer"
                          }}                    
                        >
             {isBookmarked ? <FaBookmark /> : <BsBookmarkPlus/>}

                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default MovieCardComponent;