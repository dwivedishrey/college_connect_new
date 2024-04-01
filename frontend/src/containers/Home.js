import React from 'react'
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Home = () => (
  
    <div>
        
        <div style={{backgroundColor:"black", width:"100vw",height:"100vh",alignItems:"center",justifyContent:"center",display: "flex",flexDirection:"column"}}>
       <h1 style={{color:"white",fontSize:"50px",marginBottom:"1px"}}>CollegeConnect</h1>
       <p style={{color:"white",fontWeight:"25px",fontSize:"25px",marginTop:"0px",}}>Social Networking</p>
       <Link to="/login" style={{ cursor: "pointer", color: "red" }}>
          <ArrowCircleRightIcon sx={{ color: "red", pt: 1, fontSize: "50px" }} />
        </Link>  
        </div>
    </div>
  
);

export default Home;
