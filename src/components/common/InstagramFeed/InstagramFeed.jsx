import React, { useState, useEffect } from 'react';
import './InstagramFeed.scss';
import axios from 'axios';
import { dummyArray } from './dummyArray';

export const InstagramFeed = props => {
    const { postsToLoad } = props;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=IGQVJXQzF0ektpLTQxdURjVVI1aWxmNE5lc1I3NEEtVGo3RG5ub3JtSlRwMnJITEFaekpPN2dUWU53b3hsWGNMZA2pTVUx5TXoxUldhaVE0Q0QxSFZADVnoyZA0FjVVFJam9WZAmVfdU1yUDBjX2RKRXNDRAZDZD`)
        // .then(res => {
        //     console.log(res.data.data);
        //     setPosts(res.data.data);

        // })
        console.log(dummyArray)
        setPosts(dummyArray);
    }, [postsToLoad]);

    return (
        <div className="instagramFeed">
            { posts.map(p => {
                return(
                 p.media_type === 'VIDEO' ?
                    <div key={p.id} className="post">
                        <video controls preload="none" poster={p.thumbnail_url}>
                            <source src={p.media_url} type="video/mp4"/>
                        </video>
                    </div>
                    : 
                    <div key={p.id} className="post">
                        <img src={p.media_url} alt={p.caption} loading="lazy"/>
                    </div>
                );
            })}
        </div>
    );
}