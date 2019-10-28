import React, { useState } from 'react'

import './styles.scss'
import Input from '../Input'
import Button from '../Button'

const SignIn = () => {
  const [email, setEmail ] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setEmail('')
    setPassword('')
  }

  const handleChange = event => {
    const { value, name } = event.target
    name === 'email' ? setEmail(value) : setPassword(value)
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} action="">
        <Input 
          type="email" 
          name="email" 
          handleChange={handleChange} 
          value={email} 
          id="email"
          label="Email" 
          required
        />
        <Input
          type="password" 
          name="password" 
          handleChange={handleChange} 
          value={password} 
          id="password" 
          label="Password"
          required/>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}

export default SignIn
