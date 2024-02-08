import React, { useEffect, useState } from "react"
import {Box,Card,CardContent,Typography} from '@mui/material'
import { useNavigate } from "react-router-dom"
const Home = () => {
const [name,setName] = useState('')
    useEffect(() => { 
        const user = localStorage.getItem('user')
        setName(user)
    },[])
    const navigate = useNavigate()
const logout = () => {
    localStorage.clear('user')
    navigate('/login')
}

    return(
        <Box sx={{display: 'flex',justifyContent: 'center',alignItem:'center',minHeight:"100vh"}}>

            <Card sx={{width:"20vw",height:"40vh",backgroundColor:"ButtonFace"}}>

                <CardContent>
                    <Typography variant='h4' component="div">card</Typography>
                    <Typography variant='h5'>welcome to home</Typography>
                    <button variant='contained' onClick={logout}>Logout</button>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Home