import React, {useState, useEffect} from "react";
import "./Feed.css";
import PostBox from "./PostBox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // runs code on feed component launch
        db.collection('posts').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header" >
                <h2>Home</h2>
                <PostBox />
            </div>

            {/* Post Box */}
            {/* <div className="feed_postBox">
                <PostBox />
            </div> */}

            {/* Post */}
            {posts.map((post) => (
                <Post 
                    avatar={post.avatar}
                    displayName={post.displayName}
                    verified={post.verified}
                    userName={post.userName}
                    text={post.text}
                />
            ))}
        </div>
    )
}

export default Feed;