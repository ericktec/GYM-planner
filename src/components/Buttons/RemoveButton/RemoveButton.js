import "./../ButtonAction.scss";
import "./RemoveButton.scss";

const RemoveButton = ({ label, inputArray, setInputArray }) => {

    const onClickHandler = () => {
        setInputArray(prevState => {
            if (prevState.length <= 1) return prevState;
            const temp = [...prevState];
            temp.length -= 1;
            return temp;
        })
    }

    return (
        <div onClick={onClickHandler} className="action--btn__container">
            <span className="remove--btn action--btn" ></span>
            <label className="action--btn__label">{label}</label>
        </div>
    );
}

export default RemoveButton;