import React from 'react'
import '../../../styles/claimBarStyles.css';
import { IconButton } from "@fluentui/react";

export default function ClaimsDiaplay(){
    let claimDetails = [{claimType: "Health Insurence Claim", claimId: 43782674567, claimAmt: 2347.08, claimStatus: 2, barColor: "green"},
    {claimType: "Health Insurence Claim", claimId: 43782674567, claimAmt: 2347.08, claimStatus: 0, barColor: "purple"}]

    let claims = [];
    for(let i=0; i<claimDetails.length; i++){
        claims.push(<InsurenceClaim claimType={claimDetails[i].claimType} claimAmt={claimDetails[i].claimAmt}
        claimId={claimDetails[i].claimId} claimStatus={claimDetails[i].claimStatus} 
        barColor = {claimDetails[i].barColor} />)
    }

    return(
        <div className='claims'>
            <h2>Current Claims</h2>
            <p>Track your Current Claim</p>
            <ul className='claims-list'>
                {claims}
            </ul>
        </div>
    )
}


export function InsurenceClaim(props: any){
    let progress: [boolean, boolean, boolean, boolean] = [false, false, false, false];

    for(let i=0; i<progress.length; i++){
        progress[i] = true;
        if(i === props.claimStatus){
            break
        }
    }

    return(
        <div className="claim-status" style={{borderTopColor: props.barColor}}>
            <span className='claim-insu-type'>{props.claimType}</span>
            <IconButton iconProps={{ iconName: 'IncreaseIndentArrow'}} styles={{icon:{fontSize: 30, color: "#6c747e"}, root:{float: "right"}}}/>
            <p className="claim-insu-id">{props.claimId}</p>
            <p className="claim-insu-amt">$ {props.claimAmt}</p>
            
            <ul className="progress-bar">
                <li className={progress[0] ? "active": ""} >Initiated</li>
                <li className={progress[1] ? "active": ""}>Verified</li>
                <li className={progress[2] ? "active": ""}>Processing</li>
                <li className={progress[3] ? "active": ""}>Settled</li>
            </ul>
        </div>)
}

