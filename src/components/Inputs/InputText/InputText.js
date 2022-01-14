import "./InputText.scss";

const InputText = ({ id, name, label, placeholder, value, setValue }) => {

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="input--text__container">
            <label className="input__label" htmlFor={id}>{label}</label>
            <input name={name} id={id} onChange={onChangeHandler} value={value} type="text" placeholder={placeholder} />
        </div>
    );
}

export default InputText;