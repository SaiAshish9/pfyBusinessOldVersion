import React from "react";
import { Button, notification } from "antd";
import { useHistory } from "react-router-dom";
import QuickStat from "./quickStat";
import UserInternship from "./userInternship";

export default function Internship() {
  const history = useHistory();

  const handleNotification = () => {
    history.push("/user-resume");
  };
  return (
    <div className="internship-main-block">
      <QuickStat></QuickStat>
      <UserInternship />
      <Button onClick={handleNotification}>Notification</Button>
    </div>
  );
}
