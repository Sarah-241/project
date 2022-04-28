import { Box, TextField,Button,Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [user,setUser] = useState({name:'',username:'',password:'',count:0})
    // const [userArray,setUserArray] = useState([])
     const navigate = useNavigate()
    function RegisterButton() {
        if (user.name &&user.username && user.password) {
            return <Button 
            
            sx={{'&:hover':{backgroundColor:'black',color:'white'},backgroundColor:'black',color:'white',}}
            variant='contained'
            onClick={()=>onRegister()}
            >Register
            </Button>
        }
        else {
            return <Button variant="contained" disabled>Register</Button>
        }
    }
    function onRegister()
    {
        // setUser({...user,count:user.count+1})
        // setUserArray([...userArray,user])
        console.log(user)
        // fetch(" http://localhost:8000/users",{
        //     method:'POST',
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(user)
        // })
        // .then((resp)=>resp.json())
        // .then((data)=>{
        //     console.log(data)
        //     navigate("/")
        //     setUser({name:'',username:'',password:''})
        // })
        fetch(" http://localhost:5000/adduser",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({...user,id:Date.now()})
        })
        .then((resp)=>{console.log(resp)
          navigate("/")
               setUser({name:'',username:'',password:'',count:0})
        })
        //.then((data)=>{
        //     console.log(data)
        //     navigate("/")
        //     setUser({name:'',username:'',password:'',count:0})
        // })
        
       
        //  navigate("/")
        
    }
    return(
        <Box sx={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>   
        <Grid container component="main" sx={{justifyContent:'center',alignItems:'center'}}>
          
          <Grid item  >
            <Box
            sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'lightblue' }}>
                <LockOutlined />
              </Avatar> */}
              <h2> REGISTRATION</h2>
              <Box component="form"  
              sx={{ mt: 1 ,display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',}}
              >
                  
                  <TextField
                margin="normal"
                type="text" 
                label="Full Name" 
                value={user.name}
                onChange={(e)=>setUser({...user,name:e.target.value})} 
               
                />
                 
                  
                <TextField
                margin="normal"
                type="text" 
                label="Username" 
                value={user.username}
                onChange={(e)=>setUser({...user,username:e.target.value})} 
               
                />
                <TextField
                margin="normal"
                type="password" 
                label="Password" 
                value={user.password}
                 onChange={(e)=>setUser({...user,password:e.target.value})} 
              />
              <br />
               <Box sx={{display:'flex',flexDirection:'row'}}>
               <RegisterButton /> 
               <Button  sx={{'&:hover':{backgroundColor:'black',color:'white'},backgroundColor:'black',color:'white',}} onClick={()=>setUser({name:'',username:'',password:'',count:0})}>Clear</Button>
               </Box>
               <br />
                {/* <Button  sx={{'&:hover':{backgroundColor:'black',color:'white'},backgroundColor:'black',color:'white',}}
            variant='contained'><Link to="/">Register</Link></Button> */}
               
           </Box>
        </Box>
      </Grid>
      
    </Grid>
  </Box>
    )
}