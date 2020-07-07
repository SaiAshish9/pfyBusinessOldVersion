import React from 'react';
import {Button} from 'antd'
import boy from '../../../assets/img/campusMarketing/boy.svg'
import identification from '../../../assets/img/campusMarketing/identification.svg'

export default function StudentOffers() {
    return (
        <main className="campus-marketing-2 fadeIn">
            <div className="block-1">
                <h1>Why your brand should run a discount offer for students?</h1>
                <div className="fact-cards">
                    <div className="card">
                        <img src={boy} alt=""/>
                        <div><p>50% of India's population is under the age of 25</p></div>
                    </div>
                    <div className="card">
                        <img src={boy} alt=""/>
                        <div><p>35% of online shoppers in India are college students</p></div>
                    </div>
                    <div className="card">
                        <img src={boy} alt=""/>
                        <div><p>Students make important purchasing decisions in most Indian households</p></div>
                    </div>
                    <div className="card">
                        <img src={boy} alt=""/>
                        <div><p>Students are a lifelong customer and every brand wants to catch them early</p></div>
                    </div>
                    <Button className="enquire-btn">ENQUIRE </Button>
                </div>
            </div>
            <div className="block-2 fadeIn">
                <h1>Why you should run a student discount offer with us?</h1>
                <div className="fact-cards">
                    <div className="card">
                        <img src={identification} alt=""/>
                        <div><p>Most Indian students don't have an .edu email account</p></div>
                    </div>
                    <div className="card">
                        <img src={identification} alt=""/>
                        <div><p>There is no official database of verified students in India</p></div>
                    </div>
                    <div className="card">
                        <img src={identification} alt=""/>
                        <div><p>Verifying students digitally is difficult for brands</p></div>
                    </div>
                    <div className="card">
                        <img src={identification} alt=""/>
                        <div><p>At Pracify, we've  verified students across India as users</p></div>
                    </div>
                    <Button className="enquire-btn">ENQUIRE </Button>
                </div>
            </div>
        </main>
    )
}
