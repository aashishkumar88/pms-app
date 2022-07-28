import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Link,
  Button,
} from "@mui/material";
import { logInRequest } from "../actions/index";


const LogIn=()=>{
const [logInUser,setLogInUser]=useState({
    username: "",
    password:"",
})

const dispatch=useDispatch();
const navigate=useNavigate();
const loginSelector=useSelector((state) => state && state.logInState);
console.log(loginSelector,"loginselectorrrrr")
const LoginData=(e,key)=>{
setLogInUser({...logInUser,[key]:e.target.value})
}
const userType=localStorage.getItem("userRole");
console.log(userType,"asdfgguuuuuu")
useEffect(()=>{
  if(loginSelector.isSuccess){
    if (loginSelector.data.error === 0 && userType === "Guest") {
      // console.log("dashboarddddd")
      navigate("/gDashboard");
    }
   if (loginSelector.data.error === 0 && userType==="Admin") {
      navigate("/adminDash");
    }

  }
},[loginSelector]);

const handleLogInSubmit=(e)=>{
 e.preventDefault();
 if(logInUser.username && logInUser.password){
  dispatch(logInRequest({...logInUser}));
 }
}
return(
    <>
      <div className="w-96 mt-[3%] ml-[35%] border-2 	px-12 py-5">
        <h1 className="text-3xl mb-[5%] ml-[36%]">Log In</h1>
        <FormControl>
          <form onSubmit={handleLogInSubmit}>
            <TextField
              fullWidth
              label="Username"
              type="text"
              sx={{ marginBottom: "12px", ml: "10px" }}
              variant="outlined"
              onChange={(e) => LoginData(e, "username")}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              sx={{ marginBottom: "6px", ml: "10px" }}
              variant="outlined"
              onChange={(e) => LoginData(e, "password")}
              required
            />

            <Link href="#" underline="hover" sx={{ ml: "10px" }}>
              {"Forget Password?"}
            </Link>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: "12px", ml: "10px" }}
            >
             Login
            </Button>
            <Link href="/" underline="hover" sx={{ ml: "10px" ,mt:"12px"}}>
              {"create an account? Signup"}
            </Link>
          </form>
        </FormControl>
      </div>
    </>
)
}

export default LogIn;