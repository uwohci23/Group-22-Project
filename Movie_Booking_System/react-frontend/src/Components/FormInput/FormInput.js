import React from "react";
// import "./FormInput.css";

// COMPONENT UTILIZED IN THE REGISTER USER FORM
const FormInput = (props) => {
    // take things gotten from props
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    // user unfocuses from input field, display error if present --> display error if unfocused
    const [focus, setFocus] = React.useState(false);

    const handleFocus = (event) => {
        setFocus(true);
    }

    return (
        <div className="flex relative w-full h-full group">
            {/* <label htmlFor={inputProps.name} className="flex">
                <span className="flex">{label}</span>
            </label>
            <input 
                {...inputProps}
                name={inputProps.name}
                onChange={onChange}
                className="formInputs"
                onBlur={handleFocus}
                focus={focus.toString()}
                onFocus={() => 
                    {inputProps.name==="reenterPassword" && setFocus(true)}}
            /> */}
            <input data-tool-tip type="text" id={inputProps.name} className="group block rounded-md px-2.5 pb-2.5 pt-5 w-full text-gray-900 bg-gray-200 appearance-none focus:border-2 focus:outline-none focus:border-purple-400 peer" placeholder=" "
                // {...inputProps}
                name={inputProps.name}
                onChange={onChange}
                onBlur={handleFocus}
                focus={focus.toString()}
                onFocus={() => 
                    {inputProps.name==="reenterPassword" && setFocus(true)}} />
            <label htmlFor={inputProps.name} className="absolute text-md pl-2 text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-4">{label}</label>
            {/* <span className="z-20 invisible group-hover:visible bg-red-400 px-1 text-sm text-gray-100 rounded-md absolute left-full 
               m-4 mx-auto">{errorMessage}</span> */}
            {/* <span className="inputSpan">{errorMessage}</span> */}
        </div>
        // <div class="form">
        //     <input
        //         type="text"
        //         name={inputProps.name}
        //         autocomplete="off"
        //         onChange={onChange}
        //         // onBlur={handleFocus}
        //         focus={focus.toString()}
        //         onFocus={() => 
        //             {inputProps.name==="reenterPassword" && setFocus(true)}}
        //         required />
        //     <label for="text" class="label-name">
        //         <span class="content-name">
        //             {label}
        //         </span>
        //     </label>
        // </div>
    )
}

export default FormInput;