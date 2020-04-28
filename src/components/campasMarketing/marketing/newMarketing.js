import React from 'react';
import {Button} from 'antd'
import oyo from '../../../assets/img/campusMarketing/oyo.jpg'
import hago from '../../../assets/img/campusMarketing/hago.jpg'
import ipsos from '../../../assets/img/campusMarketing/ipsos.jpg'
import peeSafe from '../../../assets/img/campusMarketing/peeSafe.jpg'
import wooplr from '../../../assets/img/campusMarketing/wooplr.jpg'
import oxfordcaps from '../../../assets/img/campusMarketing/oxfordcaps.jpg'
import promotion from '../../../assets/img/campusMarketing/promotion.svg'

export default function NewCampusMarketing() {
    const arr = [1,2,3,4,5,6,7,8,9]
    return (
        <main className="marketing-block">
            <div className="block-1">
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Holding Sessions</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Organising Events</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Community Building</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Event Integration</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Distributing Flyers</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Placing Standees</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Distributing Vouchers</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p> Putting up Stalls</p></div>
                </div>
                <div className="square-card">
                    <img src={promotion} alt=""/>
                    <div className="text"><p>Pasting Posters</p></div>
                </div>
            </div>
            <div className="block-2">
                <p>Engage with millennials like never before. Reach out to Gen-Z directly on campus with our exclusive campus marketing services pan India.</p>
                <h1>Our Partners</h1>
                <div className="circular-cards">
                    <div className="card" >
                        <img src={peeSafe} alt=""/>
                    </div>
                    <div className="card" >
                        <img src={hago} alt=""/>
                    </div>
                    <div className="card" >
                        <img src={oyo} alt=""/>
                    </div>
                    <div className="card" >
                        <img src={ipsos} alt=""/>
                    </div>
                    
                    <div className="card" >
                        <img src={oxfordcaps} alt=""/>
                    </div>
                    
                    <div className="card" >
                        <img src={wooplr} alt=""/>
                    </div>
                </div>
                <Button className="enquire-btn">ENQUIRE </Button>
            </div>
        </main>
    )
}
