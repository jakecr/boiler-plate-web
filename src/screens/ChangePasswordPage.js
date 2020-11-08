import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { Context as AuthContext } from '../context/AuthContext'

const ChangePasswordPage = () => {
    const { state, clearErrorMessage, changePassword, checkIfLoggedIn } = useContext(AuthContext)

    const [ email, setEmail ] = useState('')

    useEffect(() => {
        checkIfLoggedIn()
        clearErrorMessage()
    }, [])

    return (
        <div>
            <title>Change Password - Example</title>
        
            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default ChangePasswordPage