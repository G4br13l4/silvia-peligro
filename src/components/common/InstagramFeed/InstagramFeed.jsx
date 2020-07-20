import React, { useState, useEffect } from 'react';
import './InstagramFeed.scss';
import axios from 'axios';

export const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://graph.instagram.com/me/media?fields=id,caption, media_url,permalink&access_token=IGQVJWek5TZAHl2VTgzblQ2UVM3cnhwRVVfVzRaekZACQ2xzdlVQd19fT0NfbWFidEsyZAExVcEZARekNrMnZAEX1hXYUJ2ZAV9zV04wakhQWGdjWUJtQnZAQdFFOLUlJd2RpclNITldjd2pn&limit=10`)
        .then(res => {
            console.log(res.data)
        })
    });
    return (
        <div className="instagramFeed">
            {/* <div className="post">
                <img src="https://images.unsplash.com/photo-1595132169434-097c5ae1a145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
            </div>
            <div className="post">
                <img src="https://images.unsplash.com/photo-1595144593798-8f7e34c157aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
            </div>
            <div className="post">
                <img src="https://images.unsplash.com/photo-1595101805915-963ec7b9b45a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
            </div>
            <div className="post">
                <img src="https://images.unsplash.com/photo-1594886801338-b81548345f77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"/>
            </div>
            <div className="post">
                <img src="https://images.unsplash.com/photo-1595132169434-097c5ae1a145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
            </div>   */}
        </div>
    );
}