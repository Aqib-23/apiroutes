'use client'
// import { METHODS } from 'http'
import React, { useState } from 'react'

const page = () => {
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    const [email , setEmail] = useState('')
    const addUser  = async () =>{
        let showdata = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name , age , email})
        })
        // console.log(name , age , email)
        showdata = await showdata.json()
        console.log(showdata)
        if(showdata.success=='true'){
            alert("new user added")
        } 
            else{
                alert("some error")
            }
    }
  return (
    <div>
      <h1>Add new users</h1>
      <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="number" placeholder='Enter Your Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={addUser}>submit user</button>
    </div>
  )
}

export default page
