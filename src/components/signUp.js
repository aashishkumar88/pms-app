
import * as React from 'react';

import TextField from '@mui/material/TextField';
import { FormControl,Link,Button,Select,MenuItem,InputLabel } from '@mui/material';


const signUp = () => {

  return (
    <>
    <div className='w-96 mt-[3%] ml-[40%] border-2 	px-12 py-5'>
    <h1 className='text-3xl mb-[5%] ml-[23%]'>Sign Up</h1>
      <FormControl>
      <TextField  fullWidth id="outlined-basic" label="Username" sx={{marginBottom:"12px",ml:"15px"}} variant="outlined" />
      <TextField  fullWidth id="outlined-basic" label="Password" sx={{marginBottom:"6px",ml:"15px"}} variant="outlined" />
     
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    sx={{mt:'12px', ml:"15px"}}
    label="Role"
    fullWidth
    //onChange={handleChange}
  >
    <MenuItem value={10}>Guest</MenuItem>
    <MenuItem value={20}>Admin</MenuItem>
  
  </Select>
</FormControl>
<Link href="#" underline="hover" sx={{ml:"15px"}}>
  {'Forget Password?'}
</Link>
<Button variant="contained" type='submit' sx={{mt:'12px',ml:'15px'}}>
 Signup
</Button>
<Link href="#" underline="hover" sx={{ml:"15px"}}>
  {'Already a User? LOGIN'}
</Link>
      </FormControl>
      </div>
    </>
  )
}

export default signUp;