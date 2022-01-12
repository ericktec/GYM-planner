
const InputSelect = ({ id, name, onChange, label, placeholder, children }) => {

    return (
        <div>
            <div className="input--select__container" style={{
                width: '80%', margin: '1rem auto 0 auto'
            }}>
                <label className="input__label" htmlFor={id}>{label}</label>
                <select name={name} id={id}>
                    {children}
                </select>
            </div>
        </div>
    )
}


export default InputSelect;