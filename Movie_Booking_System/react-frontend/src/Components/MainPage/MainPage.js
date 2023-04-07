import React from 'react'
import Modal from '../Modal/Modal.js'
import MovieCardComponent from '../MovieCardComponent/MovieCardComponent.js'
import Axios from "axios";
import NavBar from '../NavBar/NavBar.js';
import "./MainPage.css";

const MainPage = (props) => {
    const [movieList, setMovieList] = React.useState([]);
    const [originalMovieList, setOriginalMovieList] = React.useState([]);
    const [showMoviesbutton, setShowMoviesButton] = React.useState(true);
    const [displayModal, setDisplayModal] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [bookmarkList,setBookmarkList] = React.useState('');
    const handleList =  async () => {
        setShowMoviesButton(false);
        const response1 = await  Axios.get("http://13.58.139.97:5000/movie/list");
        if (response1.status < 400) {
            setOriginalMovieList(response1.data);
            setMovieList(response1.data);

        }
         // add useEffect to run handleList on page load
      

        const response2 = await Axios.get(`http://13.58.139.97:5000/user/${props.navBarUserid}/bookmarklist`);
        if (response2.status < 400) {
                setBookmarkList(response2.data);
                const updatedMovieList = response1.data.map((movie) => {
                    const bookmark = response2.data.find((bookmark) => bookmark.movie_id === movie.movie_id);
                    if (bookmark) {
                        return { ...movie, bookmark: true };
                    } else {
                        return { ...movie, bookmark: false };
                    }
                });

                // console.log("upd",updatedMovieList)
                setMovieList(updatedMovieList);
                setOriginalMovieList(updatedMovieList);
                
             
        
    }
    }
    React.useEffect(() => {
        handleList()
    },[]);
    
    React.useEffect(() => {
        console.log("on page load",props.navBarUserid)
    }, [movieList,bookmarkList]);
    const handleSearchQuery = (query) => {
        setSearchQuery(query);
        if(query !== ''){
            const refinedMovieList = originalMovieList.filter((movie) => {
                return movie.title.toLowerCase().includes(query.toLowerCase());
              });
            setMovieList(refinedMovieList)           
        }
        else{
            setMovieList(originalMovieList)
        }

    }
    React.useEffect(() => {
        console.log("inputFieldSearch change test");
    },[document.getElementsByClassName('inputFieldSearch')])

    return(

        <div className="mainCover">
            <NavBar setSearchQuery={handleSearchQuery} />
            {/* {showMoviesbutton ?
            <div className="buttonWrapper">
                <button className="showMoviesButton" onClick={handleList}>SEE LIST OF MOVIES</button>
            </div>
            : null} */}
            <div className="movieGrid">
                {movieList ? movieList.map((movie) => {
                    return <MovieCardComponent key={movie.movie_id} id={movie.movie_id} className="movieChild" title={movie.title} imageUrl={movie.image_url}
                    releaseDate={movie.release_date} userid={props.navBarUserid} bookmark={movie.bookmark}  setDisplayModal={setDisplayModal}/>
                }) : null}

                {displayModal ? <Modal movieData={displayModal} setShow={setDisplayModal}/> : null}
            </div>      
        </div>
    )
}
export default MainPage