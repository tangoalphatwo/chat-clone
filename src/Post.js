import React from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';


function Post({avatar, displayName, userName, verified, text }) {
    return (
        <div className='post'>
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="header_text">
                        <h3>
                            {displayName} {" "}
                            <span className="post_headerSpecial">
                            {verified && <VerifiedUserIcon className="post_badge" />} @
                            {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDesc">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <UploadIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post;