import { Box,Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function Welcome(){
    const {id} = useParams()
    console.log(id)
     const [a,seta] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:8000/users/"+id)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //              seta([data])
               
    //         })
        
    // }, [])
    useEffect(() => {
        fetch("http://localhost:5000/user/"+id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                  seta([data])
               
            })
        
    }, [])
    return (
        <Box >
            {a.map((d)=> 
           <div>
               <h2>Welcome {d.username}</h2>
               <p>Visit:{d.count}</p>
                </div>)}
                <Button><Link to="/">Logout</Link></Button> 
                
        </Box>
     
    )

}