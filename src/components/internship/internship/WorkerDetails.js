import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Modal, Skeleton, Button} from 'antd';
import WorkerDetailsCard from '../../independentComponent/workerDetailsCard';
import personAdd from '../../../assets/img/internship/workerDetails/person-add.svg'
import book from '../../../assets/img/internship/workerDetails/book.svg'
import facebook from '../../../assets/img/internship/workerDetails/facebook.svg'
import twitter from '../../../assets/img/internship/workerDetails/twitter.svg'
import instagram from '../../../assets/img/internship/workerDetails/instagram.svg'
import dribble from '../../../assets/img/internship/workerDetails/dribble.svg'
import profile from '../../../assets/img/internship/workerDetails/profile.svg'
import skills from '../../../assets/img/internship/workerDetails/skills.svg'
import project from '../../../assets/img/internship/workerDetails/project.svg'
import suitcase from '../../../assets/img/internship/workerDetails/suitcase.svg'
import trophy from '../../../assets/img/internship/workerDetails/trophy.svg'
import report from '../../../assets/img/internship/workerDetails/report.svg'

export default function WorkerDetails({isShow, isClose, userId}) {
    console.log("USER ID ", userId)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const url = `resume/user/${userId}`
        axios.get(url)
            .then(res => {
                const data = res.data;
                console.log(data);
                setUser(data.user)
            })
    },[])

    const handleOk = () =>{
        isClose();
    }

    const handleCancel = () => {
        isClose()
    }

    return (
        <Modal
          visible={isShow}
          style={{ top: 20 }}
          className="worker-details-modal"
          width="75%"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
        {user ? <WorkerDetailsCard user={user} /> : <Skeleton width="14rem" active />}
        <div className="main-block">
            <section className="interview-questions">
                <div class="title">Interview Questions</div>
                <div class="qna">
                    <p class="question">1 . Interview Questions dummy text for an interview question this big?</p>
                    <p class="answer">A. Interview Questions dummy text for an interview answer this big or a much bigger length?</p>
                    <p class="question">1 . Interview Questions dummy text for an interview question this big?</p>
                    <p class="answer">A. Interview Questions dummy text for an interview answer this big or a much bigger length?</p>
                </div>
            </section>
            <section className="resume-details">
                <div className="about-block">
                    <div className="title">
                        <img src={personAdd} alt="" />
                        <span>About</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                            <span>
                                Energetic individual looking to showcase excellent presentation skills and
                                transform theoretical knowledge of banking principles into practical 
                                applications of current and saving Account Opening, Wealth Management,
                                and Forex Transactions.
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div className="education-block">
                    <div className="title">
                        <img src={book} alt="" />
                        <span>Education</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                            <p>Graduation</p>
                            <span>IIT Delhi<br/> ECE<br/> 8 CGPA<br/> 2015-2019</span>
                        </div>
                        <div className="details">
                            <p>Graduation</p>
                            <span>IIT Delhi<br/> ECE<br/> 8 CGPA<br/> 2015-2019</span>
                        </div>
                    </div>
                </div>
                <div className="work-experience-block">
                    <div className="title">
                        <img src={suitcase} alt="" />
                        <span>Work Experience</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                            <p>
                                <span className="company-name">Himalyan Gypsey</span> <br/>
                                <span className="position">Human resource Intern</span>
                            </p>
                            <p className="desc">
                                Energetic individual looking to showcase excellent 
                                presentation skills and transform theoretical 
                                knowledge of banking principles into practical 
                                applications of current and saving Account Opening, 
                                Wealth Management, and Forex Transactions.
                            </p>
                            <span className="city">Delhi</span> <br/>
                            <span className="year">2015-2016</span>
                        </div>
                        <div className="details">
                            <p>
                                <span className="company-name">Himalyan Gypsey</span> <br/>
                                <span className="position">Human resource Intern</span>
                            </p>
                            <p className="desc">
                                Energetic individual looking to showcase excellent 
                                presentation skills and transform theoretical 
                                knowledge of banking principles into practical 
                                applications of current and saving Account Opening, 
                                Wealth Management, and Forex Transactions.
                            </p>
                            <span className="city">Delhi</span> <br/>
                            <span className="year">2015-2016</span>
                        </div>
                    </div>
                </div>
                <div className="pos">
                <div className="title">
                        <img src={personAdd} alt="" />
                        <span>Position of Responsibility</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                            <p>Himalyan Gypsey</p>
                            <span>
                                Energetic individual looking to showcase excellent 
                                presentation skills and transform theoretical 
                                knowledge of banking principles into practical 
                                applications of current and saving Account Opening, 
                                Wealth Management, and Forex Transactions.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="trainings">
                    <div className="title">
                        <img src={suitcase} alt="" />
                        <span>Trainings</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                            <p>Himalyan Gypsey</p>
                            <span>
                                Energetic individual looking to showcase excellent 
                                presentation skills and transform theoretical 
                                knowledge of banking principles into practical 
                                applications of current and saving Account Opening, 
                                Wealth Management, and Forex Transactions.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="projects-block">
                    <div className="title">
                        <img src={suitcase} alt="" />
                        <span>Projects</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                            <p>
                                <span className="company-name">Himalyan Gypsey</span> <br/>
                                <span className="position">Human resource Intern</span>
                            </p>
                            <p className="desc">
                                Energetic individual looking to showcase excellent 
                                presentation skills and transform theoretical 
                                knowledge of banking principles into practical 
                                applications of current and saving Account Opening, 
                                Wealth Management, and Forex Transactions.
                            </p>
                            <span className="city">Delhi</span> <br/>
                            <span className="year">2015-2016</span>
                        </div>
                        <div className="details">
                            <p>
                                <span className="company-name">Himalyan Gypsey</span> <br/>
                                <span className="position">Human resource Intern</span>
                            </p>
                            <p className="desc">
                                Energetic individual looking to showcase excellent 
                                presentation skills and transform theoretical 
                                knowledge of banking principles into practical 
                                applications of current and saving Account Opening, 
                                Wealth Management, and Forex Transactions.
                            </p>
                            <span className="city">Delhi</span> <br/>
                            <span className="year">2015-2016</span>
                        </div>
                    </div>
                </div>
                <div className="achievement-block">
                    <div className="title">
                        <img src={trophy} alt="" />
                        <span>Achievement</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                            <span>
                                Energetic individual looking to showcase excellent presentation skills and
                                transform theoretical knowledge of banking principles into practical 
                                applications of current and saving Account Opening, Wealth Management,
                                and Forex Transactions.
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div className="digital-profile-block">
                    <div className="title">
                        <img src={profile} alt="" />
                        <span>Digital Profiles</span>
                    </div>
                    <div className="socila-media-icons">
                        
                            <img className="icon" src={facebook} alt="" />
                            <img className="icon" src={twitter} alt="" />
                            <img className="icon" src={instagram} alt="" />
                            <img className="icon" src={dribble} alt="" />
                    
                        {/* <div className="icon">
                        <img src={instagram} alt="" />
                        </div>
                        <div className="icon">
                        <img src={dribble} alt="" />
                        </div>
                        <div className="icon">
                        <img src={twitter} alt="" />
                        </div> */}
                    </div>
                </div>
            </section>
            
        </div>
        <div className="footer-btns">
            <div className="report"><img src={report} alt="" /> REPORT THIS APPLICANT</div>

                <div className="buttons">
                   <Button className="btn reject"   >Reject</Button>
                   <Button className="btn shortlist"   >Shortlist</Button>
                   <Button className="btn select"   >Select</Button>
                </div>
            </div>
          
        </Modal>
    )
}
