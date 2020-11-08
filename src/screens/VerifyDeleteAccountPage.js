import React, { useState, useContext, useEffect } from 'react'
import { IoMdKey } from 'react-icons/io'
import { Context as AuthContext } from '../context/AuthContext'
import Footer from '../components/Footer'
import Header from '../components/Header'
import IconInput from '../components/IconInput'

const VerifyDeleteAccountPage = () => {
    const { state, clearErrorMessage, deleteAccount, verifydeleteAccount, checkIfNotLoggedIn } = useContext(AuthContext)

    const [ code, setCode ] = useState('')

    useEffect(() => {
        checkIfNotLoggedIn()
        clearErrorMessage()
        deleteAccount()
    }, [])

    return (
        <div>
            <title>Verify Delete Account - Example</title>

            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default VerifyDeleteAccountPage