import { Avatar} from "@material-ui/core";
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar/>
                <h2>Benson Ndora</h2>
                <h4>Benndora2@gmail.com</h4>
                </div>
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                             <p>Who viewed You</p>
                             <p className="sidebar__statNumber">2,543</p>
                    </div>
                    <div className="sidebar__stat">
                                <p>Viewed Posts</p>
                                <p className="sidebar__statNumber">2,456</p>
                    </div>
                </div>

                <div className="sidebar__bottom">
                    <p>Recent</p>

                </div>
        </div>
    )
}

export default Sidebar
   