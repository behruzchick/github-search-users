import { ImageList } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'
const Repos = ({ repos,show }) => {
    return (
        <ImageList className='user-wrappe-row-2'>
            <h1 style={{color:"#fff"}}>
                {
                    show === "repos" ? "Repositories" : null
                }
            </h1>
            {
                repos.length == 0 ? (
                    <h1>Repositories not found!</h1>
                ):
                repos.map((item) => (
                    <Link to={item.html_url} target='_blank' className="repos" key={item.id}>
                        <div className="repos-name">
                            <b>{item.full_name}</b>
                        </div>
                        <div className="repos-info">
                            <span>{item.language}</span>
                        </div>
                    </Link>
                ))
            }
        </ImageList>
    )
}

export default Repos