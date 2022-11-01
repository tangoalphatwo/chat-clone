import React from "react";
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Seach ChatApp" type="text" />
            </div>
            
            <div className="widgets_widgetsContainer">
                <h2>Latest Posts</h2>
            </div>
        </div>
    )
}

export default Widgets;