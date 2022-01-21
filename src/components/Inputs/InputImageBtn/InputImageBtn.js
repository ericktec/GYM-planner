import { useRef } from 'react';
import "./InputImageBtn.scss";
import { ReactComponent as EditIcon } from "../../../assets/images/EditIcon.svg";
const InputImageBtn = ({ img, accept, setImg }) => {

    const input = useRef();

    const onEditClickHandler = () => {
        input.current.click();
    }

    function isValidImage(file) {
        if (!file) return false;
        if (accept.includes(file.type)) return true;
    }

    function readImage(file) {
        if (!isValidImage(file)) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            e.preventDefault();
            setImg(e.target.result);
        };
    }

    const onChangeInputHandler = (e) => {
        if (e.target.files.length !== 1) return;
        const file = e.target.files[0];
        readImage(file);
    }

    return (
        <div className="input-image__container">
            <EditIcon className="input-image__icon" onClick={onEditClickHandler} />
            <img className='input-image__img' src={img} alt="exercise" />
            <input onChangeCapture={onChangeInputHandler} accept={accept} ref={input} className="input-image" type="file" />
        </div>
    );
}

InputImageBtn.defaultProps = {
    accept: ["image/png", "image/jpeg", "image/svg", "image/jpg", "image/svg+xml"]
}

export default InputImageBtn;