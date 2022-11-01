import React, { useState } from "react";
import './PostBox.css';
import { Button, Avatar } from "@mui/material";
import db from "./firebase";

function PostBox() {
    const [postMessage, setPostMessage] = useState("");

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            avatar: "https://upload.wikimedia.org/wikipedia/commons/d/db/Alpaca_%2831562329701%29.jpg",
            displayName: "",
            verified: true,
            userName: "",
            text: postMessage
        });

        setPostMessage("");
    }

    return (
        <div className='postBox'>
            <form>
                <div className='postBox_input'>
                    <Avatar />
                    <input 
                        onChange={e => setPostMessage(e.target.value)} 
                        value={postMessage}
                        placeholder="What's Happening?"
                        type="text"
                    />
                </div>
                <Button onClick={sendPost} type="submit" className="postBox_button">Post</Button>
            </form>
        </div>
    )
}

export default PostBox;