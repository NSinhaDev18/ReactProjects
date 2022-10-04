import React, { useState } from "react";
import Box from "@mui/material/Box";


import { Typography } from "@mui/material";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
};
const Profile = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    
    
    <form onSubmit={handleSubmit}>
      <Typography 
                            variant="h5" 
                            textAlign={"left"} 
                            padding={2} 
                            color="Black"   //"#ffba00"
                        >Profile Details</Typography>
      
      <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "20ch" }, padding:1
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" label="First name" 
      helperText="Please enter your first name"
      variant="outlined"/>
      <TextField id="outlined-basic" label="Last name" 
      helperText="Please enter your last name"
      variant="outlined"/>
    </Box>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "20ch" }, padding:1
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" label="Email address" 
      helperText="Enter your email address"
      variant="outlined"/>
    </Box>
    
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, padding:1
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          maxRows={4}
          variant="outlined"
        />
      
      <TextField 
      id="outlined-basic" label="City" 
      helperText="Enter your city"
      variant="outlined"/>
      <TextField 
      id="outlined-basic" label="State" 
      helperText="Enter your State"
      variant="outlined"/>
      <TextField type="number"
      id="outlined-basic" label="Pincode" 
      helperText="Enter pincode"
      variant="outlined"/>
    </Box>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "20ch" }, padding:1
      }}
      noValidate
      autoComplete="off"
    >
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
    </Box>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "22ch" }, padding:1
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload image
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      </Stack>
    </Box>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "20ch" }, padding:1
      }}
      noValidate
      autoComplete="off"
    >
      <Button variant="contained" color="primary">Edit Profile</Button>
      <Button variant="contained" color="primary" type="submit">Save Changes</Button>
    </Box>



      {/* <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                key="female"
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              name="os"
              value={formValues.os}
              onChange={handleInputChange}
            >
              <MenuItem key="mac" value="mac">
                Mac
              </MenuItem>
              <MenuItem key="windows" value="windows">
                Windows
              </MenuItem>
              <MenuItem key="linux " value="linux">
                Linux
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid> */}
    </form>
    
  );
};
export default Profile;