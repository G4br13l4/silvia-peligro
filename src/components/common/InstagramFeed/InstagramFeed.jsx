import React, { useState, useEffect } from 'react';
import './InstagramFeed.scss';
import axios from 'axios';
import { dummyArray } from './dummyArray';

export const InstagramFeed = props => {
    const { postsToLoad } = props;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const API_TOKEN = process.env.REACT_APP_API_TOKEN;
        // axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${API_TOKEN}&limit=10`)
        // .then(res => {
        //     setPosts(res.data.data);

        // })
        setPosts(dummyArray);
    }, [postsToLoad]);

    return (
        <>
            <h2 className="follow-me">Sígueme en Instagram</h2>
            <div className="follow-me">@speligro</div>
            <div className="instagram-feed">
                { posts.map(p => {
                    return(
                    p.media_type === 'VIDEO' ?
                        <div key={p.id} className="post" style={{backgroundImage: `url(${p.thumbnail_url})`}}/>
                        : 
                        <div key={p.id} className="post" style={{backgroundImage: `url(${p.media_url})`}}/>
                    );
                })}
            </div>  
        </>
    );
}