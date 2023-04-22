import * as React from 'react'
import SignIn from './SignIn.tsx'
import './assets/style/LoginPage.scss'

const LoginPage = (): React.ReactElement => {
  return (
    <div className='background'>
      <div id='tars-logo'></div>
      <SignIn />
    </div>
  )
}

export default LoginPage
