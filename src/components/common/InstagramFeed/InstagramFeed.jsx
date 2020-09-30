import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import './InstagramFeed.scss';
import { loadPosts } from '../../../redux/actions/commonActions';
import { bindActionCreators } from 'redux';

const InstagramFeed = props => {
    const { 
        //Own Props
        t, 
        allPosts,
        //Passed Props
        accountName,
        accountLink,
        token
    } = props;

    const [posts, setPosts] = useState([]); 
    const key = accountName === '@speligro' ? 'sp' : 'cb'

    //Triggers only in the first render and do something if there isn't an array in Redux State
    useEffect(() => {
        if(!allPosts[key].length) {
            //props.loadPosts(token)
        } 
    },[]);

    // Triggers when the array that feeds the current InstagramFeed changes in Redux and updates the 
    // internal state of the component
    useEffect(() => {
        setPosts(allPosts[key]);
    },[
        allPosts[key]
    ]);
    

    return (
        <>
            <h2 className="follow-me">{t('InstagramFeed.followMe')}</h2>
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

function mapStateToProps(state) {
    const allPosts = state.common.instagram
    return {
        allPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPosts: bindActionCreators(loadPosts, dispatch)
    }
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default withTranslation('common') (connectedStateAndProps(InstagramFeed));