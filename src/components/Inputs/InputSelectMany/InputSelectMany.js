import { useEffect, useRef, useState } from 'react';

import "./InputSelectMany.scss";

const InputSelectMany = ({ optionsSelected, setOptionsSelected, options, label, id, placeholder }) => {

    useEffect(() => {
        document.addEventListener("click", dropdownHandler, true);
        return () => {
            document.removeEventListener("click", dropdownHandler, true);
        };
    }, []);

    const dropdown = useRef();

    const dropdownHandler = event => {
        if (!dropdown.current) return;
        if (dropdown.current.contains(event.target) && !event?.target.closest(".input--select-many__badge")) return setDropDownActive(prev => !prev);
        setDropDownActive(false);
    };

    const [dropDownActive, setDropDownActive] = useState(false);

    const onClickOption = (e) => {
        const i = e.target.getAttribute("value");
        setOptionsSelected(prev => [...prev, options[i].value]);
    }

    const removeHandler = (index) => {
        setOptionsSelected(prev => prev.filter((_, i) => i !== index)
        );
    }
    const empty = optionsSelected.length === options.length;
    return (
        <div id={id} className="input--select-many__container">
            <label className="input__label">{label}</label>
            <div ref={dropdown} className="input--select-many">
                <span className={`input--select-many__placeholder no-select ${optionsSelected?.length > 0 ? "display-none" : ""}`}>{placeholder}</span>
                {!empty && <ul className={`input--select-many__dropdown ${dropDownActive ? "input--select-many__dropdown-active" : ""}`}>
                    {options.map((option, i) => (
                        !optionsSelected.includes(option.value) ? <li className="input--select-many__option" onClick={onClickOption} key={i} value={i}>
                            {option.label}
                        </li> : ""
                    ))}
                </ul>}
                {optionsSelected.map((option, i) => <div className="input--select-many__badge" key={i}>
                    <span onClick={() => removeHandler(i)} value={i} className="input--select-many__cancel-btn no-select">&nbsp;</span>
                    {option}
                </div>)}
            </div>
        </div>
    );
}

export default InputSelectMany;