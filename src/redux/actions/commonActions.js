import axios from 'axios';
import { LOAD_INSTAGRAM_POSTS } from './actionTypes';

export const loadPosts = (token) => {
    return function(dispatch) {
        axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${token}&limit=10`)
            .then(res => {
                dispatch({ type: LOAD_INSTAGRAM_POSTS, payload: res.data.data })
        }).catch(error => {
            throw error;
        })
    }
}

