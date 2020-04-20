import React, {useState, useEffect} from 'react';
import {Modal, Progress, Button} from 'antd';


export default function workerDetailsCard(props) {
    const user = props.user ? props.user : null;

    return (
        <section className="gig-card">
                    <div className="name-img">
                        <img src={user.imgUrl} alt="" ></img>
                        <p className="name">{user.firstName} <br/> <span className="email">{user.email}</span> </p>
                    </div>
                    <div className="university-details">
                        <div className="univ-name">Netaji Subhash Institute Of Technology</div>
                        <div className="other-details">
                            <div className="gender">
                                Male,22
                            </div>
                            <div className="city">
                                {user.city}
                            </div>
                            <div className="mobile">
                                {user.phone}
                            </div>
                        </div>
                    </div>
                    <div className="gig-scores">
                    <Progress className="progress-bar" percent={user.profileScore} showInfo={false} />
                    <div className="percentage">Gig Score: {user.profileScore}%</div>
                    </div>
                </section>
    )
}
