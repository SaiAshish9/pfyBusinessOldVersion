import React, {Fragment} from 'react';

// import style from "../marketing/marketingStyle.module.css"


export function card(props) {
    let img;
    
        img =  <img style={{paddingTop: "25px"}} src={props.image} alt="First Image"/>
    
    return (
        <div className="marketing-card-box">
                <div class="marketing-card-round">
                <input value={props.value} onChange={props.cardHandler} type="checkbox" id={"checkbox" + props.heading} />
                <label for={"checkbox" + props.heading}></label>
                </div>
                {img}
                <p className="marketing-card-text1">{props.heading}</p>
                <button className="price-button">
                    Starts at INR {props.price}
                </button>
                {/* <p className="marketing-card-text2">Total Task :</p> */}
                {/* <hr style={{ backgroundColor: "#f9fbfd;", marginTop: "2rem"}}/> */}
                {/* <p className="marketing-card-bottomText">Starts at INR {props.price}</p> */}
            </div>
    )
}
