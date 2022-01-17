import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';

import "./HamburgerMenu.scss";

const HamburgerMenu = ({ children }) => {

    const [isActive, setIsActive] = useState({
        status: false,
        offset: 0
    });

    useEffect(() => {
        document.addEventListener('click', handlerClickOutside);
        return () => {
            document.removeEventListener('click', handlerClickOutside);
        }
    }, [])


    const handlerClickOutside = (e) => {
        if (e.target.className === "backdrop") setIsActive(false);
    }

    const onClickHamburgerButtonHandler = () => {
        const offset = window.scrollY;
        const body = document.body

        setIsActive(state => {
            const prevState = { ...state };
            prevState.status = !prevState.status;
            if (prevState.status) {
                prevState.offset = offset;
                body.setAttribute("style", `position: fixed; top: -${prevState.offset}px; left:0; right:0; ${body.scrollHeight > document.documentElement.clientHeight ? "padding-right: 1rem;" : ""}`);
                console.log(body.scrollHeight, document.documentElement.clientHeight)
            }
            else {
                body.setAttribute("style", "")
                window.scrollTo(0, prevState.offset);
            }
            return prevState;
        });
    }

    return (
        <>
            <div className="hamburger__container">
                <div onClick={onClickHamburgerButtonHandler} className="hamburger__btn">
                    <span className={`hamburger__btn__icon no-select ${isActive.status ? "hamburger__btn__icon--active" : ""}`}>
                        &nbsp;
                    </span>
                </div>
                <div className={`hamburger__menu__container ${isActive.status ? "hamburger__menu__container--active" : ""}`} >
                    <ul className="hamburger__menu no-select">
                        {children}
                    </ul>
                </div>
            </div>
            {isActive.status ? ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root")) : null}
        </>
    );
}

export default HamburgerMenu;