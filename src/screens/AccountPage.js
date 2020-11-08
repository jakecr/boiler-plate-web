import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Switch from 'react-switch'
import { Context as AuthContext } from '../context/AuthContext'

const AccountPage = () => {
    const { state, checkIfNotLoggedIn, clearErrorMessage, getAccount, signout } = useContext(AuthContext)

    useEffect(() => {
        checkIfNotLoggedIn()
        getAccount()
        clearErrorMessage()
        window.scrollTo(0, 0)
    }, [])

    return ( 
        <div>
            <title>Account - Example</title>
        
            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default AccountPage