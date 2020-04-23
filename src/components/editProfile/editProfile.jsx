import React, {useState, useEffect, Fragment} from "react";
import randomImg from '../../assets/randomImg.jpg';
import PersonalProfileModal from './personalProfileModal';
import ChangePassword from './changePassword';
import CompanyProfileModal from './companyProfileModal';


export default function EditProfile() {
  const [isShow, setIsShow] = useState(false)

  // for company profile modal
  const [isShow2, setIsShow2] = useState(false)

  // for change password modal
  const [isShow3, setIsShow3] = useState(false)

  const personalProfileHandler = () => {
    setIsShow(true)
  }

  const isClose = () => {
    setIsShow(false);
  }

  const companyProfileHandler = () => {
    setIsShow2(true)
  }

  const isClose2 = () => {
    setIsShow2(false);
  }

  const isClose3 = () => {
    setIsShow3(false);
  }

  const passwordModal = () =>{
    isClose();
    setIsShow3(true)
  }

  
  return (
    <Fragment>
      <ChangePassword isShow={isShow3} isClose={isClose3} />
      <PersonalProfileModal isShow={isShow} isClose={isClose} isShowChangePasswordModal={passwordModal} />
      <CompanyProfileModal isShow={isShow2} isClose={isClose2} />
    
    <div className="edit-profile-block">
      <h1 className="heading">Edit Profile</h1>
      <div className="edit-profile-cards">
        <div className="personal-details">
          <h1 className="heading">Personal Details <span onClick={personalProfileHandler}>Edit</span> </h1>
          {/* <div>Full Name <br/> <span>Mayank Muppal</span> </div> */}
          <div className="details">
            <div className="title">Full Name</div>
            <div className="detail">Mayank Muppal</div>
          </div>
          <div className="details">
            <div className="title">Mobile</div>
            <div className="detail">8741254789</div>
          </div>
          <div className="details">
            <div className="title">Email</div>
            <div className="detail">mayank114@gmail.com</div>
          </div>
          <div className="details">
            <div className="title">Password</div>
            <div className="detail">************</div>
          </div>
          
        </div>
        <div className="company-details">
          <h1 className="heading">Company Details <span onClick={companyProfileHandler}>Edit</span> </h1>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                  <div className="details">
                  <div className="title">Company Name</div>
                  <div className="detail">Mayank Muppal</div>
                </div>
                <div className="details">
                  <div className="title">Company Websitr</div>
                  <div className="detail">www.pracify.com</div>
                </div>
                </div>
                <div>
                  <img className="img" src={randomImg} alt=""/>
                </div>
            </div>
            <div className="details">
              <div className="title">Company Type</div>
              <div className="detail">dabcdefghijkm@gmail.com@</div>
            </div>
            <div className="details">
              <div className="title">About Company</div>
              <div className="detail">Lorem Ipsum is simply dummy text of the pyuvcb</div>
            </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
