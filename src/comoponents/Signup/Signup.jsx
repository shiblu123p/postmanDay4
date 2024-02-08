import React, { useState } from 'react'
import axios from 'axios'
import {Box,Paper,Typography,Input,Stack,Button} from '@mui/material'


const Signup = () => {
    const [username,setUsername]= useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleUser = (event)=>{
        setUsername(event.target.value)

    }
    const handleEmail = (event)=>{
        setEmail(event.target.value)

    }
    const handlePassword = (event)=>{
        setPassword(event.target.value)
    
    }
    const send =async()=>{
     const result = await axios.post('http://localhost:4000/signup',{username:username,email:email,password:password})
    console.log(result)
    }
  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",minHeight:'100vh'}}>
      <Paper sx={{backgroundColor:"buttonShadow",padding:'20px'}}>
        <Typography variant='h3'>SIGNUP</Typography>
      <Stack width={300} spacing={3}>
       username: <Input onChange={handleUser} type="text" />
       email: <Input onChange={handleEmail} type="text"/>
       password: <Input onChange={handlePassword} type="password"/>
        <Button onClick={send} variant='contained'>submit</Button>


      </Stack>
      </Paper>
    </Box>
    
  )
}

export default Signup