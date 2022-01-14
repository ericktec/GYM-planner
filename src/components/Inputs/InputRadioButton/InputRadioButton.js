import "./InputRadioButton.scss";

const InputRadioButton = ({ value, selectedOption, setSelectedOption, label, id, name, className, style }) => {

    const onChangeHandler = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <label className={`input--radio__container ${className}`} style={style}>
            <input
                name={name}
                id={id}
                className="input--radio"
                type="radio"
                value={value}
                checked={selectedOption === value}
                onChange={onChangeHandler}
            />
            <span className='input--radio__btn'></span>{label}
        </label>
    );
}

export default InputRadioButton;