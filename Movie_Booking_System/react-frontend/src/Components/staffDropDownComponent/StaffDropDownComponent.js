import React from "react";
import "./StaffDropDownComponent.css"
import MenuComponent from "./MenuComponent/MenuComponent";

const StaffDropDownComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="dropDownContainer">
            <MenuComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}
export default StaffDropDownComponent;