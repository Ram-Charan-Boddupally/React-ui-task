import React from "react";

import Navigationbar from "../elements/navbar";
import MenuBar from "../elements/menu";
import ClaimsDiaplay from "../elements/claimStatus";
import FeedActivity from "../elements/activityFeed";

import '../../../styles/homePageStyles.css'
import DisplayCards from "../elements/card";

import insuLogo from '../../../media/images/insu-logo-icon.jpg'

export default class HomeView extends React.Component{
    render(): React.ReactNode {
        return(
            <>
                <Navigationbar/>
                <div className="container">
                    <div className="col-1">
                        <MenuBar/>
                    </div>

                    <div className="col-2">
                        <div className="row">
                            <div className="insurence-logo">
                                <div className="insurence-info">
                                    <p className="logo-title">Insurence that makes your LIFE better</p>
                                    <p className="logo-desc">Some great policies to safegaurd all your needs</p>
                                </div>
                                <img className="img-logo" src={insuLogo}/>
                            </div>
                            {/* <img className="insurence-logo" src={insuLogo}/> */}
                        </div>

                        <div className="row-2">
                            <div className="flodat-left ">
                                <ClaimsDiaplay />
                                
                                <div className="consultations">
                                    <h3>Consultaions</h3>
                                    <p>Connect eith the best for your health guidence</p>

                                    <div className="consultation-links">
                                        <div className="labs-consultation consultation-img"></div>
                                        <div className="therapy-consultation consultation-img"></div>
                                        <div className="doctor-consultation consultation-img"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flodat-right">
                                <FeedActivity />
                            </div>
                        </div> 
                    </div>

                    <div className="col-3">
                         <DisplayCards />
                    </div>
                </div>  

            </>
        )
    }
}