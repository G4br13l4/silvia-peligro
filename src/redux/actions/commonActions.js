import axios from 'axios';
import * as types from './actionTypes';

export function loadPosts() {
    return function(dispatch) {
        const API_TOKEN = process.env.REACT_APP_API_TOKEN;
        axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${API_TOKEN}&limit=10`)
            .then(res => {
                dispatch({ type: types.LOAD_POSTS_SUCCESS, posts: res.data.data })
        }).catch(error => {
            throw error;
        })
    }
}

