import React from 'react'
import '../../../styles/activityFeedStyles.css'
import { Icon, initializeIcons } from '@fluentui/react';

initializeIcons();

function GenerateActivity(props:any){
    return(
        <li className='feed-item'>
            <Icon iconName='Completed' styles={{root:{fontSize: 20, padding: 8, borderRadius: 5, color: "#1177db", backgroundColor: "#c9e0f6", marginRight: 15, marginLeft: -12}}}/>            
            <div>
                <span className='feed-desc'>{props.task}</span>
                <span className='feed-date'>{props.taskDate}</span>
            </div>            
        </li>
    )
}

export default function FeedActivity(){
    let activities = [{task: "Booked Doctor Consultation", taskDate: "3rd August 2022"},
                      {task: "Booked Doctor Consultation", taskDate: "3rd August 2022"},
                      {task: "Booked Doctor Consultation", taskDate: "3rd August 2022"},
                      {task: "Booked Doctor Consultation", taskDate: "3rd August 2022"},
                      {task: "Booked Doctor Consultation", taskDate: "3rd August 2022"},
                      {task: "Booked Doctor Consultation", taskDate: "3rd August 2022"}];
    
    let feed = []
    for(let i=0; i<activities.length; i++){
        feed.push(<GenerateActivity task={activities[i].task} taskDate={activities[i].taskDate}/>)
    }                 

    return(
    <div className="row feed">
        <ul className="activity-feed">
            <h3>Activity Feed</h3>
            {feed}
        </ul>
    </div>)

}