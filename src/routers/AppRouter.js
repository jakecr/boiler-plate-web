import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/change-password' component={ChangePasswordPage} />
                <Route path='/signin' component={SigninPage} />
                <Route path='/signup' component={SignupPage} />
                <Route path='/verify-password' component={VerifyPasswordPage} />
                <Route path='/verify-user' component={VerifyAccountPage} />

                <Route path='/' component={AppPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter