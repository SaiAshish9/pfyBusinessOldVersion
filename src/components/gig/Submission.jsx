import React from "react";
import { Tabs, Button } from "antd";
import { RedoOutlined, CheckOutlined } from "@ant-design/icons";
import {
  TASK_TYPE_TEXT,
  TASK_TYPE_IMAGE,
  TASK_TYPE_HYPER_LINK,
  TASK_SUBMITTED,
} from "../constant/statusCodes";
import { s3URL, apiURL } from "../constant/userToken";
import Axios from "axios";
import { useState } from "react";
import { getHeaders } from "../../helpers/getHeaders";
const { TabPane } = Tabs;

function Submission(props) {
  const { submissions, tasks, userId, missionId } = props;
  const [approvalLoader,setApprovalLoader] = useState(false)
  const approveTask = (body) => {
    setApprovalLoader(true)
    Axios.post(`${apiURL}task/approve`,body,getHeaders()).then(() =>{
      setApprovalLoader(false)
    }).catch(() => {
      setApprovalLoader(false);
    })
  }
  const renderSubmission = (index) => {
    if (submissions[index]) {
      return submissions[index].data.map((data) => {
        switch (parseInt(data.type)) {
          case TASK_TYPE_IMAGE:
            return (
              <div className="submission__data-container">
                <img
                  className="submission__image"
                  src={s3URL + data.image}
                  alt="user_response"
                />
              </div>
            );
          case TASK_TYPE_TEXT:
            return (
              <div className="submission__data-container ">
                <p className="submission__text">{data.text}</p>
              </div>
            );
          case TASK_TYPE_HYPER_LINK:
            return (
              <div className="submission__data-container">
                <a
                  className="submission__link"
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Link
                </a>
              </div>
            );
          default:
            return null;
        }
      });
    }
    //  return JSON.stringify(submissions[index].data);
  };
  const renderButtons = (index,body) => {
    if(parseInt(submissions[index].status) === TASK_SUBMITTED){
      return (
        <div className="submission__btns">
        <Button
          className="submission__btn submission__btn--redo"
          icon={<RedoOutlined />}
        >
          Redo
        </Button>
        <Button
          className="submission__btn submission__btn--approve"
          icon={<CheckOutlined />}
          loading={approvalLoader}
          onClick={() => approveTask(body)}
        >
          Approve Task
        </Button>
      </div>
      )
    }
  }
  const renderSubmissions = () => {
    const tabs = tasks.map((task, index) =>{
      const body = {
        taskId:task._id,
        submissionId: submissions[index]._id,
        userId,
        missionId
      } 
      return (
        <TabPane tab={`Task ${index + 1}`} key={index}>
          <div className="submission__tab">
          <div className="submission__data">{renderSubmission(index)}</div>
          {renderButtons(index,body)}
          </div>
        </TabPane>
      )
    });
      return <Tabs defaultActiveKey="0">{tabs}</Tabs>;
    
  };

  return <div className="submission" >{renderSubmissions()}</div>;
}

export default Submission;
