import "./Profile.scss";
import defaultProfilePicture from "./profilePicture.svg";
import DropDown from '../../DropDown/DropDown';
import { Link } from 'react-router-dom';

const Profile = ({ username, profileImage }) => {

    return (
        <div className="profile__container">
            <div className="profile__welcome">
                <p className="profile__welcome-text">Welcome</p>
                <p className="profile__username">{username}</p>
            </div>

            <DropDown labelComponent={<img className="profile__img" src={profileImage} alt="Profile" />} >
                <li><Link className='no-link' to="#">My Profile</Link></li>
                <li><Link className='no-link' to="#">Log out</Link></li>
            </DropDown>
        </div>
    )
}

Profile.defaultProps = {
    profileImage: defaultProfilePicture,
    username: "username"
}

export default Profile;