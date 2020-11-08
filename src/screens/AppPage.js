import React, { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const AppPage = () => {
    const { checkIfNotLoggedIn } = useContext(AuthContext)

    useEffect(() => { 
        checkIfNotLoggedIn()
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <title>Home - Example</title>
        
            <div 
                className='background' 
            >
            </div>
        </div>
    )
}

export default AppPage