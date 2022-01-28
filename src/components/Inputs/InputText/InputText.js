import "./InputText.scss";

const InputText = ({ id, name, label, placeholder, value, setValue, ofType }) => {

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const type = (function () {
        if (ofType === "text" || ofType === "password" || ofType === "email") return ofType;
        return "text"
    })()

    return (
        <div className="input--text__container">
            <label className="input__label" htmlFor={id}>{label}</label>
            <input name={name} id={id} onChange={onChangeHandler} value={value} type={type} placeholder={placeholder} autoComplete="no" />
        </div>
    );
}

export default InputText;