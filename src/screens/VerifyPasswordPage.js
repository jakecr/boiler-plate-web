import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdKey } from 'react-icons/io'
import { GoLock } from 'react-icons/go'
import { Context as AuthContext } from '../context/AuthContext'

const VerifyPasswordPage = () => {
    const { state, clearErrorMessage, verifyChangePassword, checkIfLoggedIn } = useContext(AuthContext)
    
    const [ code, setCode ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ verifyPassword, setVerifyPassword ] = useState('')

    useEffect(() => {
        checkIfLoggedIn()
        clearErrorMessage()
    }, [])

    return (
        <div>
            <title>Verify Change Password - Example</title>

            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default VerifyPasswordPage