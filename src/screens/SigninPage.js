import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLock } from 'react-icons/go'
import { Context as AuthContext } from '../context/AuthContext'

const SigninPage = () => {
    const { state, clearErrorMessage, signin, checkIfLoggedIn } = useContext(AuthContext)

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    useEffect(() => {
        checkIfLoggedIn()
        clearErrorMessage()
    }, [])

    return (
        <div>
            <title>Signin - Example</title>
        
            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default SigninPage