import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import './InstagramFeed.scss';
import { loadPostsAction } from '../../../redux/actions/commonActions';
import instagram from '../../../assets/icons/instagram.png';

const InstagramFeed = props => {
    const { 
        //Own Props
        t,
        //Passed Props
        accountName,
        accountLink,
        token
    } = props;

    const dispatch = useDispatch();
    const loadPosts = (token) => 
        dispatch(loadPostsAction(token));
    
    const [posts, setPosts] = useState([]); 
    const account = accountName === '@speligro' ? 'silviaPeligro' : 'embroideryClub'
    const allPosts = useSelector(state => state.instagramFeed);
    //Triggers only in the first render and do something if there isn't an array in Redux State
    useEffect(() => {
        if(!allPosts[account].length) {
            loadPosts({token,account});
        } 
    },[]);

    // Triggers when the array that feeds the current InstagramFeed changes in Redux and updates the 
    // internal state of the component
    useEffect(() => {
        setPosts(allPosts[account]);
    },[
        allPosts[account]
    ]);

    return (
        <>
            <h2 className="follow-me">{t('InstagramFeed.followMe')} <a href={accountLink} target="_blank"><img src={instagram}/></a></h2>
            <div className="follow-me"><a href={accountLink} target="_blank">{accountName}</a></div>
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
export default withTranslation('common') (InstagramFeed);