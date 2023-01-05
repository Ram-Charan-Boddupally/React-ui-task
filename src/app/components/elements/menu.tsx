import { ButtonType, CompoundButton, DefaultButton, Icon, OverflowSet } from "@fluentui/react";
import React from "react";

import { initializeIcons, mergeStyles, IconButton } from "@fluentui/react";

import '../../../styles/menuStyles.css'
  
initializeIcons();

export default function MenuBar(){
    return(
        <div className="side-menu-bar">
        <div className="menu-bar">
            <div className="menu-tile"> <Icon iconName="Taskboard" styles={{root:{fontSize: "large", selectors: {':hover': {  color: 'blue'}}}} }/> <span>Dashboard</span> </div>
            <div className="menu-tile"> <Icon iconName="Money" styles={{root:{fontSize: "large"}}}/> <span>Payments</span> </div>
            <div className="menu-tile"> <Icon iconName="Footer" styles={{root:{fontSize: "large"}}}/> <span>My Policy</span> </div>
            <div className="menu-tile"> <Icon iconName="SmartGlassRemote" styles={{root:{fontSize: "large"}}}/> <span>My Claims</span> </div>
            <div className="menu-tile"> <Icon iconName="PaymentCard" styles={{root:{fontSize: "large"}}}/> <span>Manage cards</span> </div>
            <div className="menu-tile"> <Icon iconName="Commitments" styles={{root:{fontSize: "large"}}}/> <span>Settings</span> </div>
            <div className="menu-tile"> <Icon iconName="HealthSolid" styles={{root:{fontSize: "large"}}}/> <span>Support</span> </div>
        </div>
        
        <div className="top-up">
            <h3>Top Up</h3>
            <p>Add money to your wallet</p>

            <div className="acc-bal">
                <p><IconButton iconProps={{ iconName: 'MoreVertical'}} styles={{root:{position:"absolute", right:5, top:55}}}/></p>

                <span className="cur-bal-heading">Current Balance</span>
                <h1>$<span>1098.76</span></h1>
                <DefaultButton text="Add Money +" style={{backgroundColor: "#1077da", margin: "10px", border: "None", borderRadius: "3px", padding: "20px 30px", color: "white", width: "90%", fontWeight: "normal"}}/>
            </div>
        </div>
        </div>)
}
