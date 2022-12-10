import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})

    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div className='friend-details'>
            <div className='friend-info'>
                <h1 className='text-2xl friend-id'>Friend id: {friendId}</h1>
                <h3 className='text-3xl'>Name: {friend.name}</h3>
                <h4 className='text-1xl'>email: {friend.email}</h4>
                <p>address: {friend.address?.street}</p>
                <p><small>geo: {friend.address?.geo.lat}</small></p>
                <p><small>Company: {friend.company?.name}</small></p>
            </div>
        </div>
    );
};

export default FriendDetail;