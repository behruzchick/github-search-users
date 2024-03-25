import { Alert, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import Result from './Result';
import { Octokit } from 'octokit';
import './Header.css'
const Header = () => {
  const [subs, setSubs] = useState([]);
  const [name,setName] = useState(""); 
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false);
  const [error,setError] = useState("");
  const octokit = new Octokit({
    auth:'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'
  })
  const handleSearch = async () => {
    octokit.request(`GET /users/{username}`,{
      username:name
    })
      .then((res) => {
        console.log(res.data);
        setUser(res.data)
      }).catch((e) => {
        console.log(e);
        setError(e.response.data.message);
        setShow(true);
      })
  }
  return (
    <div className='search-wrappe'>
      {
        show ?
          (
            <Alert className='alert-message' style={{ position: 'absolute', top: "100px", right: "50px" }} onClose={() => {setShow(false) }} severity="error">
              {error}
            </Alert>

          ):null
      }
      <FormControl
        sx={{ m: 1 }}
        variant="standard"
        style={{
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          padding: '15px',
          background:"#fff",
          borderRadius: '10px',
          // width:'600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Input
          id="standard-adornment-password"
          placeholder='Search github user...'
          style={{ width: '500px' }}
          onChange={(e) => setName(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className='search-btn'
                style={{
                  fontSize: '13px',
                  background: '#00ABFB',
                  color: 'white',
                  borderRadius: '7px',
                  marginBottom: '10px'
                }}
                aria-label="toggle password visibility"
                onClick={handleSearch}
              >
                Search
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Result user={user} subs={subs} />
    </div>
  )
}

export default Header