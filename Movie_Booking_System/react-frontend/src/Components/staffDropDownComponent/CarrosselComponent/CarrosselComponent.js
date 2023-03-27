import {React, useState, useEffect, useRef} from "react";
import "./CarrosselComponent.css";
import { motion } from "framer-motion";

// import pictures needed for carrossel
import UcHillImage from "../../images/UC-hill.png";
import AcebImage from "../../images/aceb-image.jpg";
import GraphsImage from "../../images/graphs-image-concrete.png";
import WesternLogo from "../../images/transparent-western.png";


function CarrosselComponent(images) {

    const carrossel = useRef();
    const [width, setWidth] = useState(0);
    // for now, use the import of all images:

    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
    }, [])

    let imageArray = [
        UcHillImage,
        AcebImage,
        GraphsImage,
        WesternLogo,
    ];
    return (
        <div className="carrosselWrapper">

            <motion.div className="carrossel" ref={carrossel} whileTap={{cursor: "grabbing"}}>
                <motion.div className="innerCarrossel"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {imageArray.map((image) => (
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
