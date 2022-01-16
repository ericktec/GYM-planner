import "./Profile.scss";
import defaultProfilePicture from "./profilePicture.svg";

const Profile = ({ username, profileImage }) => {

    return (
        <div className="profile__container">
            <div className="profile__welcome">
                <p className="profile__welcome-text">Welcome</p>
                <p className="profile__username">{username}</p>
            </div>
            <img className="profile__img" src={profileImage} alt="Profile" />
        </div>
    )
}

Profile.defaultProps = {
    profileImage: defaultProfilePicture,
    username: "username"
}

export default Profile;