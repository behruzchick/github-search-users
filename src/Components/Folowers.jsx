import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Follower.css'
const Folowers = ({ show, followers }) => {
  return (
    <div style={{paddingLeft:'30px'}}>
      <h1 style={{color:"#fff"}}>
        {
          show === "followers" ? "Folowers" : null
        }
      </h1>
      {
        followers.length === 0 ?
        (
          <h3>Followers not found!</h3>
        ):followers.map((item) => (
          <Link className='follower-block' target='_blank' to={`/user/${item.login}`} style={{textDecoration:'none',color:"#000",display:'flex',alignItems:'center'}} key={item.id} >
              <Avatar src={item.avatar_url}/>
              <b style={{marginLeft:"10px"}}>{item.login}</b>
          </Link>
        ))
      }
    </div>
  )
}

export default Folowers