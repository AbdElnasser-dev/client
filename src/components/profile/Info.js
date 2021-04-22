import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProfileUsers} from '../../redux/action/profileAction';
import Avatar from '../Avatar';
import EditProfile from './EditProfile';
const Info = () => {
  const {id} = useParams ();
  const {auth,profile} = useSelector (state => state);
  const dispatch = useDispatch ();

  const [userdata, setUserData] = useState ([]);
  const [onEdit, setOnEdit] = useState (false);
  useEffect (() => {
      if (id === auth.user._id) {
        setUserData ([auth.user]);
      } 
      else{
      dispatch(getProfileUsers({users:profile.users,id,auth}))
      const newData = profile.users.filter(user => user._id === id)
      setUserData(newData)
      }
    },
    [id, auth,dispatch,profile.users]
  );
  return (
    <div className="info">
      {userdata.map (user => (
        <div className="info-container" key={user._id}>
          <Avatar src={user.avatar} size="super-avatar" />
          <div className="info_content">
            <div className="info_content__title">
              <h2>{user.username}</h2>
              <button className="btn btn-outline-info">
                Edit Profile
              </button>
            </div>
            <div className="follow_btn">
              <span className="mr-4">
                {user.follewers.length} followers
              </span>
              <span className="ml-4">
                {user.follewing.length} following
              </span>

            </div>
            <h5>{user.fullname} {user.mobile}</h5>
            <p className="m-0">{user.address}</p>
            <h5>{user.email}</h5>
            <a href={user.website} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </div>
          {/* {onEdit &&< EditProfile user={user} setOnEdit={setOnEdit}/>} */}
        </div>
      ))}
    </div>
  );
};

export default Info;
