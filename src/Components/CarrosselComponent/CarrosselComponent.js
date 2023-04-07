import {React, useState, useEffect, useRef} from "react";
import "./CarrosselComponent.css";
import { motion } from "framer-motion";


function CarrosselComponent() {

    const carrossel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
    }, [])
    
    const images = [
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Morbius_%28film%29_poster.jpg/220px-Morbius_%28film%29_poster.jpg",
        "https://m.media-amazon.com/images/M/MV5BZTI1OWIxZmItMDJhYy00OWM3LTk3ZjgtYjdiNmYwNTUxMzJmXkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91bxYmAaiQL._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51iNl2qY95L._AC_.jpg"
    ]

    return (
        <div className="carrosselWrapper">

            <motion.div className="carrossel" ref={carrossel} whileTap={{cursor: "grabbing"}}>
                <motion.div className="innerCarrossel"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.25 }}
                >
                    {images.map((image) => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="image not found" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </div>
    );
}

export default CarrosselComponent;
