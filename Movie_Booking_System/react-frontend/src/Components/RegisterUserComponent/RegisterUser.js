import React from "react"
import FormInput from "../FormInput/FormInput"
import "./RegisterUser.css"
// import "./test.css"
import Axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import OperationFailedComponent from "../OperationFailedComponent/OperationFailedComponent";
import OperationSuccessfulComponent from "../OperationSuccessfulComponent/OperationSuccessfulComponent";
import { BsArrowLeft } from 'react-icons/bs';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { VscError } from 'react-icons/vsc';
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

const RegisterUser = ({setShowRegister}) => {
    const navigate = useNavigate();
    // make input states
    const [values, setValues] = React.useState({
        username: "",
        email: "",
        FirstName: "",
        LastName: "",
        password: "",
        reenterPassword: "",
    });

    const [requestError, setRequestError] = React.useState(false);
    const [requestGood, setRequestGood] = React.useState(false);

    const [isAnimating, setIsAnimating] = React.useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = React.useState(false);
    const [color, setColor] = React.useState("bg-purple-400");
    const registerRef = React.useRef(null);
    const formRef = React.useRef(null);

    const handleMouseDown = () => {
        if (isAnimationComplete === false) {
            setIsAnimating(true);
            setColor("bg-purple-400");
        }
    };

    const handleMouseUp = () => {
        if (isAnimationComplete === false) {
            setIsAnimating(false);
            setColor("bg-gray-400");
        }
    };

    const handleAnimationComplete = (layout) => {
        if (registerRef.current.style.width === "100%") {
            console.log("Animation complete");
            // set ref to width 100%
            registerRef.current.style.width = "100%";
            setIsAnimationComplete(true);
            // formRef.current.submit();
            // const data = new FormData(formRef.current);
            // const entries = Object.fromEntries(data.entries());
            // console.log("username" + entries.username);
            handleSubmit(formRef);
            console.log("requestGood: " + requestGood);
            console.log("requestError: " + requestError);
            if (requestGood === true && requestError === false) {
                setColor("bg-green-400");
            }
            if (requestError === true) {
                setColor("bg-red-400");
            }
        }
    };

    // handle login display after user register
    const handleShow = () => {
        navigate("/");
    }

    // handle form submission
    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log("SUBMITTING");
        const data = new FormData(event.current);
        const entries = Object.fromEntries(data.entries());

        const request = {
            "username": entries.username,
            "password": entries.password,
            "email": entries.email,
            "first_name": entries.FirstName,
            "last_name": entries.LastName,
            "admin_status": 0
        }
        console.log(request);
        const result = Axios.post("http://13.58.139.97:5000/user/register", request).then(
            (response) => {
                if (response.data.status) {
                    console.log("SUCCESSFUL CREATION");
                    setRequestGood(true);
                    setColor("bg-green-400");
                    setTimeout(() => {
                        handleShow();
                    }, 1500);
                } else {
                    console.log("DID NOT CREATE");
                    setRequestError(true);
                    setColor("bg-red-400");
                    setTimeout(() => {
                        setRequestError(false);
                        setIsAnimationComplete(false);
                        setIsAnimating(false);
                        setColor("bg-purple-400");
                    }, 3000);
                }
            }
        ).catch((error) => {
            console.log("ERROR");
            setRequestError(true);
            setColor("bg-red-400");
            setTimeout(() => {
                setRequestError(false);
                setIsAnimationComplete(false);
                setIsAnimating(false);
                setColor("bg-purple-400");
            }, 3000);
        });
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    // inputs related to each Field input element / component
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMessage: "Username cannot contain any special characters, should be 3-20 chars long",
            pattern: "^[A-Za-z0-9]{3,20}",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "Email@example.com",
            label: "Email",
            errorMessage: "Email should be valid",
            pattern: "^[A-Za-z0-9@.]{3,20}",
            required: true,
        },
        {
            id: 3,
            name: "FirstName",
            type: "text",
            placeholder: "First Name",
            label: "First Name",
            errorMessage: "First Name should be 1-20 characters long - Cannot contain special chars",
            pattern: "^[A-Za-z0-9]{1,20}",
            required: true,
        },
        {
            id: 4,
            name: "LastName",
            type: "text",
            placeholder: "Last Name",
            label: "Last Name",
            errorMessage: "Last name should be 1-20 characters long - Cannot contain special chars",
            pattern: "^[A-Za-z0-9 ]{3,20}",
            required: true,
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Password should be 3-20 characters long - Cannot contain special chars",
            pattern: "^[A-Za-z0-9]{3,20}",
            required: true,
        },
        {
            id: 6,
            name: "reenterPassword",
            type: "password",
            placeholder: "re-enter Password",
            label: "Re-enter Password",
            errorMessage: "Password should match",
            pattern: values.password,
            required: true,
        },
    ]

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const Icon = () => {
        // if the request was successful
        if (requestGood === true && requestError === false) {
            return <motion.span
                className="flex absolute text-4xl"
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{duration:0.3}}>
                    <IoCheckmarkCircleSharp />
            </motion.span>
        }

        // if the request was not successful
        if (requestError === true) {
            return <motion.span
                className="flex absolute text-4xl"
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{duration:0.3}}>
                    <VscError />
            </motion.span>
        };

    };

    // console.log(values);
    return ( 
        <div className="flex flex-col w-screen h-screen justify-center bg-gradient-to-r from-violet-500 to-purple-500">
            <h1 className="flex relative w-full h-32 justify-center items-center">
                <span className="flex text-5xl font-semibold text-purple-100">Register Now</span>
            </h1>
            <div className="flex w-full h-full justify-center items-end overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        className="flex flex-col w-1/2 h-5/6 rounded-t-3xl shadow-lg shadow-black bg-gray-100"
                        initial={{y: '100%'}}
                        animate={{y: 0}}
                        transition={{duration: 0.3}}>
                        
                        {/* Back button */}
                        <Link to="/" className="flex w-fit h-fit flex-row relative left-5 top-5 space-x-1 cursor-pointer hover:text-blue-500 group">
                            <BsArrowLeft className="flex relative top-1 duration-100 group-hover:-translate-x-1" />
                            <span className="flex">Back</span>
                        </Link>

                        {/* Form */}
                        <form ref={formRef} action="" method="get" className="flex flex-col w-full h-3/4 p-10 gap-5 justify-center items-center">
                            <div className="flex flex-row w-full h-14 gap-5">
                                <FormInput
                                    key = {inputs[0].id}
                                    {...inputs[0]}
                                    value={values[inputs[0].name]}
                                    onChange={onChange}
                                />
                                <FormInput
                                    key = {inputs[1].id}
                                    {...inputs[1]}
                                    value={values[inputs[1].name]}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-row w-full h-14 gap-5">
                                <FormInput
                                    key = {inputs[2].id}
                                    {...inputs[2]}
                                    value={values[inputs[2].name]}
                                    onChange={onChange}
                                />
                                <FormInput
                                    key = {inputs[3].id}
                                    {...inputs[3]}
                                    value={values[inputs[3].name]}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-row w-full h-14 gap-5">
                                <FormInput
                                    key = {inputs[4].id}
                                    {...inputs[4]}
                                    value={values[inputs[4].name]}
                                    onChange={onChange}
                                />
                                <FormInput
                                    key = {inputs[5].id}
                                    {...inputs[5]}
                                    value={values[inputs[5].name]}
                                    onChange={onChange}
                                />
                            </div>
                            <div
                                className="flex relative w-1/2 h-14 top-10 gap-5 justify-center items-center rounded-md cursor-pointer transition-shadow duration-200 hover:shadow-lg bg-gray-200"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}>
                                <motion.div
                                    ref={registerRef}
                                    className={`flex absolute w-0 h-full left-0 rounded-md ${color}`}
                                    animate={isAnimating ? { width: "100%", left:0 } : { width: "0%" }}
                                    transition={{ duration: isAnimating? 1:0.2, ease: "easeInOut" }}
                                    onAnimationComplete={handleAnimationComplete}
                                    layout
                                />
                                {isAnimationComplete ? (
                                <Icon />
                                ) :
                                (<span className="flex absolute">Register</span>)}
                                
                            </div>
                        </form>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
 
export default RegisterUser;