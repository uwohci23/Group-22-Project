import React from 'react';
import "./MenuComponent.css";
import { motion } from 'framer-motion';
import Axios from "axios";
import MovieCardComponent from "../../MovieCardComponent/MovieCardComponent";


const menuVariants = {
    open: { rotate: 180, transition: { duration: 0.2 }},
    closed: { rotate: 0, transition: { duration: 0.2 }}
}

const listVariants = {
    open: { 
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        trasition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
        }
    },
    closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
        }
    }
}



const MenuComponent = ({ isOpen, setIsOpen }) => {


    const [movieList, setMovieList] = React.useState([]);
    const [searchMovies, setSearchMovies] = React.useState(null);
    React.useEffect(() => {
        handleList();
    }, [])

    const handleSearchQuery = (query) => {

        if(query !== ''){
            const refinedMovieList = movieList.filter((movie) => {
                return movie.title.toLowerCase().includes(query.toLowerCase());
              });
            setSearchMovies(refinedMovieList);    
        }
        else{
            setSearchMovies(null);
        }

    }
    // request for all movies
    // NEEDS TO BE ASYNC SO THAT RENDERING ACTUALLY GETS MOVIES
    const handleList = async () => {
        const result = await Axios.get("http://13.58.139.97:5000/movie/list").then(
            (response) => {
                if (response.status < 400) {
                    setMovieList(response.data);
                    // setSearchMovies(response.data);
                }else {
                    setMovieList([]);
                }
            }
        )
    }
  return (
    <motion.nav 
        className="menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
    >
        <motion.button 
            className="menuButton" 
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.97 }}
        >
            View Movies on Display
            <motion.div 
                variants={menuVariants}
            >
                <svg width="15" height="15" viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16"/>
                </svg>
            </motion.div>
        </motion.button>
        <motion.div className="currentMoviesWrapper">
            <motion.ul
                className="listCover"
                variants={ listVariants }
            >
                <input
                    type="text"
                    placeholder="Search movies..."
                    onChange={(event) => handleSearchQuery(event.target.value)}
                    className="searchBarStaff"

                >
                </input>
                {searchMovies ? searchMovies.map((movie) => {
                        return <MovieCardComponent className="listItemDropdown" key={movie.id} title={movie.title} imageUrl={movie.image_url}
                        releaseDate={movie.release_date}/>
                    }) : <h4>Search For a movie</h4>}
            </motion.ul>
        </motion.div>
    </motion.nav>
  )
}

export default MenuComponent