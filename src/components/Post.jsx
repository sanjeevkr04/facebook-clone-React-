import { Avatar } from '@material-ui/core'
import React from 'react'
import './styles/Post.css'
// Icons
import {ThumbUp, ChatBubbleOutlined, NearMe, ExpandMoreOutlined, AccountCircle} from '@material-ui/icons'

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className='post_avatar'/>
                <div className="post__topinfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
                </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlined />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
