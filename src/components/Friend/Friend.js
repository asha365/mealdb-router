import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return ( 
        <div className='friend-container'>
            <div className="friend-detail"> 
                <h3 className='text-3xl'>Name: {name}</h3>
                <Link to={'/friend/'+id}>{username}</Link> &nbsp;&nbsp;
                <button onClick={showFriendDetail}>{username} id: {id}</button>
            </div>

        </div>
    );
};

export default Friend;