import React from 'react'
import "./Post.css";
import {Avatar} from "@material-ui/core"
import {ThumbUpAlt } from "@material-ui/icons"
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import InputOption from "./InputOption"

function Post({name , description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
               <div className="post__info">
                     <h2>{name}</h2>
                     <p>{description}</p>
                </div>

               
            </div>
            <div className="post__body">
                  <p>{message} </p>
                </div>
           <div className="post__button">
           <InputOption Icon={ThumbUpAlt} title="Like"
           color="gray"/>
           <InputOption Icon={ChatIcon} title="Comment"
           color="gray"/>
           <InputOption Icon={ShareIcon} title="Share"
            color="gray"/>
            <InputOption Icon={SendIcon} title="Send"
            color="gray"/>

           </div>
       
       
        </div>
    )
}

export default Post
