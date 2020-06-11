import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Skeleton, Button, message, Carousel } from "antd";
import WorkerDetailsCard from "../../independentComponent/workerDetailsCard";
import personAdd from "../../../assets/img/internship/workerDetails/person-add.svg";
import book from "../../../assets/img/internship/workerDetails/book.svg";
import facebook from "../../../assets/img/internship/workerDetails/facebook.svg";
import twitter from "../../../assets/img/internship/workerDetails/twitter.svg";
import instagram from "../../../assets/img/internship/workerDetails/instagram.svg";
import dribble from "../../../assets/img/internship/workerDetails/dribble.svg";
import profile from "../../../assets/img/internship/workerDetails/profile.svg";
import skills from "../../../assets/img/internship/workerDetails/skills.svg";
import project from "../../../assets/img/internship/workerDetails/project.svg";
import suitcase from "../../../assets/img/internship/workerDetails/suitcase.svg";
import trophy from "../../../assets/img/internship/workerDetails/trophy.svg";
import report from "../../../assets/img/internship/workerDetails/report.svg";
import star from "../../../assets/img/internship/workerDetails/star.svg";
import { getHeaders } from "../../../helpers/getHeaders";
import {
  INTERNSHIP_APPLICATION_REJECTED,
  INTERNSHIP_APPLICATION_SHORTLISTED,
  INTERNSHIP_APPLICATION_SELECTED,
  INTERNSHIP_APPLICATION_APPLIED,
} from "../../constant/statusCodes";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
export default function WorkerDetails({
  children,
  className,
  internshipId,
  applications,
  index,
  updateStatus,
  questions,
}) {
  console.log(applications, index);
  const [curIndex, setCurIndex] = useState(index);
  const [application, setApplication] = useState(applications[curIndex]);
  const [userId, setUserId] = useState(applications[curIndex].user._id);

  const { user, _id, status, answers } = application;
  console.log("USER ID ", userId);
  const resume = user.resume;
  const carousel = useRef();

  // const [user, setUser] = useState(null)
  // const [resume, setResume] = useState(null)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // const url = `resume/user/${userId}`
    // axios.get(url)
    //     .then(res => {
    //         const data = res.data;
    //         console.log('RESUME ', data);
    //         setUser(data.user)
    //         setResume(data.resume)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
  }, []);
  const previous = () => {
    if (applications.length === 0) {
      setVisible(false);
      return;
    }
    carousel.current.prev();
    const newIndex = curIndex > 0 ? curIndex - 1 : applications.length - 1;
    setCurIndex(newIndex);
    setApplication(applications[newIndex]);
    setUserId(applications[newIndex].user._id);
  };
  const next = () => {
    if (!carousel.current || applications.length === 0) {
      setVisible(false);
      return;
    }
    carousel.current.next();
    const newIndex = (curIndex + 1) % applications.length;
    setCurIndex(newIndex);
    setApplication(applications[newIndex]);
    setUserId(applications[newIndex].user._id);
  };
  const buttonHandler = (action) => {
    let url;
    if (action === INTERNSHIP_APPLICATION_REJECTED) url = "internship/reject";
    else if (action === INTERNSHIP_APPLICATION_SHORTLISTED)
      url = "internship/shortlist";
    else if (action === INTERNSHIP_APPLICATION_SELECTED)
      url = "internship/accept";

    const data = {
      internshipId: internshipId,
      userId: userId,
      resume,
    };

    console.log("IDs ", data);
    axios
      .put(url, data, getHeaders())
      .then((res) => {
        updateStatus(_id, action);
        next();
        //setVisible(false);
      })
      .catch((err) => {
        console.log(err);
        message.error("Something Went Wrong");
      });
  };

  const renderButtons = () => {
    const reject = (
      <Button
        onClick={() => buttonHandler(INTERNSHIP_APPLICATION_REJECTED)}
        className="btn reject"
      >
        Reject
      </Button>
    );
    const shortlist = (
      <Button
        onClick={() => buttonHandler(INTERNSHIP_APPLICATION_SHORTLISTED)}
        className="btn shortlist"
      >
        Shortlist
      </Button>
    );
    const select = (
      <Button
        onClick={() => buttonHandler(INTERNSHIP_APPLICATION_SELECTED)}
        className="btn select"
      >
        Select
      </Button>
    );
    if (application.status === INTERNSHIP_APPLICATION_SHORTLISTED) {
      return [reject,select];
    }else if(application.status === INTERNSHIP_APPLICATION_APPLIED ){
      return [reject,shortlist,select]
    }

  };

  const openSocialMediaLink = (link) => {
    console.log(link + "LINK");
    window.open("https://" + link, "_blank");
  };

  const showModal = () => {
    setCurIndex(index);
    setApplication(applications[curIndex]);
    setUserId(applications[curIndex].user._id);
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const renderQuestions = () => {
    console.log(questions, application.answers);
    if (questions) {
      return (
        <div className="interview-questions">
          <h2 className="interview-questions__header">Interview Questions</h2>
          {questions.map((question, index) => (
            <div>
              <p className="interview-questions__question">{`${index + 1}. ${
                question.question
              }`}</p>
              <p className="interview-questions__answer">{`A. ${application.answers[index]}`}</p>
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <div>
      <div className={className} onClick={showModal}>
        {children}
      </div>
      <Modal
        visible={visible}
        style={{ top: 20 }}
        className="worker-details-modal"
        width="75%"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <LeftOutlined
          onClick={previous}
          className="left-icon"
          twoToneColor="#fff"
        />
        <RightOutlined
          onClick={next}
          className="right-icon"
          twoToneColor="#fff"
        />
        <Carousel
          dots={false}
          ref={(ref) => {
            console.log(ref);
            carousel.current = ref;
          }}
        >
          {applications.map((application, index) => {
            return (
              <>
                {user ? (
                  <WorkerDetailsCard user={user} />
                ) : (
                  <Skeleton width="14rem" active />
                )}
                <div className="main-block">
                  {resume ? (
                    <>
                      {renderQuestions()}

                      <section className="resume-details">
                        <div className="about-block">
                          <div className="title">
                            <img src={personAdd} alt="" />
                            <span>Objectives</span>
                          </div>
                          <div className="outer-block">
                            <div className="details">
                              <span>{resume.careerObjectives}</span>
                            </div>
                          </div>
                        </div>
                        {resume.education ? (
                          <div className="education-block">
                            <div className="title">
                              <img src={book} alt="" />
                              <span>Education</span>
                            </div>
                            <div className="outer-block">
                              {resume.education &&
                              resume.education.graduation ? (
                                <div className="details">
                                  <p>Graduation</p>
                                  <span>
                                    <br /> <br /> <br /> 2015-2019
                                  </span>
                                </div>
                              ) : null}
                              {resume.education && resume.education.diploma ? (
                                <div className="details">
                                  <p>Diploma</p>
                                  <span>
                                    {resume.education.diploma.instituteName}
                                    <br /> {resume.education.diploma.course}
                                    <br /> {
                                      resume.education.diploma.marks.val
                                    }{" "}
                                    {resume.education.diploma.marks.type}
                                    <br /> {resume.education.diploma.startYear}-
                                    {resume.education.diploma.endYear}
                                  </span>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ) : null}
                        {resume.workExperience.length ? (
                          <div className="work-experience-block">
                            <div className="title">
                              <img src={suitcase} alt="" />
                              <span>Work Experience</span>
                            </div>
                            <div className="outer-block">
                              {resume.workExperience.map(
                                (workExperience, index) => (
                                  <div key={index} className="details">
                                    <p>
                                      <span className="company-name">
                                        {workExperience.organisation}
                                      </span>{" "}
                                      <br />
                                      <span className="position">
                                        {workExperience.designation}
                                      </span>
                                    </p>
                                    <p className="desc">
                                      {workExperience.description}
                                    </p>
                                    <span className="city">
                                      {workExperience.location}
                                    </span>{" "}
                                    <br />
                                    <span className="year">
                                      {workExperience.start.year}-
                                      {workExperience.end.year}
                                    </span>
                                    `
                                  </div>
                                )
                              )}
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
                          </div>
                        ) : null}
                        {resume.skills.length ? (
                          <div className="skills">
                            <div className="title">
                              <img src={personAdd} alt="" />
                              <span>Skills</span>
                            </div>
                            <div className="outer-block">
                              {resume.skills.map((skill, index) => (
                                <div key={index} className="skill">
                                  <span className="name">{skill.name}</span>
                                  {[...Array(skill.rating)].map((e, index) => (
                                    <img key={index} src={star} alt="" />
                                  ))}
                                  {/* { <img src={star} alt="" />} */}
                                  {/* <img src={star} alt="" /> */}
                                  {/* <img src={star} alt="" /> */}
                                </div>
                              ))}
                              {/* <div className="skill">
                            <span className="name">Online Market Handle</span>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div> */}
                            </div>
                          </div>
                        ) : null}
                        {resume.POR.length ? (
                          <div className="pos">
                            <div className="title">
                              <img src={personAdd} alt="" />
                              <span>Position of Responsibility</span>
                            </div>
                            <div className="outer-block">
                              {resume.POR.map((por, index) => (
                                <div key={index} className="details">
                                  <p>{por.position}</p>
                                  <span>{por.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                        {resume.trainings.length ? (
                          <div className="trainings">
                            <div className="title">
                              <img src={suitcase} alt="" />
                              <span>Trainings</span>
                            </div>
                            <div className="outer-block">
                              {resume.trainings.map((training, index) => (
                                <div key={index} className="details">
                                  <p>{training.title}</p>
                                  <span>{training.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                        {resume.projects.length ? (
                          <div className="projects-block">
                            <div className="title">
                              <img src={suitcase} alt="" />
                              <span>Projects</span>
                            </div>
                            <div className="outer-block">
                              {resume.projects.map((project, index) => (
                                <div key={index} className="details">
                                  <p>
                                    <span className="company-name">
                                      Himalyan Gypsey
                                    </span>{" "}
                                    <br />
                                    <span className="position">
                                      {project.title}
                                    </span>
                                  </p>
                                  <p className="desc">{project.description}</p>
                                  <span className="city">Delhi</span> <br />
                                  <span className="year">
                                    {project.start.year}-{project.end.year}
                                  </span>
                                </div>
                              ))}
                              <div className="details">
                                <p>
                                  <span className="company-name">
                                    Himalyan Gypsey
                                  </span>{" "}
                                  <br />
                                  <span className="position">
                                    Human resource Intern
                                  </span>
                                </p>
                                <p className="desc">
                                  Energetic individual looking to showcase
                                  excellent presentation skills and transform
                                  theoretical knowledge of banking principles
                                  into practical applications of current and
                                  saving Account Opening, Wealth Management, and
                                  Forex Transactions.
                                </p>
                                <span className="city">Delhi</span> <br />
                                <span className="year">2015-2016</span>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {resume.achievements.length ? (
                          <div className="achievement-block">
                            <div className="title">
                              <img src={trophy} alt="" />
                              <span>Achievement</span>
                            </div>
                            <div className="outer-block">
                              <div className="details">
                                {resume.achievements.map((achi, index) => (
                                  <span key={index}>
                                    {achi} <br />
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div className="digital-profile-block">
                          <div className="title">
                            <img src={profile} alt="" />
                            <span>Digital Profiles</span>
                          </div>
                          <div className="socila-media-icons">
                            {resume.digitalProfiles.facebook ? (
                              <img
                                onClick={() =>
                                  openSocialMediaLink(
                                    resume.digitalProfiles.facebook
                                  )
                                }
                                className="icon"
                                src={facebook}
                                alt=""
                              />
                            ) : null}
                            {resume.digitalProfiles.twitter ? (
                              <img
                                onClick={() =>
                                  openSocialMediaLink(
                                    resume.digitalProfiles.twitter
                                  )
                                }
                                className="icon"
                                src={twitter}
                                alt=""
                              />
                            ) : null}
                            {resume.digitalProfiles.instagram ? (
                              <img
                                onClick={() =>
                                  openSocialMediaLink(
                                    resume.digitalProfiles.instagram
                                  )
                                }
                                className="icon"
                                src={instagram}
                                alt=""
                              />
                            ) : null}
                            {resume.digitalProfiles.dribble ? (
                              <img
                                onClick={() =>
                                  openSocialMediaLink(
                                    resume.digitalProfiles.dribble
                                  )
                                }
                                className="icon"
                                src={dribble}
                                alt=""
                              />
                            ) : null}
                          </div>
                        </div>
                      </section>
                    </>
                  ) : (
                    <Skeleton width="5rem" />
                  )}
                </div>
                <div className="footer-btns">
                  <div className="report">
                    <img src={report} alt="" /> REPORT THIS APPLICANT
                  </div>

                  <div className="buttons">{renderButtons()}</div>
                </div>
              </>
            );
          })}
        </Carousel>
      </Modal>
    </div>
  );
}
