import "./InputNumber.scss";


const InputNumber = ({ id, name, label, placeholder, min, max, setValue, value, step }) => {

    const onInputHandler = (e, value) => {
        if (value) {
            setValue(prevState => {
                const actualValue = (prevState ? (parseFloat(prevState) + value).toString() : min);
                if (+actualValue > +max) return max;
                if (+actualValue < +min) return min;
                return actualValue;
            });
        }
        if (e) {
            if (isNaN(e.target.value)) return;
            if (+e.target.value > +max) return;
            if (+e.target.value < +min && e.target.value !== '') return;
            setValue(e.target.value);
        };
    }

    const upArrowHandler = () => {
        onInputHandler(null, 1);
    }

    const downArrowHandler = () => {
        onInputHandler(null, -1);
    }


    return (
        <div>
            <label className="input__label" htmlFor={id}>{label}</label>
            <div className="input--number__container">
                <span onClick={upArrowHandler} className="input--number__arrow input--number__arrow--up">^</span>
                <span onClick={downArrowHandler} className="input--number__arrow input--number__arrow--down">^</span>
                <input onInput={onInputHandler} step={step} value={value} className="input--number" name={name} id={id} type="number" placeholder={placeholder} min={min} max={max} />
            </div>
        </div>
    );
}

export default InputNumber;