import { useRef, useState } from 'react';
import "./InputDragFile.scss";

const InputDragFile = ({ id, label, accept, inputFile, setInputFile }) => {

    const input = useRef();
    const [isDragOver, setIsDragOver] = useState(false);

    function isValidImage(file) {
        console.log(file.type)
        if (!file) return false;
        if (accept.includes(file.type)) return true;
    }

    function readImage(file) {
        if (!isValidImage(file)) return;
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            e.preventDefault();
            setInputFile(e.target.result);
        }
    }

    const onClickBrowseHandler = () => {
        input.current.click();
    }

    const onFileChangeCapture = (e) => {
        console.log(e.target.files);
        if (e.target.files.length !== 1) return;
        const file = e.target.files[0];
        readImage(file);
    }

    const onCancelFileHandler = () => {
        setInputFile(undefined);
    }

    const onDragOverHandler = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    }

    const onDragLeaveHandler = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    }

    const onDropHandler = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length !== 1) return;
        const file = e.dataTransfer.files[0];
        setIsDragOver(false);
        readImage(file)
    }
    const isFileUploaded = !(inputFile === undefined);

    return (
        <div className="input--file__container">
            <label className="input__label">{label}</label>
            <input
                ref={input} type="file"
                className="input--file"
                accept={accept.join("")}

                onChangeCapture={onFileChangeCapture} />
            <div className={`input--file__zone ${isDragOver ? "input--file__zone-over" : ""}`}>

                {
                    isFileUploaded ?
                        <div className="input--file__uploaded input--file__placeholder">
                            <img className="input--file__img" src={inputFile} alt="uploaded" />
                            <div className="input--file__status__container">
                                <p className="input--file__status">Complete</p>
                                <p className="input--file__status__percentage">100%</p>
                            </div>
                            <button onClick={onCancelFileHandler} className="input--file__cancel-btn">&nbsp;</button>
                        </div>
                        :
                        <div onDragOver={onDragOverHandler}
                            onDragLeave={onDragLeaveHandler}
                            onDragEnd={onDragLeaveHandler}
                            onDrop={onDropHandler}
                            className="input--file__drag-zone">
                            <p className='input--file__placeholder'>Drop your file or &nbsp;
                                <span onClick={onClickBrowseHandler} className="input--file__btn no-select">Browse</span>
                            </p>
                        </div>
                }
            </div>
        </div>
    );
}

InputDragFile.defaultProps = {
    accept: ["image/png", "image/jpeg", "image/svg", "image/jpg", "image/svg+xml"]
}

export default InputDragFile;