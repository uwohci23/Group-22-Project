import React from 'react'
import Modal from '../Modal/Modal.js'
import MovieCardComponent from '../MovieCardComponent/MovieCardComponent.js'
import Axios from "axios";
import NavBar from '../NavBar/NavBar.js';

const BookmarkedMoviesPage = ({navBarUserid}) => {
    console.log(navBarUserid)
    const [movieList, setMovieList] = React.useState([]);
    const [originalMovieList, setOriginalMovieList] = React.useState([]);
    const [showMoviesbutton, setShowMoviesButton] = React.useState(true);
    const [displayModal, setDisplayModal] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');


    const handleList = () => {
        setShowMoviesButton(false);
        console.log("userid is ",navBarUserid)
        const result = Axios.get(`http://13.58.139.97:5000/user/${navBarUserid}/bookmarklist`).then(
            (response) => {

                if (response.status < 400) {
                    console.log("userid", navBarUserid)
                    setOriginalMovieList(response.data);
                    setMovieList(response.data);


                }else {
                    setMovieList([]);
                }
             }
        )
    }
    React.useEffect(() => {
        handleList()
    },[]);
    React.useEffect(() => {
        // console.log("ml", movieList);
      }, [movieList]);

    const handleSearchQuery = (query) => {
        setSearchQuery(query);
        if(query !== ''){
            const refinedMovieList = movieList.filter((movie) => {
                return movie.title.toLowerCase().includes(query.toLowerCase());
              });
            setMovieList(refinedMovieList)           
        }
        else{
            setMovieList(originalMovieList)
        }

    }
   
    return(
        <div className="mainCover">
            <NavBar/>
            {/* {showMoviesbutton ?
            <div className="buttonWrapper">
                <button className="showMoviesButton" onClick={handleList}>SEE LIST OF HIGHLIGHTED MOVIES</button>
            </div>
            : null} */}
            <div className="movieGrid">
                {movieList ? movieList.map((movie) => {
                    return <MovieCardComponent key={movie.movie_id} id={movie.movie_id} className="movieChild" title={movie.title} imageUrl={movie.image_url}
                    releaseDate={movie.release_date} userid={navBarUserid} bookmark={true}  setDisplayModal={setDisplayModal}/>
                }) : null}

                {displayModal ? <Modal movieData={displayModal} setShow={setDisplayModal}/> : null}
            </div>      
        </div>
    )
}
export default BookmarkedMoviesPage