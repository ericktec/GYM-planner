import "./../ButtonAction.scss";
import "./RemoveButton.scss";

const RemoveButton = ({ label, inputArray, setInputArray }) => {

    return (
        <div className="action--btn__container">
            <span className="remove--btn action--btn" >-</span>
            <label className="action--btn__label">{label}</label>
        </div>
    );
}

export default RemoveButton;