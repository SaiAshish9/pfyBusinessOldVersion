import React, {useEffect, useState} from "react";
import { Table, Tag, Skeleton } from 'antd';
import img1 from '../../assets/existingGigs/img1.svg'
import img2 from '../../assets/existingGigs/img2.svg'
import img3 from '../../assets/existingGigs/img3.svg'
import img4 from '../../assets/existingGigs/img4.svg'
import img5 from '../../assets/existingGigs/img5.svg'
import { useHistory } from "react-router-dom";
import axios from 'axios';


const { Column, ColumnGroup } = Table;

export default function ExistingGig() {
  const history = useHistory();
  const [applications, setApplications] = useState(null);

  useEffect(()=> {
    const url = "internship/fetch_internship_as_company";
    axios.get(url)
      .then(res => {
        const data = res.data;

        console.log('GET APPLICATION DETAILS')
        console.log(data)

        setApplications(data);
      })
  }, [])
let i = 1;
// const columns = [
//   {
//     title: 'S No.',
//     dataIndex: 'key',
//     key: 'sno',
//     rowKey: i,
//     render: key => <span key={i} style={{fontWeight: 500}}>{i++}</span>,
//   },
//   {
//     title: 'Post',
//     // dataIndex: 'address',
//     className: "post-column",
//     key: 'post',
//     render: (record) => (
//     <div onClick={() => history.push('/specific-gig/'+record._id)} >
//       <img style={{height: "5rem", width: "5rem", marginRight: "1rem"}} src={require(`../../assets/existingGigs/img${Math.floor(Math.random()*4+1)}.svg`)} alt=""/>
//        <span>{record.designation}</span> </div>
//     )
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//     render: status => (
      // <div>
      //   <div style={{ display:"inline-flex", marginRight: "0.5rem", width: "0.75rem", height: "0.75rem", borderRadius: "1rem", background: status === 1001 ? "#00e007" : status === 1000 ? "#e0e000" : "#e00000" }}></div>
      //   <span>{status === 1000 ? "Under Review " : status === 1001 ? "Live" : "Rejected" }</span>
      // </div>
//     )
//   },
//   {
//     title: 'Date',
//     key: 'date',
//     render: (record) => (
//       <span >
//         31/04/2020
//       </span>
//     ),
//   },
//   {
//     title: 'Category',
//     key: 'category',
//     className: 'last-tr',
//     render: (record) => (
//       <span style={{borderRight: "none"}}>
//         {record.category}
//       </span>
//     ),
//   },
// ];

const data = applications;

  return (
    <div className="">
  <table className="existing-gigs-table">
    <tbody>
    <tr >
      <th className="first-col">S.No</th>
      <th>Post</th>
      <th>Status</th>
      <th>Date</th>
      <th className="last-col">Category</th>
    </tr>

    {applications ? applications.map((application, index) => 
      <tr key={index} className="data-row">
        <td className="first-col">{index+1}</td>
        <td onClick={() => history.push('/specific-gig/'+application._id)} className="post-col"> <img className="img" src={require(`../../assets/existingGigs/img${Math.floor(Math.random()*4+1)}.svg`)} alt=""/>{application.designation}</td>
        <td><div className="dot" style={{ background: application.status === 1001 ? "#00e007" :  application.status === 1000 ? "#e0e000" : "#e00000"}}></div> { application.status === 1000 ? "Under Review " :  application.status === 1001 ? "Live" : "Rejected" } </td>
        <td>21/04/2019</td>
        <td className="last-col">Business Development and Digilance</td>
      </tr>
    ) : <Skeleton height="60vh" width="100%" active />}

    </tbody>
  </table>

    </div>
  );
}
