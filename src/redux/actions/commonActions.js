import axios from 'axios';
import * as types from './actionTypes';

export function loadPosts(token) {
    return function(dispatch) {
        axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${token}&limit=10`)
            .then(res => {
                dispatch({ type: types.LOAD_POSTS_SUCCESS, posts: res.data.data })
        }).catch(error => {
            throw error;
        })
    }
}

