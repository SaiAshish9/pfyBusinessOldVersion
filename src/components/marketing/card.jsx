import React, {Fragment} from 'react';
// import './marketingStyle.css';

export function card(props) {
    let img;
    if(props.value === "standees"){
        img = <Fragment>
            <img style={{paddingTop: "50px", height: "150px", width: "100px"}} src={props.image1} alt="First Image"/>
                <img style={{paddingTop: "50px", height: "150px", width: "100px"}} src={props.image2} alt="First Image"/>
            </Fragment>
    } else {
        img =  <img style={{paddingTop: "50px", height: "150px", width: "100px"}} src={props.image} alt="First Image"/>
    }
    return (
        <div className="box">
                <div class="round">
                <input value={props.value} onChange={props.cardHandler} type="checkbox" id={"checkbox" + props.heading} />
                <label for={"checkbox" + props.heading}></label>
                </div>
                {img}
                <p className="text1">{props.heading}</p>
                <p className="text2">Total Task :</p>
                <hr style={{ backgroundColor: "#f9fbfd;", marginTop: "2rem"}}/>
                <p className="bottomText">Starts at INR {props.price}</p>
            </div>
    )
}
