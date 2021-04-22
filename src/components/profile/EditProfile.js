import React,{useState,useEffect} from 'react'

const EditProfile = ({user,setOnEdit}) => {
    const initialState = {
        fullname:'',
        mobile:'',
        address:'',
        website:'',
        gender:''
    }
    const [userData,setUserData] = useState(initialState)
    const{fullname,mobile,address,website,story,gender}=userData
  
    const[avatar,setAvatar] = useState('')
    return (
        <div className="edit_profile">
            <button onClick={()=>setOnEdit(false)} className="btn btn-danger btn_close">
                Close
            </button>
        </div>
    )
}

export default EditProfile
