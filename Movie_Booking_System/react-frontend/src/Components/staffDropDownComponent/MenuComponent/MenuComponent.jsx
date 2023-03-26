import React from 'react';
import "./MenuComponent.css";
import { motion } from 'framer-motion';

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

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { 
            type: "spring",
            stiffness: 300,
            damping: 24
         }
    },
    closed: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2
        }
    }
}

const MenuComponent = ({ isOpen, setIsOpen }) => {
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
            Menu
            <motion.div 
                variants={menuVariants}
            >
                <svg width="15" height="15" viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16"/>
                </svg>
            </motion.div>
        </motion.button>
        <motion.ul 
            className="listCover"
            variants={ listVariants }
        >
            <motion.li className='listItem' variants={ itemVariants }>item 1</motion.li>
            <motion.li className='listItem' variants={ itemVariants }>item 2</motion.li>
            <motion.li className='listItem' variants={ itemVariants }>item 3</motion.li>
            <motion.li className='listItem' variants={ itemVariants }>item 4</motion.li>
            <motion.li className='listItem' variants={ itemVariants }>item 5</motion.li>
        </motion.ul>
    </motion.nav>
  )
}

export default MenuComponent