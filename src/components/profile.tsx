import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../utils/userProfile";
import FeedCard from "./feedCard";
import { profileEdit } from "../api/patch";
import { addUser } from "../store/userSlice";

const Profile = () => {
  const userData = useSelector((store) => store.user);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
  if (userData) {
    setProfileData(userProfile(userData));
  }
}, [userData]);
  const handleSave = async () => {
    try {
      const response = await profileEdit(profileData);
      console.log(response);
      
      dispatch(addUser(response));
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };
  return (
    <div className="flex flex-row justify-center gap-10 mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
        <legend className="fieldset-legend">Profile</legend>
        <label className="label font-extrabold">firstName</label>
        {isEditing ? (
          <input
            type="text"
            className="input"
            placeholder="firstName"
            value={profileData.firstName}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                firstName: e.target.value,
              })
            }
          />
        ) : (
          <p className="pb-2">{profileData.firstName}</p>
        )}
        <label className="label font-extrabold">lastName</label>
        {isEditing ? (
          <input
            type="text"
            className="input"
            placeholder="lastName"
            value={profileData.lastName}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                lastName: e.target.value,
              })
            }
          />
        ) : (
          <p className="pb-2">{profileData.lastName}</p>
        )}
        <label className="label font-extrabold">age</label>
        {isEditing ? (
          <input
            type="text"
            className="input"
            placeholder="age"
            value={profileData.age}
            onChange={(e) =>
              setProfileData({ ...profileData, age: e.target.value })
            }
          />
        ) : (
          <p className="pb-2">{profileData.age}</p>
        )}
        <label className="label font-extrabold">gender</label>
        {isEditing ? (
          <input
            type="text"
            className="input"
            placeholder="gender"
            value={profileData.gender}
            onChange={(e) =>
              setProfileData({ ...profileData, gender: e.target.value })
            }
          />
        ) : (
          <p className="pb-2">{profileData.gender}</p>
        )}
        <label className="label font-extrabold">bio</label>
        {isEditing ? (
          <input
            type="text"
            className="input"
            placeholder="bio"
            value={profileData.bio}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
          />
        ) : (
          <p className="pb-2">{profileData.bio}</p>
        )}
        <label className="label font-extrabold">photoUrl</label>
        {isEditing ? (
          <input
            type="text"
            className="input "
            placeholder="photoUrl"
            value={profileData.photoUrl}
            onChange={(e) =>
              setProfileData({ ...profileData, photoUrl: e.target.value })
            }
          />
        ) : (
          <p className="pb-2">{profileData.photoUrl}</p>
        )}
        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "cancel" : "edit"}
          </button>
          {isEditing && (
            <button className="btn btn-secondary" onClick={handleSave}>
              save
            </button>
          )}
        </div>
      </fieldset>
      {userData ? (
        <div>
          <FeedCard props={userData} isEditmode={true} />
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
