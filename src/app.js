import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as AuthProvider } from './context/AuthContext'
import { Provider as TaskProvider } from './context/TaskContext'
import AppRouter from './routers/AppRouter'

const jsx = (
    <AuthProvider>
        <TaskProvider>
            <AppRouter />
        </TaskProvider>
    </AuthProvider>
)

ReactDOM.render(jsx, document.getElementById('app'))