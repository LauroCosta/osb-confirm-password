import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ConfirmPassword } from 'feature/onboarding/pages/ConfirmPassword'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ConfirmPassword}/>        
      </Switch>
    </BrowserRouter>
  )
}