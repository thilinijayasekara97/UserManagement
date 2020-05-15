import React, { useReducer } from 'react'
import axios from 'axios'
import authReducer from '../authContext/authReducer'
import AuthContext from '../authContext/authContext'
import setToken from '../../utils/setToken'

import {
    SUCCESS_REGISTER,
    FAIL_LOGIN,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    AUTH_ERROR,
    LOG_OUT,
    CLEAR_ERROR,
    SET_USER,
    SET_ERROR
} from '../types'


const AuthState = (props) => {
    const initialState = {
        //token: localStorage.getItem('token'),
        userAuth: null,
        user: null,
        errors: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    // get User

    const getUser = async () => {
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        try {
            const res = await axios.get('/auth')
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload:err
            })
        }
    }

    //Register User
    const registerUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post("/register", userData, config)
            dispatch({
                type: SUCCESS_REGISTER,
                payload: res.data
            })
            getUser()
        } catch (err) {
            dispatch({
                type: FAIL_REGISTER,
                payload: err.response.data
            })
        }
    }

    //login user

    const loginUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/auth', userData, config)
            dispatch({
                type: SUCCESS_LOGIN,
                payload: res.data
            })
            getUser()
        } catch (err) {
            dispatch({
                type: FAIL_LOGIN,
                payload: err.response.data
            })
        }
    }


    const setError = (err) => {
        dispatch({
            type: SET_ERROR,
            payload:  err
        })
    }

    // Logout user
    const logout = () => {
        dispatch({
            type: LOG_OUT
        })
    }

    // Clear Errors
    const clearError = () => {
        dispatch({
            type: CLEAR_ERROR
        })
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            userAuth: state.userAuth,
            errors: state.errors,
            getUser:getUser,
            registerUser,
            loginUser,
            logout,
            clearError,
            setError
        }}
        >{  props.children}</AuthContext.Provider>
    )
}
export default AuthState
//export default AuthState                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             