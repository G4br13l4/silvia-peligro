import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import './InstagramFeed.scss';
import * as commonActions from '../../../redux/actions/commonActions';
import { bindActionCreators } from 'redux';

const InstagramFeed = props => {
    const { t, posts } = props;

    useEffect(() => {
        if(!posts.length) {
            //props.actions.loadPosts();
        } 
    },[]);

    return (
        <>
            <h2 className="follow-me">{t('InstagramFeed.followMe')}</h2>
            <div className="follow-me"><a href="https://www.instagram.com/speligro/" target="_blank">@speligro</a></div>
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
    const posts = state.common.instagram.sp
    return {
        posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(commonActions, dispatch)
    }
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default withTranslation('common') (connectedStateAndProps(InstagramFeed));