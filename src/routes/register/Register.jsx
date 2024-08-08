import React, { useState } from 'react'
import './Register.css'
import { Link , useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import returnImage from '../../images/return.svg'
import eye from '../../images/eye.svg'
import eyeSlash from '../../images/eye-slash.svg'

const Register = () => {
    const navigate = useNavigate()
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [avatar , setAvatar] = useState("");

    const handleUserInformation = (e) => {
        e.preventDefault()
        axios.post("/users" , {name , email , password , avatar})
        .then(response => {
            if(response.status === 201){
                toast("Account created successfully" , {
                    onClose: () => navigate("/login"),
                    autoClose: 1000
                })
                // setTimeout(() => navigate("/login"), 2000);
            }
            else{
                toast("Something went wrong")
            }
        })
    }

  return (
    <div className='Regform-wrapper'>
        <div className="Regform">
        <img onClick={() => navigate("/")} src={returnImage} alt="" />
        <form onSubmit={handleUserInformation}>
            <input  type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <input  type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input className='password'  type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            <input  type="url" placeholder='Enter your avatar url' onChange={(e) => setAvatar(e.target.value)} />
            <p>Already have an account? <Link className='link' to="/login">Login</Link></p>
            <button className='register-btn' type='sumbit'>Register</button>
        </form>
        </div>
        <ToastContainer />
    </div>

  )
}

export default Register