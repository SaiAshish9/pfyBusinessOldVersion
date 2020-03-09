import React from 'react';
import downArrow from './down-arrow.svg';
import {Checkbox} from 'antd'

const CardHeader = props => {
  console.log("%c CardHeader: user", 'font-size: 25px')
  console.log(props.user)
    const {imgUrl,firstName,college,city} = props.user;
    const onChange = (e) => {
      console.log(e.target.checked)
    }
    
    return (
    <div className={"applicationCard__header"}>
      <Checkbox onChange={onChange} ></Checkbox>
      <div className="header__image">
        <img
          className={"applicationCard__image"}
          src={imgUrl}
        />
      </div>
    <div className="header__name sub-head--2">{firstName}</div>
    <div className="header__college sub-head--1">{college}</div>
      <div className="header__city sub-head--1">{city}</div>
  
      <div className="header__progress">
        <div className={"applicationCard__ProgressBar"}>
          <div
            style={{
              background: "#2ACF18",
              width: "70%",
              height:"2.2rem",
              padding: ".3rem .4rem",
              color: "#fff",
              borderRadius: "5px"
            }}
          >
            <p style={{width:"15rem",padding:0,marginBottom:0}}>Resume Score : 70%</p>
          </div>
        </div>
      </div>
      <div>
        <img className="header__arrow" src={downArrow} alt="arrow"/>
      </div>
      
    </div>
  );
  }

  export default CardHeader;