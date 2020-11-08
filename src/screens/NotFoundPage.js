import React, { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const NotFoundPage = () => {
    const { checkIfNotLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        checkIfNotLoggedIn()
    }, [])

    return (
        <div>
            <title>404 - Example</title>
        
            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default NotFoundPage