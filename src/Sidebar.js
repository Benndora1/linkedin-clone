import { Avatar} from "@material-ui/core";
import React from 'react';
import './Sidebar.css';

function Sidebar() {

   const recentItem= (topic) => (
       <div className="sidebar__recentItem">
           <span className="sidebar_harsh">#</span>
           <p>{topic}</p>

       </div>
   )






    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fD88MHxleHBsb3JlLWZlZwR8MXx8fGVufD88fHw%3D&w=1000&q=80" alt=""/>
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
                    {recentItem("Reactjs")}
                    {recentItem("Programming")}
                    {recentItem("Web Design")}
                    {recentItem("Web Production")}
                </div>
        </div>
    )
}

export default Sidebar
   