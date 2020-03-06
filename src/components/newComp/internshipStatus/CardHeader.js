import React from 'react';

const CardHeader = props => {
    // const {imgUrl,firstName,college,city} = props.user
    
    return (
    <div className={"applicationCard__header"}>
      <div className="header__image">
        <img
          className={"applicationCard__image"}
          src={"imgUrl"}
        />
      </div>
    <div className="header__name sub-head--2">{"firstName"}</div>
    <div className="header__college sub-head--1">{"college"}</div>
      <div className="header__city sub-head--1">{"city"}</div>
  
      <div className="header__progress">
        <div className={"applicationCard__ProgressBar"}>
          <div
            style={{
              background: "#2ACF18",
              width: "70%",
              height:"2.2rem",
              padding: ".3rem .4rem",
              color: "#fff",
            
            }}
          >
            <p style={{width:"15rem",padding:0,marginBottom:0}}>Resume Score : 70%</p>
          </div>
        </div>
      </div>
    </div>
  );
  }

  export default CardHeader;