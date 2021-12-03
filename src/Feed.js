import React from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Post from "./Post"
import {useState} from 'react';

function Feed() {
 
    const [posts,setPosts] = useState([]);  //eslint-disable-line
  
    const sendPost =  e => {
        e.preventDefault();
        // setPosts([...posts,post]);
        // e.target.reset();  
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                        <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                         
                      </form>
                </div>

                 <div className="feed__inputOptions">
                     <InputOption Icon={ImageIcon} 
                     title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon}
                     title="Video"
                    color="#E7A33E"/>
                      <InputOption Icon={EventNoteIcon} 
                      title="Event"
                      color="#C0C8CD"/>
                    <InputOption Icon={CalendarViewDayIcon} 
                    title="Write Article"
                    color="#7FC15E"/>
                 </div>

            </div>

            {/* posts */}
            {posts.map((post) => (
                <Post/> 
             ))}
           
            <Post name="Benson"
            description="This is test"
            message="iT WORKED "
            />
            
        </div> 
    )
}

export default Feed
