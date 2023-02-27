import React, { useEffect, useState } from 'react'
import axios from "axios";
import './index.scss'
import { useParams } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
function Users() {
    const [post, setPost] = useState([]);
    const users = () => {
        axios.get(`http://localhost:5000/api/users`).then((res) => {
            setPost(res.data);
        });
    }
    useEffect(() => {
        users()
    }, []);
    const params = useParams()
    const deleteUser = async (_id) => {
        axios.delete(`http://localhost:5000/api/users/${_id}`)
            .then(users())
    }
    return (
        <section className='usersSec'>
            <div className="usersDiv">
                <h1>Users</h1>
                <div className="UserDiv">
                    {
                        post.map((element, index) =>
                            <div key={index} className='UserInfo'>
                                <i className="fa-solid fa-user"></i>
                                <div className="userEmail">
                                    <h2>{element.username}</h2>
                                </div>
                                <div className="userEmail">
                                    <h3>{element.email}</h3>
                                </div>
                                <div className="userEmail">
                                    <p>{element.address}</p>
                                </div>

                                <Tooltip title="Delete" onClick={() => deleteUser(element._id)}>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        )
                    }



                </div>
            </div>
        </section>
    )
}

export default Users