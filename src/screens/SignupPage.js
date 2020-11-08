import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLock } from 'react-icons/go'
import { FaRegUser } from 'react-icons/fa'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as PrepContext } from '../context/PrepContext'
import Footer from '../components/Footer'
import IconInput from '../components/IconInput'

const SignupPage = () => {
    const { state, clearErrorMessage, signup } = useContext(AuthContext)
    const { state: color, checkIfLoggedIn } = useContext(PrepContext)
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ verifyPassword, setVerifyPassword ] = useState('')

    useEffect(() => {
        checkIfLoggedIn()
        clearErrorMessage()
    }, [])

    return (
        <div>
            <title>Signup - Example</title>
        
            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default SignupPage