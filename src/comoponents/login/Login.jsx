import React,{useState} from 'react'
import axios from 'axios'
import {Box,Paper,Typography,Input,Stack,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  

    
    const handleEmail = (event)=>{
        setEmail(event.target.value)

    }
    const handlePassword = (event)=>{
        setPassword(event.target.value)
    
    }


    const [err,setErr] = useState('')
    const navigate = useNavigate()


    const send =async()=>{
        
       const result = await axios.post('http://localhost:4000/login',{email:email,password:password})
       console.log(result.body);
       if(result.status==false){
        setErr('invalid user')
       
       }else{
        localStorage.setItem('user',result.email)
       navigate('/home')
       }
     
    }
  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",minHeight:'100vh'}}>
      <Paper sx={{backgroundColor:"buttonShadow"}}>
        <Typography variant='h3'>Login</Typography>
      <Stack width={300} spacing={3}>
        
        email:<Input onChange={handleEmail} type="text"/>
        password:<Input onChange={handlePassword}type="password"/>
        <Button onClick={send} variant='contained'>submit</Button>
      <Typography variant='h5'>{err}</Typography>

      </Stack>
      </Paper>
    </Box>
  )
  }

export default Login