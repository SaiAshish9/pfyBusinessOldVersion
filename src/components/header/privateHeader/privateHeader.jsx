import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, message } from "antd";
import cookie from "js-cookie";
import React, { useState, useEffect } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
/* -------------------------------- ******** -------------------------------- */
import HowPracifyWork from "../../howPracifyWork";
import logo from "../../../assets/img/logo.png";
import campusMarketingIcon from "../../../assets/img/sideBarIcon/campusMarketingIcon.svg";
import editProfileIcon from "../../../assets/img/sideBarIcon/editProfileIcon.svg";
import gigIcon from "../../../assets/img/sideBarIcon/gigIcon.svg";
import homeIcon from "../../../assets/img/sideBarIcon/homeIcon.svg";
import internshipIcon from "../../../assets/img/sideBarIcon/internshipIcon.svg";
import logoutIcon from "../../../assets/img/sideBarIcon/logoutIcon.svg";
import studentOffersIcon from "../../../assets/img/sideBarIcon/studentOffersIcon.svg";
import Axios from "axios";
import { getHeaders } from "../../../helpers/getHeaders";
import { s3URL } from "../../constant/userToken";
import useWindowDimensions from "../../../Hooks/WindowDimensions";
import Loader from "../../Loader/Loader";
import Help from "../../newComp/help/help";
import ChangePassword from "./ChangePassword";
const { Header, Sider, Content } = Layout;
export default function PrivateHeader({ component: Component, ...rest }) {
  const history = useHistory();
  const location = useLocation();
  const { width, height } = useWindowDimensions();

  const [headerLoader, setHeaderLoader] = useState(true);
  const [headerData, setHeaderData] = useState({});
  const [collapsed, setCollapsed] = useState(width > 768 ? false : true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  useEffect(() => {
    Axios.get("company/fetch_my_details", getHeaders())
      .then((res) => {
        setHeaderData(res.data);
        setHeaderLoader(false);
      })
      .catch((err) => {
        //  console.log()
        if (err.response.status === 406) {
          history.push("/register");
        }
      });
  }, []);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    cookie.remove("companytoken");
    history.push("/");
  };

  const editDetails = (body) => {
    Axios.put("/company/edit_details", body, getHeaders())
      .then((res) => {
        setHeaderData(res.data);
      })
      .catch((err) => {
        console.log(err);
        message.error("Something Went Wrong");
      });
  };

  const selectedKey = () => {
    console.log(location.pathname.toString().split("/")[1]);
    switch (location.pathname.toString().split("/")[1]) {
      case "gigs": {
        return ["2"];
      }
      case "internship": {
        return ["3"];
      }

      case "campus-marketing": {
        return ["4"];
      }

      case "student-offer": {
        return ["5"];
      }

      case "edit-profile": {
        return ["6"];
      }

      default: {
        return ["1"];
      }
    }
  };
  if (headerLoader) {
    return <Loader />;
  }
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={width < 768 ? 0 : 80}
        width={240}
      >
        <div className="logo">
          <img src={logo} alt="" className="" />
        </div>
        {!collapsed && (
          <div className="company-avatar-block">
            <div className="company-avatar">
              <img src={s3URL + headerData.logoUrl} alt="logo" />
            </div>
            <h3 className="company-name">{headerData.companyName}</h3>
            <h5 className="company-mail-address">{headerData.email}</h5>
          </div>
        )}

        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={["1"]}
          selectedKeys={selectedKey()}
        >
          <Menu.Item key="1">
            <Link to="/dashboard">
              <span className="anticon">
                <img src={homeIcon} alt="" className="" />
              </span>
              <span>Dashboard</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/gigs">
              <span className="anticon">
                <img src={gigIcon} alt="" className="" />
              </span>
              <span>Gigs</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/internship">
              <span className="anticon">
                <img src={internshipIcon} alt="" className="" />
              </span>
              <span>Internships</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/campus-marketing">
              <span className="anticon">
                <img src={campusMarketingIcon} alt="" className="" />
              </span>
              <span>Campus Marketing</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="5">
            <Link to="/student-offer">
              <span className="anticon">
                <img src={studentOffersIcon} alt="" className="" />
              </span>
              <span>Student Offers</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="6">
            <Link to="/edit-profile">
              <span className="anticon">
                <img src={editProfileIcon} alt="" className="" />
              </span>
              <span>Edit Profile</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="7" onClick={handleLogout}>
            <span className="anticon">
              <img src={logoutIcon} alt="" className="" />
            </span>
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Content style={{}}>
          <Header className="site-layout-background" style={{ width: "100%" }}>
            <>
              {collapsed ? (
                <MenuUnfoldOutlined
                  onClick={handleToggle}
                  className="trigger"
                />
              ) : (
                <MenuFoldOutlined onClick={handleToggle} className="trigger" />
              )}
              <div className="header-links">
                <HowPracifyWork />

                <div className="header-avatar-block">
                  <div className="avatar-on-header">
                    {headerData.firstName[0].toUpperCase()}
                  </div>
                  <span className="avatar-name">{`${headerData.firstName} ${headerData.lastName}`}</span>
                  <div className="header-menu fadeIn">
                    <ChangePassword
                      className="header-menu__option"
                      setShowChangePassword={setShowChangePassword}
                      showChangePassword={showChangePassword}
                    />
                    <div className="header-menu__option" onClick={handleLogout}>
                      
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
                <span className="needHelp-button">
                  <Help />
                </span>
              </div>
            </>
          </Header>
          <div className="site-layout-background site-content">
            <Route
              {...rest}
              component={(props) => (
                <>
                  <Component
                    {...props}
                    user={headerData}
                    editDetails={editDetails}
                  />
                </>
              )}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
