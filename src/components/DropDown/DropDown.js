import React, { useState } from 'react';
import "./DropDown.scss";

const DropDown = ({ labelComponent, children }) => {

    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive((prev) => !prev);
    }

    return (
        <div className="dropdown">
            <div onClick={toggleActive} className="dropdown__label">
                {labelComponent}
            </div>
            <ul className={`dropdown__menu ${active ? "dropdown__menu-active" : ""}`}>
                {
                    children.map((children, i) => React.cloneElement(children, {
                        className: "dropdown__option",
                        key: i
                    }))
                }
            </ul>
        </div>
    )
}


export default DropDown;