import React, { useState } from "react";
import {useEffect} from "react";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  Link,
  Button,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress
} from "@mui/material";
import { signUpRequest } from "../actions/index";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const signupSelector = useSelector((state) => state && state.signupState);
  const [signupUser, setSignupUser] = useState({
    username: "",
    password: "",
    role: "Guest",
  });
  // console.log(signupUser,'signupUser')
console.log(signupSelector,"getting data")
console.log(signupSelector.isLoading,"loading")

  useEffect(()=>{
    if(signupSelector.isSuccess){
      if(signupSelector.data.error===0){
        navigate('/login')
      }
    }
  },[signupSelector])
// console.log(signupSelector,"successful")

  const signupData = (e, key) => {
    setSignupUser({...signupUser,[key]:e.target.value});
    //  console.log(setSignupUser,"setSignupUserrrrr")
  };
  const signupRole = (value, type) => {
    setSignupUser((prev) => { 
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signupUser.username && signupUser.password && signupUser.role) {
      dispatch(signUpRequest({ ...signupUser }));
      // console.log(signUpRequest,"requesting")
    }
  };

  return (
    <>
      <div className="w-96 mt-[3%] ml-[35%] border-2 	px-12 py-5">
        <h1 className="text-3xl mb-[5%] ml-[23%]">Sign Up</h1>
        <FormControl>
          <form onSubmit={handleSignUpSubmit}>
            <TextField
              fullWidth
              label="Username"
              type="text"
              sx={{ marginBottom: "12px", ml: "10px" }}
              variant="outlined"
              onChange={(e) => signupData(e, "username")}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              sx={{ marginBottom: "6px", ml: "10px" }}
              variant="outlined"
              onChange={(e) => signupData(e, "password")}
              required
            />

            <FormControl fullWidth sx={{ ml: "10px", mt: "6px" }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={signupUser.role}
                // defaultValue={MenuItem.Guest}
                label="Role"
                onChange={(e) => signupRole(e.target.value, "role")}

                //onChange={handleChange}
              >
                <MenuItem value={"Guest"}>Guest</MenuItem>
                <MenuItem value={"Admin"}>Admin</MenuItem>
              </Select>
            </FormControl>
            <Link href="#" underline="hover" sx={{ ml: "10px" }}>
              {"Forget Password?"}
            </Link>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: "12px", ml: "10px" }}
            >
              {signupSelector.isLoading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Sign Up"
            )}
            </Button>
            <Link href="/login" underline="hover" sx={{ ml: "10px" }}>
              {"Already a User? LOGIN"}
            </Link>
          </form>
        </FormControl>
      </div>
    </>
  );
};

export default SignUp;
