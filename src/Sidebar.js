import React from "react";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import Filter7Icon from '@mui/icons-material/Filter7';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';


function Sidebar() {
    return (
        //
        <div className='sidebar'>
            {/* icon */}
            <Filter7Icon className="sidebar_icon" />

            {/* SidebarOption */}
            <SidebarOption Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Search" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={MailIcon} text="Messages" />
            <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />
            
            {/* Button -> Post */}
            <Button variant='outlined' className="sidebar_post" fullWidth>post</Button>            

            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}

        </div>
    )
}

export default Sidebar;