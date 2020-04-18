import React, {useState, useEffect,Fragment} from 'react'
import InternshipStatus from '../../newComp/internshipStatus/internshipStatus';
import axios from 'axios';
import { Skeleton } from 'antd';

export default function InternshipDetails(props) {
    const [data, setData] = useState(null)
    const [internshipSummary, setInternshipSummary] = useState(null)
    const getData = (data) => {
        console.log('DATA FROM CHILD ', data)
        setData(data)
    }

    useEffect(() => {
            const url = `internship/company_fetchone/${props.match.params.internshipId}`;
            axios.get(url)
                .then(res => {
                    let data = res.data;
                    console.log('INTERNSHIP SUMMARY ',data)
                    let a = data.applyBefore;
                    let b = a.split(' ')
                    b.pop()
                    b = b.join(' ')
                    data = {
                        ...data,
                        applyBefore: b

                    }
                    setInternshipSummary(data)
                })

    }, []);

    return (
        <div className="internship-details-block">
            <h3 className="internship-details-heading" >
                Primary Internship Title
            </h3>

            {internshipSummary ?  <div className="summary-and-overview">
                <div className="summary"> 
                    <h3 className="summary-title">Internship Summary</h3>
                    <div className="summarty-details">
                    <table className="details-table" >
                        <tr>
                            <td> <p> Stipend <br/> <span> { internshipSummary.stipendType === "Paid" ?  <Fragment> <span>&#8377;</span> {internshipSummary.stipend} </Fragment> : "Unpaid"}</span> </p> </td>
                            <td><p> Closing <br/> <span> {internshipSummary.applyBefore}</span> </p></td>
                            <td><p> Duration <br/> <span> {internshipSummary.duration}</span> </p></td>
                        </tr>
                        <tr>
                        <td><p> Type <br/> <span> {internshipSummary.internshipType}</span> </p></td>
                        <td><p> Profile <br/> <span> Business Development</span> </p></td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className="overview">
                    <h3 className="overview-title">Application Overview</h3>
                    <div  className="overview-details">
                        <span>Pending</span>
                        <span className="number">{data ? data.pending : null}</span>
                    </div>
                    <div className="overview-details">
                        <span>Shortlisted</span>
                        <span className="number">{data ? data.shortlisted : null}</span>
                    </div>
                    <div className="overview-details">
                        <span>Selected</span>
                        <span className="number">{data ? data.selected : null}</span>
                    </div>
                    
                </div>
            </div> : <Skeleton active /> }

            <div className="applied-workers">
                <h3 className="title">Workers Applied</h3>
                <InternshipStatus internshipId={props.match.params.internshipId} data={getData} />
            </div>

        </div>
    )
}
