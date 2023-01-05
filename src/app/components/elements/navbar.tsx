import React from "react"
import { initializeIcons, mergeStyles, IconButton } from "@fluentui/react"

import "../../../styles/navigationStyles.css"

import logo from '../../../media/images/logo.jpg'
import userImg from '../../../media/images/user-icon.jpg'

initializeIcons();

const iconClass = mergeStyles({
  color: "balck",
  margin: '0 10px'
});

export default function Navigationbar(){
    return(
        <header className="navigation-header">
            <img src={logo} /> <h3 className="title"> TITLE </h3>

            <div className="user-navigation">
                <IconButton iconProps={{ iconName: 'RingerSolid'}} className={iconClass}/>
                <IconButton iconProps={{ iconName: 'Settings'}} className={iconClass}/>
                <span className="user-name">John Samuel <img src={userImg}/> </span>
            </div>
        </header>
    )
}