import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/authContext/authContext";
import  {Link} from "react-router-dom";

const Login = (props) => {
    const {loginUser,userAuth, errors,clearError} = useContext(AuthContext)
    useEffect( () => {
        if(userAuth){
            props.history.push('/')
        }
    },[userAuth,props.history])
    const [user, setUser ] = useState({ email: '',password: ''})
    const { email, password, } = user

    const handleChange = e => {
        setUser({...user, [e.target.name]:e.target.value })
        clearError()
    }

    const submit = e=> {
        e.preventDefault()
        loginUser ({email,password})
        clearError()
    }
    return (
        <div className="register">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required/>
                <input type="submit" value="Sign In" className="btn"/>
            </form>
            <div className="question">
                {errors !== null && <button className="danger">
                    {errors.msg ? errors.msg : errors.error[0].msg}
                    <span>X</span>
                </button> }
                <p>Don't have an account? {" "} <Link to='/register'>Sign Up</Link> </p>
            </div>
        </div>
    )
}

export default Login