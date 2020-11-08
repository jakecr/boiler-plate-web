import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdKey } from 'react-icons/io'
import { Context as AuthContext } from '../context/AuthContext'

const VerifyAccountPage = () => {
    const { state, clearErrorMessage, verifyCreateAccount, checkIfLoggedIn } = useContext(AuthContext)

    const [ code, setCode ] = useState('')

    useEffect(() => {
        checkIfLoggedIn()
        clearErrorMessage()
    }, [])

    return (
        <div>
            <title>Verify Create Account - Example</title>

            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default VerifyAccountPage