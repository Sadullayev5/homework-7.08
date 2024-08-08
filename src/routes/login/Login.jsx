import React, { useState } from 'react'
import './Login.css'
import { Link , useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import returnImage from '../../images/return.svg'


const Login = () => {

    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");



    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("/auth/login", { email, password })
        .then(response => {
            console.log(response.data)
            if(response.status === 201) {
                localStorage.setItem("token" , response.data.access_token);
                toast("Login successfully" , {
                    onClose: () => navigate("/profile"),
                    autoClose: 1000
                })
            }
            else{
                toast("Something went wrong")
            }
        })
    }

  return (
    <div className='Loginform-wrapper'>
    <div className="Loginform">
        <img className='return' onClick={() => navigate("/")} src={returnImage} alt="Return" />
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                className='password'
                type="password"
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <p>Don't have an account? <Link className='link' to="/register">Register</Link></p>
            <button className='login-btn' type='submit'>Login</button>
        </form>
    </div>
    <ToastContainer />
</div>
  )
}

export default Login