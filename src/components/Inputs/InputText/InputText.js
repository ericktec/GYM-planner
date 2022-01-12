import "./InputText.scss";

const InputText = ({ id, name, onChange, label, placeholder }) => {

    return (
        <div className="input--text__container" style={{
            width: '80%', margin: '1rem auto 0 auto'
        }}>
            <label className="input__label" htmlFor={id}>{label}</label>
            <input name={name} id={id} onChange={onChange} type="text" placeholder={placeholder} />
        </div>
    );
}

export default InputText;