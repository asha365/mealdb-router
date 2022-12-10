import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId])
    return (
        <div className='post-info'>
            <h1 className='text-5xl mb-4 mt-4 tahiti: 100'>Post id capture:  {postId}</h1>
            <h2 className='text-3xl'>{post.title}</h2>
            <p className='text-md'>Body: {post.body}</p>
        </div>
    );
};

export default Post;