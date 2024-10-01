import React from 'react'
import { useState } from 'react'
import {login} from '.authentication';

const  LoginPage = () => {
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
    <main>
        <h1> Welcome back</h1>
        <form onSubmit = {handleLogin}>
    <input type = {email} placeholder='emai>l' onChange ={(e)=> SetEmail(e.target.value) } />
    <input type = {password} placeholder='Password' onChange={(e) => SetPassword(e.target.value)}/>
    <button>Login</button>
    </form>
    </main>
    </>
    
  )
};
export default LoginPage;
