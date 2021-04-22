import React from 'react'
import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'
import {useSelector} from 'react-redux'
import LoadIcon from '../../images/loading.gif'
function Profile() {
  const {profile} =useSelector(state=>state) ; 
  console.log(profile)
  return (
        <div className="profile">
          <h1>Profile</h1>  
          {/* {profile.loading?<img src={LoadIcon} className="db-block mz-auto my-4" alt="loading"/>:<Info />} */}
          <Info />
          {/* <Posts /> */}
        </div>
    )
}

export default Profile
