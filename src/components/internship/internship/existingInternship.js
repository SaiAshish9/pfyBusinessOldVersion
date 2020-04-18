import React, {useEffect, useState} from "react";
import { Table, Tag, Button, Dropdown, Menu   } from 'antd';
import img1 from '../../../assets/existingGigs/img1.svg'
import img2 from '../../../assets/existingGigs/img2.svg'
import img3 from '../../../assets/existingGigs/img3.svg'
import img4 from '../../../assets/existingGigs/img4.svg'
import img5 from '../../../assets/existingGigs/img5.svg'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { MoreOutlined, ShareAltOutlined  } from '@ant-design/icons';
import ShareInternship from '../../newComp/shareInternship/shareInternship';
import BoostYourInternship from '../../newComp/boostYourInternship/boostYourInternship';


const { Column, ColumnGroup } = Table;

export default function ExistingInternship() {

  const [isShow, setIsShow] = useState(false)
  const [isShowBoost,  setIsShowBoost] = useState(false)
  const [internshipId, setInternshipId] = useState(null)

  const menu = (id) =>  (
    <Menu onClick={(e ) => handleMenuClick(e, id)}>
       <Menu.Item key="share">
       <ShareAltOutlined />
        Share Internship
      </Menu.Item>
      <Menu.Item key="edit">
        {/* <UserOutlined /> */}
        Edit Internship
      </Menu.Item>
      <Menu.Item key="view">
        {/* <UserOutlined /> */}
        View Internship
      </Menu.Item>
      <Menu.Item key="post">
        {/* <UserOutlined /> */}
        Post Similar Internship
      </Menu.Item>
     
     
    </Menu>
  );

  const boostInternship = () => {
    setIsShowBoost(true)
  }

  const isCloseBoost = () => {
    setIsShowBoost(false)
  }

  function handleMenuClick(e, internshipId) {
    // message.info('Click on menu item.', e);
    console.log('click', internshipId);
    setInternshipId(internshipId)

    if(e.key === "view"){
      // history.push({
      //   pathname :`/view-internship/${props.internship._id}`,
      //   state: {isFetchReq: true}
      // })
      console.log('clicked')
    } else if(e.key === "share"){
      // setIsSetShow(!isSetShow);
      setIsShow(true)
    }
  }
  const history = useHistory();
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    const url = "internship/fetch_internship_as_company";
    axios.get(url)
      .then(res => {
        const data =res.data;
        console.log(data)
        setApplications(data)

      })
  }, [])

let i = 1;
const columns = [
  {
    title: 'S No.',
    dataIndex: 'key',
    key: 'sno',
    rowKey: i,
    render: key => <span key={i} style={{fontWeight: 500}}>{i++}</span>,
  },
  {
    title: 'Post',
    // dataIndex: 'address',
    className: "post-column",
    key: 'post',
    render: (record) => (
    <div onClick={() => history.push('/specific-gig/'+record._id)} >
      <img style={{height: "5rem", width: "5rem", marginRight: "1rem"}} src={require(`../../../assets/existingGigs/img${Math.floor(Math.random()*4+1)}.svg`)} alt=""/>
       <span>{record.designation}</span> </div>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <div>
        <div style={{ display:"inline-flex", marginRight: "0.5rem", width: "0.75rem", height: "0.75rem", borderRadius: "1rem", background: status === 1001 ? "#00e007" : status === 1000 ? "#e0e000" : "#e00000" }}></div>
        <span>{status === 100 ? "Under Review " : status === 1001 ? "Live" : "Rejected" }</span>
      </div>
    )
  },
  {
    title: 'Applications',
    key: 'date',
    render: (record) => (
      <span style={{fontWeight: "500", fontSize: "18px"}} >
        {record.totalApplications}
      </span>
    ),
  },
  {
    title: '',
    key: 'boost',
    className: 'last-tr-internship',
    render: (record) => (
      <div style={{display: "flex", justifyContent:"space-betweem", alignItems: "center"}}>
        {/* <button className="boost-internship-btn">
          <span>Boost <br/> Internship</span>
        </button> */}
        <Button onClick={boostInternship} className="boost-internship-btn">Boost Internship</Button>
        <Dropdown overlay={() => menu(record._id)}>
            <a className="ant-dropdown-link" style={{color: "black", height: "fit-content", padding: "0 7px"}} onClick={e => e.preventDefault()}>
              <MoreOutlined style={{fontSize: "1.5rem"}} /> 
              {/* <img src={moreIcon} alt="" /> */}
            </a>
          </Dropdown>
        
      </div>
      
    ),
  },
];


const isClose = () => {
  setIsShow(false)
}
// intershipId={props.internship._id}
const data = applications;

  return (
    <div className="">
      
      <Table rowKey={i} className="existingGigs-table" columns={columns} dataSource={data} bordered pagination={false} />
      <ShareInternship isShow={isShow} isClose={isClose} intershipId={internshipId}  />
      <BoostYourInternship isShowBoost={isShowBoost} isCloseBoost={isCloseBoost} intershipId={internshipId}  />
      {/* <Table dataSource={data} ellipsis= "enable" bordered pagination={false}>
      <Column style={{borderLeft: "none"}}  title="S No." dataIndex="key" key="key" />
      <Column title="Post" dataIndex="firstName" key="post" />
      <Column title="Status" dataIndex="age" key="status" />
      <Column title="Date" dataIndex="address" key="date" />
      <Column style={{borderRight: "none"}}  title="Category" dataIndex="lastName" key="category" /> */}
    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <span>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </span>
      )}
    /> */}
    {/* <Column
      title="Action"
      key="action"
      render={(record) => (
        <span>
          <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
          <a>Delete</a>
        </span>
      )}
    /> */}
  {/* </Table> */}
    </div>
  );
}
