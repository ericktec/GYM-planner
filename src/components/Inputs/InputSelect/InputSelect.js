
const InputSelect = ({ id, name, label, placeholder, children, value, setValue }) => {

    const onChangehandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className="input--select__container">
                <label className="input__label" htmlFor={id}>{label}</label>
                <select placeholder={placeholder} value={value} onChange={onChangehandler} name={name} id={id}>
                    {children}
                </select>
            </div>
        </div>
    )
}


export default InputSelect;