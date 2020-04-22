import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Route, Link, useHistory, useLocation } from "react-router-dom";
import cookie from "js-cookie";

import logo from "../../../assets/img/logo.png";
import leftIcon from "../../../assets/img/header/arrowLeft.svg";
import rightIcon from "../../../assets/img/header/arrowRight.svg";
import campusMarketingIcon from "../../../assets/img/sideBarIcon/campusMarketingIcon.svg";
import editProfileIcon from "../../../assets/img/sideBarIcon/editProfileIcon.svg";
import gigIcon from "../../../assets/img/sideBarIcon/gigIcon.svg";
import homeIcon from "../../../assets/img/sideBarIcon/homeIcon.svg";
import internshipIcon from "../../../assets/img/sideBarIcon/internshipIcon.svg";
import logoutIcon from "../../../assets/img/sideBarIcon/logoutIcon.svg";
import studentOffersIcon from "../../../assets/img/sideBarIcon/studentOffersIcon.svg";

const { Header, Sider, Content } = Layout;
export default function PrivateHeader({ component: Component, ...rest }) {
  const history = useHistory();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    cookie.remove("token");
    history.push("/");
  };

  const selectedKey = () => {
    switch (location.pathname) {
      case "/internship": {
        return ["2"];
      }
      case "/gigs": {
        return ["3"];
      }

      case "/campus-marketing": {
        return ["4"];
      }

      case "/student-offer": {
        return ["5"];
      }

      case "/edit-profile": {
        return ["6"];
      }

      default: {
        return ["1"];
      }
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={240}>
        <div className="logo">
          <img src={logo} alt="" className="" style={{ width: "154px" }} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={selectedKey()}
        >
          <Menu.Item key="1">
            <Link to="/home">
              <span className="anticon">
                <img src={homeIcon} alt="" className="" />
              </span>
              <span>Home</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/internship">
              <span className="anticon">
                <img src={internshipIcon} alt="" className="" />
              </span>
              <span>Internships</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/gigs">
              <span className="anticon">
                <img src={gigIcon} alt="" className="" />
              </span>
              <span>Gigs</span>
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

          <Menu.Item key="7" style={{ marginTop: 220 }} onClick={handleLogout}>
            <span className="anticon">
              <img src={logoutIcon} alt="" className="" />
            </span>
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <img
              onClick={handleToggle}
              src={rightIcon}
              alt=""
              className=""
              style={{ cursor: "pointer" }}
            />
          ) : (
            <img
              onClick={handleToggle}
              src={leftIcon}
              alt=""
              className=""
              style={{ cursor: "pointer" }}
            />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "5rem 3rem",
            minheight: 280,
          }}
        >
          <Route
            {...rest}
            component={(props) => (
              <>
                <Component {...props} />
              </>
            )}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
