import { Box, TextField,Button,Grid } from "@mui/material";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [user,setUser] = useState({username:'',password:'',count:0})
    // const [userArray,setUserArray] = useState([])
    const navigate = useNavigate()
    // useEffect(() => {
    //     fetch("http://localhost:8000/users")
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setUserArray(data)
               
    //         })
        
    // }, [])

    function LoginButton() {
        if (user.username && user.password) {
            return <Button 
            
            sx={{'&:hover':{backgroundColor:'black',color:'white'},backgroundColor:'black',color:'white',}}
            variant='contained'
            onClick={()=>onLogin()}
            >LOGIN
            </Button>
        }
        else {
            return <Button  variant="contained" disabled>LOGIN</Button>
        }
    }
    // console.log(userArray)
    function onLogin()
    {
        console.log(user)
        fetch(" http://localhost:5000/login",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username:user.username,password:user.password})
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
           
           console.log(typeof(data))
          //  navigate("/welcome/"+data)
           if(typeof(data) === "number")
            {navigate("/welcome/"+data)}
           else
           {
             console.log(1)
             alert("wrong user")
            } 
            
            
         })
        setUser({username:'',password:''})
        // setUserArray([...userArray,user])
        // setUser()
        // for (let v of userArray)
        // {
        //     console.log(v.username)
        //     if(user.username === v.username && user.password === v.password )
        //     {
        //         v.count = v.count + 1;
        //         console.log(v.count)
        //         // setUser({...user,name:v.name,count:v.count})
        //         var d = {
        //             name:v.name,
        //             username:v.username,
        //             password:v.password,
        //             count:v.count
        //         }
        //         fetch(" http://localhost:8000/users/"+v.id,{
        //     method:'PUT',
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(d)
        // })
        // .then((resp)=>resp.json())
        // .then((data)=>{
        //     console.log(data)
        //     navigate("/welcome/"+v.id)
        //     // navigate("/")
        //     // setUser({username:'',password:''})
        // })
               
        //         break
        //     }
          
        //     // else{
        //     //     alert("wrong")
        //     //     break
        //     // }
        // }
    }
    // console.log(userArray)

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
              <h2> LOGIN</h2>
              <Box component="form"  
              sx={{ mt: 1 ,display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',}}
              >
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
               <LoginButton /> 
               <Button  sx={{'&:hover':{backgroundColor:'black',color:'white'},backgroundColor:'black',color:'white',}}
            variant='contained' onClick={()=>setUser({name:'',username:'',password:'',count:0})}>Clear</Button>
               </Box>
               <br />
               <h5>Not a member? <Button  sx={{'&:hover':{backgroundColor:'black',color:'white'},backgroundColor:'black',color:'white',}}
            variant='contained' onClick={()=>navigate("/register")}>Register</Button></h5>
               
           </Box>
        </Box>
      </Grid>
      
    </Grid>
  </Box>

    )
}
