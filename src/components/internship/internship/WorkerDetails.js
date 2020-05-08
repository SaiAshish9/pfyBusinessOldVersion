import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Modal, Skeleton, Button, message} from 'antd';
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
import star from '../../../assets/img/internship/workerDetails/star.svg'


export default function WorkerDetails({isShow, isClose, userId, internshipId}) {
    console.log("USER ID ", userId)
    const [user, setUser] = useState(null)
    const [resume, setResume] = useState(null)

    useEffect(() => {
        const url = `resume/user/${userId}`
        axios.get(url)
            .then(res => {
                const data = res.data;
                console.log('RESUME ', data);
                setUser(data.user)
                setResume(data.resume)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const buttonHandler = (action) => {
        let url;
        if(action === "reject") url = 'internship/reject'
        else if(action === "shortlist") url = 'internship/shortlist'
        else if(action === 'select') url = 'internship/accept'


        const data = {
            internshipId: internshipId,
	        userId: resume._id,
        }

        console.log('IDs ', data)
        axios.put(url,data)
            .then(res => {
                console.log(res)
                message.info("done")
            })
            .catch(err => console.log(err))
    }

    const openSocialMediaLink = (link) =>{
        console.log(link + 'LINK')
        window.open('https://'+link, '_blank')
    }

    const handleOk = () =>{
        isClose();
    }

    const handleCancel = () => {
        isClose()
    }

    
    // const {education, digitalProfiles, achievements, workExperience, skills, POR, trainings,projects } = resume
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
                <div className="title">Interview Questions</div>
                <div className="qna">
                    <p className="question">1 . Interview Questions dummy text for an interview question this big?</p>
                    <p className="answer">A. Interview Questions dummy text for an interview answer this big or a much bigger length?</p>
                    <p className="question">1 . Interview Questions dummy text for an interview question this big?</p>
                    <p className="answer">A. Interview Questions dummy text for an interview answer this big or a much bigger length?</p>
                </div>
            </section>
            { resume ? <section className="resume-details">
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
                {resume.education ? <div className="education-block">
                    <div className="title">
                        <img src={book} alt="" />
                        <span>Education</span>
                    </div>
                    <div className="outer-block">
                        {resume.education && resume.education.graduation ? <div className="details">
                            <p>Graduation</p>
                            <span><br/> <br/> <br/> 2015-2019</span>
                        </div> : null}
                        {resume.education && resume.education.diploma ?  <div className="details">
                            <p>Diploma</p>
                            <span>{resume.education.diploma.instituteName}<br/> {resume.education.diploma.course}<br/> {resume.education.diploma.marks.val} {resume.education.diploma.marks.type}<br/> {resume.education.diploma.startYear}-{resume.education.diploma.endYear}</span>
                        </div> : null}
                    </div>
                </div> :null }
                {resume.workExperience.length ? <div className="work-experience-block">
                    <div className="title">
                        <img src={suitcase} alt="" />
                        <span>Work Experience</span>
                    </div>
                    <div className="outer-block">
                        {resume.workExperience.map((workExperience,index) => 
                            <div key={index} className="details">
                            <p>
                                <span className="company-name">{workExperience.organisation}</span> <br/>
                                <span className="position">{workExperience.designation}</span>
                            </p>
                            <p className="desc">
                                {workExperience.description}
                            </p>
                            <span className="city">{workExperience.location}</span> <br/>
                            <span className="year">{workExperience.start.year}-{workExperience.end.year}</span>
                        `</div>)} 
                        {/* <div className="details">
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
                        </div> */}
                    </div>
                </div> : null }
                {resume.skills.length ? <div className="skills">
                    <div className="title">
                        <img src={personAdd} alt="" />
                        <span>Skills</span>
                    </div>
                    <div className="outer-block">
                        {resume.skills.map((skill,index) =>  
                            <div key={index} className="skill">
                                <span className="name">{skill.name}</span>
                                {[...Array(skill.rating)].map((e,index) => <img key={index} src={star} alt="" /> )}
                                {/* { <img src={star} alt="" />} */}
                                {/* <img src={star} alt="" /> */}
                                {/* <img src={star} alt="" /> */}
                            </div> )}
                        {/* <div className="skill">
                            <span className="name">Online Market Handle</span>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div> */}
                    </div>
                </div> : null}
                {resume.POR.length ? <div className="pos">
                    <div className="title">
                        <img src={personAdd} alt="" />
                        <span>Position of Responsibility</span>
                    </div>
                    <div className="outer-block">
                        {resume.POR.map((por, index) =>  
                        <div key={index} className="details">
                            <p>{por.position}</p>
                            <span>
                                {por.description}
                            </span>
                        </div> )}
                    </div>
                </div> : null }
                {resume.trainings.length ? <div className="trainings">
                    <div className="title">
                        <img src={suitcase} alt="" />
                        <span>Trainings</span>
                    </div>
                    <div className="outer-block">
                       {resume.trainings.map((training,index) => 
                       <div key={index} className="details">
                            <p>{training.title}</p>
                            <span>
                                {training.description}
                            </span>
                        </div> )}
                    </div>
                </div> : null }
                {resume.projects.length ? <div className="projects-block">
                    <div className="title">
                        <img src={suitcase} alt="" />
                        <span>Projects</span>
                    </div>
                    <div className="outer-block">
                        {resume.projects.map((project,index) =>
                         <div key={index} className="details">
                            <p>
                                <span className="company-name">Himalyan Gypsey</span> <br/>
                                <span className="position">{project.title}</span>
                            </p>
                            <p className="desc">
                                {project.description}
                            </p>
                            <span className="city">Delhi</span> <br/>
                            <span className="year">{project.start.year}-{project.end.year}</span>
                        </div> )}
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
                </div> : null }
                {resume.achievements.length ? <div className="achievement-block">
                    <div className="title">
                        <img src={trophy} alt="" />
                        <span>Achievement</span>
                    </div>
                    <div className="outer-block">
                        <div className="details">
                        {resume.achievements.map((achi,index) =>
                            <span key={index}>
                                {achi} <br/>
                            </span> 
                        )}
                            
                        </div>
                    </div>
                </div> : null }
                <div className="digital-profile-block">
                    <div className="title">
                        <img src={profile} alt="" />
                        <span>Digital Profiles</span>
                    </div>
                    <div className="socila-media-icons">
                        {resume.digitalProfiles.facebook ? <img onClick={() => openSocialMediaLink(resume.digitalProfiles.facebook)} className="icon" src={facebook} alt="" />:null }
                        {resume.digitalProfiles.twitter ?<img onClick={() => openSocialMediaLink(resume.digitalProfiles.twitter)} className="icon" src={twitter} alt="" />: null}
                        {resume.digitalProfiles.instagram ? <img onClick={() => openSocialMediaLink(resume.digitalProfiles.instagram)} className="icon" src={instagram} alt="" />: null}
                        {resume.digitalProfiles.dribble ? <img onClick={() => openSocialMediaLink(resume.digitalProfiles.dribble)} className="icon" src={dribble} alt="" />: null}
                    </div>
                </div>
            </section> : <Skeleton width='5rem' /> }
            
        </div>
        <div className="footer-btns">
            <div className="report"><img src={report} alt="" /> REPORT THIS APPLICANT</div>

                <div className="buttons">
                   <Button onClick={() => buttonHandler("reject")} className="btn reject"   >Reject</Button>
                   <Button onClick={() => buttonHandler("shortlist")} className="btn shortlist"   >Shortlist</Button>
                   <Button onClick={() => buttonHandler("select")} className="btn select"   >Select</Button>
                </div>
            </div>
          
        </Modal>
    )
}
