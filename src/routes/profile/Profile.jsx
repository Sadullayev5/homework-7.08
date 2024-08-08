import React , { useState , useEffect } from 'react'
import axios from '../../api/axios'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const [ profile , setProfile] = useState(null)
    useEffect(() => {
        axios("/auth/profile")
        .then(response => setProfile(response.data))
    }, [])

    const removeSession = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

  return (
    <div className="profile-wrapper">
        <div className="profile">
            <div className="profile-image">
                {
                    profile &&
                    <img className='profile-img' src={profile.avatar} alt="" />
                }
            </div>
            <div className="profile-info">
                <h1>{profile?.name}</h1>
                <p>{profile?.email}</p>
                <p>{profile?.role}</p>
            </div>
            <button className='logout-btn' onClick={removeSession}>Logout</button>
        </div>
    </div>
  )
}

export default Profile
