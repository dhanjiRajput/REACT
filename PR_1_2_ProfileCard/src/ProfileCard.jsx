import { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, age, bio, location, profile }) => {
    const [a, b] = useState(false);
    const [c, d] = useState(true);

    const follow = () => {
        b(!a);
    };

    const limit = () => {
        d(!c);
    };

    return (
        <div className="profile-card">
            <img src={profile} alt={name} />
            <h2>{name}</h2>
            <p>{age} years old</p>
            <p>
                {c ? bio : bio.substring(0, 100) + "..."}
                <button
                    onClick={limit}
                    style={{
                        border: "0px",
                        color: "green",
                        backgroundColor: "white",
                        fontWeight: "bold",
                    }}
                >
                    {c ? "Read More" : "Read Less"}
                </button>
            </p>
            <p>{location}</p>
            <button onClick={follow}>{a ? "Unfollow" : "Follow"}</button>
        </div>
    );
};

export default ProfileCard;
