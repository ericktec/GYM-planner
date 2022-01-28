import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import "./NavBar.scss";
import Profile from './Profile/Profile';


const NavBar = () => {

    return (
        <div className={"navbar__container"}>
            <HamburgerMenu>
                <li>Todays workout</li>
                <li>My workouts</li>
                <li>
                    <Link className="navbar__link" to={"/new-workout"}>
                        New workout
                    </Link>
                </li>
            </HamburgerMenu>
            <Profile />
        </div>
    )
}

export default NavBar;