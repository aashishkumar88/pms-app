
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { FormControl, Link, Button, Select, MenuItem, InputLabel } from '@mui/material';
import {signUpRequest} from "../actions/index";

const SignUp = () => {
  const dispatch = useDispatch();
  const signupSelector = useSelector((state) => state && state.signUpState);
  const [signupUser, setSignupUser] = useState({
    username: "",
    password: "",
    role: "Guest",
  })

  const signupData=(e,key)=>{
    setSignupUser([key],e.target.value)
  }
  const signupRole=(value,type)=>{
    setSignupUser((prev)=>{
      return{
      ...prev,
      [type]:value,
      }
    })
  }


  const handleSingUpSubmit = (e) => {
    e.preventDefault();
    if(signupUser.username && signupUser.password && signupUser.role){
      dispatch(signUpRequest({...signupUser}));
    }
  }

  return (
    <>
      <div className='w-96 mt-[3%] ml-[40%] border-2 	px-12 py-5'>
        <h1 className='text-3xl mb-[5%] ml-[23%]'>Sign Up</h1>
        <FormControl>
          <form onSubmit={handleSingUpSubmit}>
            <TextField fullWidth id="outlined-basic" label="Username" sx={{ marginBottom: "12px", ml: "10px" }} variant="outlined" onChange={(e) => signupData(e, "username")} />
            <TextField fullWidth id="outlined-basic" label="Password" sx={{ marginBottom: "6px", ml: "10px" }} variant="outlined" onChange={(e) => signupData(e, "password")}/>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e)=>signupRole(e.target.value,"role")}
                sx={{ mt: '12px', ml: "10px" }}
                label="Role"
                fullWidth
                value={signupUser.role}
              //onChange={handleChange}
              >
                <MenuItem value={10}>Guest</MenuItem>
                <MenuItem value={20}>Admin</MenuItem>

              </Select>
            </FormControl>
            <Link href="#" underline="hover" sx={{ ml: "10px" }}>
              {'Forget Password?'}
            </Link>
            <Button variant="contained" type='submit' fullWidth sx={{ mt: '12px', ml: '10px' }}>
              Signup
            </Button>
            <Link href="#" underline="hover" sx={{ ml: "10px" }}>
              {'Already a User? LOGIN'}
            </Link>
          </form>
        </FormControl>
      </div>
    </>
  )
}

export default SignUp;