import React from "react";
import "./DropdownComponent.css"
import MenuComponent from "./MenuComponent/MenuComponent";

const DropdownComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="dropDownContainer">
            <MenuComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}
export default DropdownComponent;