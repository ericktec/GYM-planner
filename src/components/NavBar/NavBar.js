import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import "./NavBar.scss";
import Profile from './Profile/Profile';

const NavBar = ({ className }) => {

    return (
        <div className={"navbar__container " + className}>
            <HamburgerMenu>
                <li>Todays workout</li>
                <li>My workouts</li>
                <li>New workout</li>
            </HamburgerMenu>
            <Profile />
        </div>
    )
}

export default NavBar;