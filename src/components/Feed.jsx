import React, { useEffect, useState } from 'react'
import './styles/Feed.css'
import StoryRow from './StoryRow'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './../firebase'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            db.collection('posts').orderBy('timestamp', 'desc').limit(50).onSnapshot(snapshot => {
                console.log(snapshot)
                setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})));
            })
    }, [])

    return (
        <div className='feed'>
            <StoryRow />
            <MessageSender />

            {console.log(posts.length)}
            
            {posts.map(post => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
    
                ))}

        </div>
    )
}

export default Feed
