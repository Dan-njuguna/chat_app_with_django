import React, { useState } from 'react'

 function SignupPage() {
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const [username, SetUsername] = useState()
  return (
    <>
    <main>
        <input type = {email} placeholder='email' onChange ={(e)=> SetEmail(e.target.value) } />
        <input type = {username} placeholder='username' onChange={(e)=> SetUsername(e.target.value) } />
        <input type = {password} placeholder='Password' onChange={(e) => SetPassword(e.target.value)}/>
        <button>Sign Up</button>
    </main>
    </>
  )
}
export default SignupPage
