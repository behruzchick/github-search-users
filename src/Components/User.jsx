import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group';
import { ImageList, Typography } from '@mui/material';
import axios from 'axios';
import { Octokit } from 'octokit';
import Repos from './Repos';
import Folowers from './Folowers';
import Folowing from './Folowing';
import './User.css'
const User = () => {
    const { name } = useParams();
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [followers,setFollowers] = useState([])
    const [following,setFollowing] = useState([])
    const [show, setShow] = useState("repos");
    const oktokit = new Octokit({
        auth: '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'
    })
    console.log(name);
    useEffect(() => {
        oktokit.request(`GET /users/${name}`)
            .then((res) => {
                console.log(res);
                setUser(res.data);
                oktokit.request(`GET /users/${name}/repos`)
                    .then((res) => {
                        console.log(res);
                        setRepos(res.data);
                    }).catch((e) => {
                        console.log(e);
                    })

                oktokit.request(`GET /users/{username}/following`, {
                    username:name,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                })
                    .then((res) => {
                        console.log("subs", res);
                        setFollowing(res.data);
                    }).catch((e) => {
                        console.log(e);
                    })
                    oktokit.request('GET /users/{username}/followers', {
                        username:name,
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28'
                        }
                    })
                        .then((res) => {
                            console.log("followers", res);
                            setFollowers(res.data);
                        }).catch((e) => {
                            console.log(e);
                        })
            }).catch((e) => {
                console.log(e);
            })
    }, [name])


    return (
        <div className='user-wrappe' style={{ display: 'flex', width: '100%', alignItems: 'start', justifyContent: 'start' }}>
            <div className="user-wrappe-row-1" style={{ marginLeft: '30px' }}>
                <div className='user-info'>
                    <div className="user-info-media-wrapper">
                        <img style={{borderRadius:"50%"}} src={user.avatar_url} alt="" />
                    </div>
                    <div className="user-info-name" style={{marginTop:"20px"}}>
                        <b style={{color:'white',fontSize:'30px'}}>{user.login}</b>
                    </div>
                </div>
                <div className="user-data-info">
                    <div className="folowers_info" style={{ display: 'flex', alignItems: 'center', marginTop: '30px',color:'white' }}>
                        <GroupIcon />
                        <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => setShow("followers")}>Folowers: {user.followers}</span>
                        <span style={{ marginLeft: '15px', cursor: 'pointer' }} onClick={() => setShow("following")}>Folowing: {user.following}</span>
                    </div>
                </div>
            </div>
            {
                show === "followers" ?
                    <Folowers followers={followers} show={show} />
                    : show === "following" ?
                        <Folowing following={following} show={show} />
                        : <Repos repos={repos} show={show} />
            }

        </div>
    )
}

export default User