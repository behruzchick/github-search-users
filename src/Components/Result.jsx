import { Avatar, Box, ImageList, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ImageList.css'
const Result = ({ user, subs }) => {
    return (
        <ImageList className='image-list' sx={{ background: 'none', display: 'flex', flexDirection: 'column' }}>
            {
                    <Link className='user-card' to={`/user/${user.login}`} key={user.id}>
                        <div className='user-card-image-wrapper'>
                            <Avatar className='user-card-img' src={user.avatar_url} />
                        </div>
                        <div className="user-card-data">
                            <div className="user-info">
                                {/* <b className='user-full-name'>Behruz Akbaraliev</b> */}
                                <b className='user-full-name' >{user.login}</b>
                            </div>
                            <div className="user_profida_data">
                                <div className="repos block">
                                    <b>Repos</b>
                                    <span className='bolded-text'>{user.public_repos}</span>
                                </div>
                                <div className="folowers block">
                                    <b>Folowers</b>
                                    <span className='bolded-text'>{user.followers}</span>
                                </div>
                                <div className="folowing block">
                                    <b>Folowing</b>
                                    <span className='bolded-text'>{user.following}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </ImageList>
    )
}

export default Result