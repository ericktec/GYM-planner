import "./../ButtonAction.scss";
import "./AddButton.scss";

const AddButton = ({ label, inputArray, setInputArray, newValue }) => {

    const onClickHandler = () => {
        setInputArray(prev => {
            return [...prev, newValue]
        });
    }

    return (
        <div onClick={onClickHandler} className="action--btn__container">
            <span className="action--btn add--btn"></span>
            <label className="action--btn__label">{label}</label>
        </div>
    );
}

export default AddButton;