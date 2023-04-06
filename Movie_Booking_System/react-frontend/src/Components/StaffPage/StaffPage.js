import React from "react";
import "./StaffPage.css"
import StaffInput from "../StaffInput/StaffInput.js"
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent.js"
import NavBar from "../NavBar/NavBar";
import Axios from "axios";
import OperationFailedComponent from "../OperationFailedComponent/OperationFailedComponent";
import OperationSuccessfulComponent from "../OperationSuccessfulComponent/OperationSuccessfulComponent";
import StaffDropDownComponent from "../StaffDropDownComponent/StaffDropDownComponent";
import StaffModal from "../StaffModal/StaffModal";
import RequestModal from "../RequestModal/RequestModal";
// import FormInput from "../FormInput/FormInput";

// MAIN COMPONENT, LOGIN PAGE MAIN
const StaffPage = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [cardData, setCardData] = React.useState({});

    const [showLoading, setLoadingStatus] = React.useState(false);
    const [queryCompleted, setQueryCompleted] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [message, setMessage] = React.useState(""); 

    // define values for form
    const [values, setValues] = React.useState({
        title: "",
        imageUrl: "",
        releaseDate: "",
        ageRating: "",
    });

    const inputs = [
        {
            id: 1,
            name: "title",
            type: "text",
            placeholder: "Movie Title",
            label: "Movie Title",
            errorMessage: "Movie Title should be at least 1 chars long",
            pattern: "[a-zA-Z0-9 -]+",
            required: true,
        },
        {
            id: 2,
            name: "imageUrl",
            type: "text",
            placeholder: "Image URL",
            label: "Image URL",
            errorMessage: "Movie URL should be valid link",
            pattern: "(https?://)[A-Za-z0-9./+_=?()[{- ]*",
            required: true,
        },
        {
            id: 3,
            name: "releaseDate",
            type: "date",
            label: "Release Date",
            required: true,
        },
        {
            id: 4,
            name: "ageRating",
            type: "text",
            placeholder: "Age Rating",
            label: "Age Rating",
            errorMessage: "Age Rating should be realistic :)",
            pattern: "^[A-Za-z0-9]{1,3}",
            required: true,
        },
    ]

    // ========== METHODS =========
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        // handleMoviePost(Object.fromEntries(data.entries()));

        // modal logic
        setCardData(Object.fromEntries(data.entries()));
        setShowModal(!showModal);
    }

    // handle value change
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <div className="staffMain">
            <NavBar />
            <RequestModal queryCompleted={queryCompleted} setQueryCompleted={setQueryCompleted} message={message} success={success}/>
            <StaffModal cardData={cardData} showModal={showModal} setShowModal={setShowModal} setLoadingStatus={setLoadingStatus} setQueryCompleted={setQueryCompleted} showLoading={showLoading} setSuccess={setSuccess} setMessage={setMessage}/>
            <div className="mainComponentsCover">
                <StaffDropDownComponent className="dropDownMoviesMenu"/>
                <div className="staffCover">
                    <form action="" onSubmit={handleSubmit} className="staffForm">
                        <h1 className="staffTitle">Create a Movie</h1>
                        {inputs.map((input) => {
                        return <StaffInput
                                key = {input.id}
                                {...input}
                                value={values[input.name]} 
                                onChange={onChange}
                            /> 
                        })}
                        {/* {inputs.map((input) => {
                        return <FormInput
                                key = {input.id}
                                {...input}
                                value={values[input.name]} 
                                onChange={onChange}
                            /> 
                        })} */}
                        <button className="movieSubmitButton">Submit</button>
                    </form>
                    <div className="moviePreview">
                        <h3>Posting Preview</h3>
                        <MovieCardComponent title={values.title} imageUrl={values.imageUrl} releaseDate={values.releaseDate}/>
                    </div>
                
                </div>
            </div>
        </div>
     );
}
 
export default StaffPage;