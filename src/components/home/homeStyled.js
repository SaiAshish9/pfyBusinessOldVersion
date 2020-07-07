import styled from "styled-components";
import avenirr from "../../assets/font/AvenirLTStd-Medium.otf";

export const MyBlockOne = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 16px;
`;
export const MyBlockTwo = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 42px;
`;
export const MyBlockThree = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 72px;
`;
export const MyBlockFour = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 98px;
`;
export const MyBlockFive = styled.div`
  position: absolute;
  height: 16px;
  border-radius: 16px;
  width: 120px;
`;

//! ------------------------------ header-style ------------------------------ */
export const HeaderStyled = styled.div`
  .header-heading {
    font-weight: 700;
    font-size: 38px;
    margin: 0px;
    font-family: avenir, sans-serif;
    color: #215ea9;
  }
`;

//! ---------------------------- FrontBlockStyled ---------------------------- */
//#region
const FrontBlockStyled = styled.div`
  margin: 160px 0px 80px 0px;
  width: 100%;
  background-color: #fff;
  position: relative;
  .content-with-image {
    display: flex;
    align-items: center;

    .content-background {
      /* --------------------------- position: relative; -------------------------- */
      display: flex;
      align-items: center;
      width: 80%;
      height: 525px;
      background-color: #ffeeef;
      border-radius: 0% 30% 30% 0% / 0% 50% 50% 0%;
      //#region
      .one {
        background-color: #f7cdcd;
        top: 3%;
        left: 48%;
      }
      .two {
        background-color: #ffc6c6;
        top: 3%;
        left: 54%;
      }
      .three {
        background-color: #ffc6c6;
        top: 70%;
        left: 46%;
      }
      .four {
        background-color: #ffc6c6;
        top: 70%;
        left: 48%;
      }
      .five {
        background-color: #ff6666;
        bottom: 5%;
        left: 60%;
      }
      .six {
        background-color: #ff6666;
        bottom: 5%;
        left: 66%;
      }
      //#endregion

      .content-data {
        z-index: 1;
        width: 50%;
        margin-left: 152px;

        .data-heading-one {
          @font-face {
            font-family: "avenir";
            src: url(avenirr);
          }
          font-family: avenir, sans-serif;
          font-weight: 700;
          font-size: 38px;
          line-height: 46px;
          color: #333743;
          margin-bottom: 17px;
        }
        .data-heading-two {
          font-family: avenir, sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 46px;
          color: #333743;
          .Typewriter {
            display: inline;
          }
        }
        .data-para {
          /* @font-face {
          font-family: "avenir";
          src: url(avenirr);
        } */
          color: #4f4f4f;
          font-family: avenir, sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
        }
      }
      @media screen and (max-width: 1200px) and (min-width: 800px) {
        .content-data {
          width: 60%;
          margin-left: 60px;
          .data-heading-one {
            font-size: 32px;
          }
          .data-heading-two {
            font-size: 28px;
          }
          .data-para {
            font-size: 14px;
          }
        }
      }
    }

    .pink-image {
      position: absolute;
      top: 0%;
      left: 56%;
      width: 40%;
    }
  }

  .button {
    /* width: 150%; */
    display: flex;
    margin-left: 152px;
    margin-top: -80px;
    .first-button {
      z-index: 1;
      background: none;
      border: solid black 1px;
      padding: 13px 20px;
      cursor: pointer;
      box-shadow: -4px 4px black;
      border-radius: 50px;
      background-color: #ee6464;

      font-weight: 700;
      size: 18px;
      line-height: 16px;
      color: #fff;
      outline: none;

      :hover {
        background-color: #ed3833;
      }
    }
    .second-button {
      z-index: 1;
      background: white;
      margin-left: 60px;
      border: solid black 1px;
      padding: 13px 36px;
      cursor: pointer;
      box-shadow: -4px 4px black;
      border-radius: 50px;

      font-weight: 700;
      size: 18px;
      line-height: 16px;
      color: #000;
      outline: none;

      :hover {
        background-color: #e6e6e6;
      }
    }
  }

  //#endregion

  //* -------------------------- at 800px front-block -------------------------- */
  //#region
  @media screen and (max-width: 800px) {
    margin: 50px 0px 80px 0px;

    .content-with-image {
      flex-direction: column-reverse;

      .content-background {
        height: initial;
        width: 100%;
        border-radius: initial;
        background-image: linear-gradient(#ffeeef, #fff);

        .one {
          z-index: -1;
        }
        .two {
          z-index: -1;
        }
        .content-data {
          padding: 36px;
          width: 92%;
          margin-left: 10px;
          .data-heading-one {
          }
          .data-heading-two {
          }
          .data-para {
          }
        }
      }
      .img-block {
        text-align: center;
        background-color: #ffeeef;
        .pink-image {
          position: initial;
          width: 80%;
        }
      }
    }
    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 36px;
      margin-left: initial;
      width: initial;
      .first-button {
        width: 240px;
      }
      .second-button {
        width: 240px;
        margin-top: 12px;
        margin-left: initial;
      }
    }
  }
`;

//#endregion

//! ---------------------------- StepIncludeStyled --------------------------- */
//#region
const StepIncludeStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  //? -------------------------------- step one -------------------------------- */
  //#region
  .step-one-block {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 364px;
    margin-bottom: 108px;

    //#region
    .one {
      background-color: #c2f1f5;
      top: -2%;
      left: 72%;
    }
    .two {
      background-color: #ccebed;
      top: 20%;
      left: 8%;
    }
    .three {
      background-color: #ccebed;
      top: 20%;
      left: 10%;
    }
    .four {
      background-color: #ccebed;
      top: 20%;
      left: 80%;
    }
    .five {
      background-color: #e2f3f5;
      top: 85%;
      left: 34%;
    }
    .six {
      background-color: #cceaed;
      top: 85%;
      left: 44%;
    }
    .seven {
      background-color: #ccebed;
      top: 85%;
      left: 76%;
    }
    .eight {
      background-color: #ccebed;
      top: 85%;
      left: 78%;
    }
    .nine {
      background-color: #ccebed;
      top: 85%;
      left: 87%;
    }
    .ten {
      background-color: #47b5bd;
      top: 98%;
      left: 82%;
    }
    .eleven {
      background-color: #47b5bd;
      top: 98%;
      left: 92%;
    }
    @media screen and (max-width: 600px) {
      .four {
        display: none;
      }
      .eight {
        display: none;
      }
      .nine {
        display: none;
      }
      .ten {
        display: none;
      }
      .eleven {
        display: none;
      }
    }
    //#endregion

    .step-one {
      display: flex;
      align-items: center;
      width: 95%;
      height: 100%;
      background-color: #edf8f9;
      border-radius: 180px 0% 0% 180px / 50% 0% 0% 50%;
      .step-one-content {
        display: flex;
        margin: 0px 10% 0px 34%;
        z-index: 1;
        .step-number-Icon-one {
          height: 60px;
          width: 60px;
          border-color: black;
          border-style: solid;
          border-radius: 60px;
          border-width: 2px 2px 2px 0px;
          position: relative;
          right: 24px;
          bottom: 14px "";

          background-color: #47b5bd;
        }
        .heading-para-one {
          width: 78%;
          .step-one-heading {
            font-size: 26px;
            line-height: 1.26;
            letter-spacing: 0.3px;
            font-weight: 700;
            font-family: avenir, sans-serif;

            color: #47b5bd;
          }
          .step-one-para {
            font-size: 18px;
            line-height: 1.47;
            letter-spacing: 0.1px;
            font-weight: 100;
            font-family: avenir, sans-serif;
            color: #4f4f4f;
          }
        }
      }
    }
    .step-one-image {
      position: absolute;
      left: 80px;
      width: 20%;
      z-index: 1;
    }
  }
  //#endregion

  //* --------------------------- at 400px step one block -------------------------- */
  //#region
  @media screen and (max-width: 502px) {
    .step-one-block {
      flex-direction: column;
      //#region
      /* .one {
        display: none;
      }
      .two {
        display: none;
      }
      .three {
        display: none;
      }
      .four {
        display: none;
      }
      .five {
        display: none;
      }
      .six {
        display: none;
      }
      .seven {
        display: none;
      }
      .eight {
        display: none;
      }
      .nine {
        display: none;
      }
      .ten {
        display: none;
      }
      .eleven {
        display: none;
      } */
      //#endregion

      .step-one {
        margin-left: auto;
        width: 100%;
        .step-one-content {
          padding: 0px 20px;
          margin: initial;
          .step-number-Icon-one {
            position: absolute;
            top: -28px;
            left: 34px;
          }
          .heading-para-one {
            width: 100%;

            .step-one-heading {
              font-size: 18px;
            }
            .step-one-para {
              font-size: 12px;
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
      .step-one-image {
        width: 42%;
        /* right:initial; */
        left: 170px;
        top: -84px;
      }
    }
  }
  //#endregion

  //? -------------------------------- step three -------------------------------- */
  //#region
  .step-three-block {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 364px;
    margin-bottom: 108px;
    //#region
    .one {
      background-color: #f3f702;
      top: -2%;
      left: 72%;
    }
    .two {
      background-color: #f3f702;
      top: 20%;
      left: 8%;
    }
    .three {
      background-color: #f3f587;
      top: 20%;
      left: 10%;
    }
    .four {
      background-color: #f6f7a3;
      top: 20%;
      left: 80%;
    }
    .five {
      background-color: #f6f7a3;
      top: 85%;
      left: 34%;
    }
    .six {
      background-color: #f6f7a3;
      top: 85%;
      left: 44%;
    }
    .seven {
      background-color: #f6f7a3;
      top: 85%;
      left: 76%;
    }
    .eight {
      background-color: #f7fa5f;
      top: 85%;
      left: 78%;
    }
    .nine {
      background-color: #f3f587;
      top: 85%;
      left: 87%;
    }
    .ten {
      background-color: #f6f7a3;
      top: 98%;
      left: 82%;
    }
    .eleven {
      background-color: #f3f587;
      top: 98%;
      left: 92%;
    }
    @media screen and (max-width: 600px) {
      .four {
        display: none;
      }
      .eight {
        display: none;
      }
      .nine {
        display: none;
      }
      .ten {
        display: none;
      }
      .eleven {
        display: none;
      }
    }
    //#endregion

    .step-three {
      display: flex;
      align-items: center;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: #fffceb;
      border-radius: 180px 0% 0% 180px / 50% 0% 0% 50%;
      .step-three-content {
        display: flex;
        margin: 0px 10% 0px 50%;
        z-index: 1;
        .step-number-Icon-three {
          height: 60px;
          width: 60px;
          border-color: black;
          border-style: solid;
          border-radius: 60px;
          border-width: 2px 2px 2px 0px;
          position: relative;
          right: 24px;
          bottom: 14px "";

          background-color: #ffd900;
        }
        .heading-para-three {
          width: 78%;
        }
        .step-three-heading {
          font-size: 26px;
          line-height: 1.26;
          letter-spacing: 0.3px;
          font-weight: 700;
          font-family: avenir, sans-serif;
          color: #ffd900;
        }
        .step-three-para {
          font-size: 18px;
          line-height: 1.47;
          letter-spacing: 0.1px;
          font-weight: 100;
          font-family: avenir, sans-serif;
          color: #4f4f4f;
        }
      }
    }
    .step-three-image {
      position: absolute;
      z-index: 1;
      width: 30%;
      left: 72px;
    }
  }
  //#endregion

  //* --------------------------- at 400px step three block -------------------------- */
  //#region
  @media screen and (max-width: 502px) {
    .step-three-block {
      flex-direction: column;

      .step-three {
        margin-left: auto;
        width: 100%;
        .step-three-content {
          margin: initial;
          padding: 0px 20px;
          .step-number-Icon-three {
            position: absolute;
            top: -28px;
            left: 34px;
          }
          .heading-para-three {
            width: 100%;

            .step-three-heading {
              font-size: 18px;
            }
            .step-three-para {
              font-size: 12px;
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
      .step-three-image {
        width: 56%;
        /* right:initial; */
        left: 120px;
        top: -98px;
      }
    }
  }
  //#endregion

  //? -------------------------------- step two ------------------------------- */
  //#region
  .step-two-block {
    position: relative;
    display: flex;
    align-items: center;
    height: 364px;
    margin-bottom: 108px;
    //#region
    .one {
      background-color: #7ccc33;
      top: 5%;
      left: 50%;
    }
    .two {
      background-color: #7ccc33;
      top: 5%;
      left: 60%;
    }
    .three {
      background-color: #ddf1c9;
      top: 28%;
      left: 66%;
    }
    .four {
      background-color: #ddf1c9;
      top: 28%;
      left: 71%;
    }
    .five {
      background-color: #ddf1c9;
      left: 14%;
      top: 98%;
    }
    .six {
      background-color: #7ccc33;
      top: 98%;
      left: 19%;
    }
    .seven {
      background-color: #7ccc33;
      top: 98%;
      left: 28%;
    }
    //#endregion

    .step-two {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: #f5fbef;
      border-radius: 0px 180px 180px 0px / 0% 50% 50% 0%;

      .step-two-content {
        display: flex;
        margin-left: 200px;
        z-index: 1;
        margin: 0px 30% 0px 10%;

        .step-number-Icon-two {
          height: 60px;
          width: 60px;
          border-color: black;
          border-style: solid;
          border-radius: 60px;
          border-width: 2px 2px 2px 0px;
          position: relative;
          right: 24px;
          bottom: 14px "";

          background-color: #7ccc33;
        }
        .heading-para-two {
          width: 78%;
          .step-two-heading {
            font-size: 26px;
            line-height: 1.26;
            letter-spacing: 0.3px;
            font-weight: 700;
            font-family: avenir, sans-serif;
            color: #7ccc33;
          }
          .step-two-para {
            font-size: 18px;
            line-height: 1.47;
            letter-spacing: 0.1px;
            font-weight: 100;
            font-family: avenir, sans-serif;
            color: #4f4f4f;
          }
        }
      }
    }

    .step-two-image {
      position: absolute;
      z-index: 1;
      width: 15%;
      right: 72px;
    }
  }
  //#endregion

  //* --------------------------- at 400px step two block -------------------------- */
  //#region
  @media screen and (max-width: 502px) {
    .step-two-block {
      flex-direction: column;
      .step-two {
        width: 100%;
        margin-right: auto;
        .step-two-content {
          /* margin-left: 10%; */
          margin: initial;
          padding: 0px 20px;

          .step-number-Icon-two {
            /* background-color: #7ccc33; */
            position: absolute;
            top: -28px;
            /* bottom: 30; */
            left: 34px;
          }
          .heading-para-two {
            width: 100%;

            .step-two-heading {
              font-size: 18px;
              color: #7ccc33;
            }
            .step-two-para {
              font-size: 12px;
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
      .step-two-image {
        width: 26%;
        /* right:initial; */
        left: 120px;
        top: -80px;
      }
    }
  }
  //#endregion

  //? -------------------------------- step four ------------------------------- */
  //#region
  .step-four-block {
    position: relative;
    display: flex;
    align-items: center;
    height: 364px;
    margin-bottom: 42px;
    //#region
    .one {
      background-color: #00affa;
      top: 5%;
      left: 50%;
    }
    .two {
      background-color: #00affa;
      top: 5%;
      left: 60%;
    }
    .three {
      background-color: #ebf3fa;
      top: 28%;
      left: 66%;
    }
    .four {
      background-color: #b3e1f5;
      top: 28%;
      left: 71%;
    }
    .five {
      background-color: #ebf3fa;
      left: 14%;
      top: 98%;
    }
    .six {
      background-color: #00affa;
      top: 98%;
      left: 19%;
    }
    .seven {
      background-color: #00affa;
      top: 98%;
      left: 28%;
    }
    //#endregion

    .step-four {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: blue;
      width: 95%;
      height: 100%;
      background-color: #f5f7ff;
      border-radius: 0px 180px 180px 0px / 0% 50% 50% 0%;

      .step-four-content {
        margin-left: 200px;
        display: flex;
        z-index: 1;
        margin-left: 10%;
        margin-right: 30%;
        margin: 0px 30% 0px 10%;
        .step-number-Icon-four {
          height: 60px;
          width: 60px;
          border-color: black;
          border-style: solid;
          border-radius: 60px;
          border-width: 2px 2px 2px 0px;
          position: relative;
          right: 24px;
          bottom: 14px "";

          background-color: #3366ff;
        }
        .heading-para-four {
          width: 78%;
          .step-four-heading {
            font-size: 26px;
            line-height: 1.26;
            letter-spacing: 0.3px;
            font-weight: 700;
            font-family: avenir, sans-serif;
            color: #3366ff;
          }

          .step-four-para {
            font-size: 18px;
            line-height: 1.47;
            letter-spacing: 0.1px;
            font-weight: 100;
            font-family: avenir, sans-serif;
            color: #4f4f4f;
          }
        }
      }
    }
    .step-four-image {
      position: absolute;
      width: 25%;
      z-index: 1;
      right: 72px;
    }
  }
  //#endregion

  //* --------------------------- at 400px step four block -------------------------- */
  //#region
  @media screen and (max-width: 502px) {
    .step-four-block {
      flex-direction: column;
      .step-four {
        margin-right: auto;
        width: 100%;
        .step-four-content {
          padding: 0px 20px;
          margin: initial;
          .step-number-Icon-four {
            /* background-color: #7ccc33; */
            position: absolute;
            top: -28px;
            /* bottom: 30; */
            left: 34px;
          }
          .heading-para-four {
            width: 100%;

            .step-four-heading {
              font-size: 18px;
            }
            .step-four-para {
              font-size: 12px;
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
      .step-four-image {
        width: 40%;
        /* right:initial; */
        left: 168px;
        top: -80px;
      }
    }
  }
  //#endregion

  .step-button-block {
    margin-left: 80px;
    margin-bottom: 80px;
    /* width: 100%; */
    .step-button-one {
      background: none;
      border: solid black 1px;
      padding: 13px 20px;
      cursor: pointer;
      box-shadow: -4px 4px black;
      border-radius: 50px;
      background-color: #ee6464;

      font-weight: 700;
      size: 18px;
      line-height: 16px;
      color: #fff;
      outline: none;
      :hover {
        background-color: #ed3833;
      }
    }
    .step-button-two {
      background: white;
      margin-left: 60px;
      border: solid black 1px;
      padding: 13px 36px;
      cursor: pointer;
      box-shadow: -4px 4px black;
      border-radius: 50px;

      font-weight: 700;
      size: 18px;
      line-height: 16px;
      color: #000;
      outline: none;

      :hover {
        background-color: #e6e6e6;
      }
    }
  }
  @media screen and (max-width: 512px) {
    .step-button-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 80px;
      width: 100%;
      margin-left: initial;
      text-align: center;
      .step-button-one {
        width: 240px;
      }
      .step-button-two {
        margin-top: 12px;
        margin-left: initial;
        width: 240px;
      }
    }
  }
`;
//#endregion

//! ----------------------------- WhyItWorkStyled ---------------------------- */
//#region
const WhyItWorkStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-bottom: 80px;
  /* height: 100%; */
  .main-heading {
    margin: 80px 0px 80px 66px;
    font-size: 28px;
    line-height: 1.17;
    letter-spacing: 0.3px;
    font-weight: 700;
    font-family: avenir, sans-serif;
  }

  .whyItWork-block {
    position: relative;
    height: 95%;
    width: 95%;
    background-color: #f9f9f9;
    border-radius: 80px 0px 0px 80px;
    padding-bottom: 40px;

    //#region
    .one {
      position: absolute;
      background-color: #d9dada;
      top: -1%;
      left: 68%;
    }
    .two {
      position: absolute;
      background-color: #d9dada;
      top: -1%;
      left: 70%;
    }
    .three {
      /* position: absolute;
      background-color: #d9dada;
      top: -1%;
      left: 78%; */
      display: none;
    }
    .four {
      position: absolute;
      background-color: #e9e9e9;
      top: 10%;
      left: 40%;
    }
    .five {
      position: absolute;
      background-color: #e9e9e9;
      top: 14%;
      left: 34%;
    }
    .six {
      position: absolute;
      background-color: #e9e9e9;
      top: 46%;
      left: 16%;
    }
    .seven {
      position: absolute;
      background-color: #e9e9e9;
      top: 46%;
      left: 24%;
    }
    .eight {
      position: absolute;
      background-color: #e9e9e9;
      top: 50%;
      left: 80%;
    }
    .nine {
      position: absolute;
      background-color: #e9e9e9;
      top: 50%;
      left: 88%;
    }
    .ten {
      position: absolute;
      background-color: #e9e9e9;
      top: 99%;
      left: 10%;
    }
    .eleven {
      position: absolute;
      background-color: #e9e9e9;
      top: 99%;
      left: 62%;
    }
    .twelve {
      position: absolute;
      background-color: #d9dada;
      top: 99%;
      left: 65%;
    }
    .thirteen {
      /* position: absolute;
      background-color: #d9dada;
      top: 99%;
      left: 73%; */
      display: none;
    }
    //#endregion

    .whyItWork-container {
      height: 80%;
      width: 80%;
      /* margin: auto; */
      margin-left: 200px;
      display: grid;
      grid-template-columns: auto auto;
      grid-row-gap: 40px;
      grid-column-gap: 40px;

      .whyItWork-item-one {
        display: flex;
        justify-items: center;
        position: relative;
        width: 76%;
        .whyItWork-img-one {
          top: -22px;
        }
        @media screen and (max-width: 600px) {
          .whyItWork-img-one {
            top: -5px;
          }
        }
        .header-para-one {
          .whyItWork-heading-one {
            color: #ff6666;
          }
          .whyItWork-para-one {
            color: #4f4f4f;
            font-weight: 100;
          }
          @media screen and (max-width: 600px) {
            .whyItWork-para-one {
              /* top: -5px; */
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
      .whyItWork-item-two {
        display: flex;
        justify-items: center;
        position: relative;
        width: 72%;
        margin-left: 40px;

        .whyItWork-img-two {
          top: -22px;
        }
        @media screen and (max-width: 600px) {
          .whyItWork-img-two {
            top: -5px;
          }
        }

        .header-para-two {
          width: 100%;
          .whyItWork-heading-two {
            color: #ffd900;
          }
          .whyItWork-para-two {
            color: #4f4f4f;
            font-weight: 100;
          }
          @media screen and (max-width: 600px) {
            .whyItWork-para-two {
              /* top: -5px; */
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
      .whyItWork-item-three {
        display: flex;
        /* border: solid black 1px; */
        justify-items: center;
        position: relative;
        .whyItWork-img-three {
          top: -22px;
        }
        @media screen and (max-width: 600px) {
          .whyItWork-img-three {
            top: -5px;
          }
        }

        .header-para-three {
          width: 72%;
          .whyItWork-heading-three {
            color: #7ccc33;
          }
          .whyItWork-para-three {
            color: #4f4f4f;
            font-weight: 100;
          }
          @media screen and (max-width: 600px) {
            .whyItWork-para-three {
              /* top: -5px; */
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
      .whyItWork-item-four {
        display: flex;
        /* border: solid black 1px; */
        position: relative;
        justify-items: center;
        margin-left: 40px;

        .whyItWork-img-four {
          top: -22px;
        }
        @media screen and (max-width: 600px) {
          .whyItWork-img-four {
            top: -5px;
          }
        }

        .header-para-four {
          width: 72%;
          .whyItWork-heading-four {
            color: #fd8400;
          }
          .whyItWork-para-four {
            color: #4f4f4f;
            font-weight: 100;
          }
          @media screen and (max-width: 600px) {
            .whyItWork-para-four {
              /* top: -5px; */
              color: #000;
              font-weight: 300;
            }
          }
        }
      }
    }

    .mainPara {
      position: relative;
      font-size: 24px;
      line-height: 1.47;
      letter-spacing: 0.1px;
      font-weight: 600;
      font-family: avenir, sans-serif;
      bottom: 12px;
      color: #333473;
      text-align: center;
      padding: 0px 160px;
      margin-top: 80px;
    }
    @media screen and (max-width: 1084px) {
      .main-heading {
        margin: 80px 0px 80px 12px;
      }
      .whyItWork-container {
        grid-template-columns: auto;
        margin-left: 90px;
        width: 70%;

        .whyItWork-item-two {
          margin: initial;
        }
        .whyItWork-item-four {
          margin: initial;
        }
      }
      .mainPara {
        /* text-align: initial; */
        padding: 0px;
      }
    }
  }
`;
//#endregion

//! --------------------------- WorkWeExecuteStyled -------------------------- */
//#region
const WorkWeExecuteStyled = styled.div`
  .workWeExecuteBlock {
    display: flex;
    /* flex-wrap:wrap; */
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 80px;
    .myBlock {
      position: relative;
      width: 352px;
      height: 280px;
      border-radius: 6px;
      box-shadow: 0 13px 20px 0 rgba(0, 0, 0, 0.09);
      border: solid 1px #efefef;
      padding: 0px 40px 40px 40px;
    }
  }
  @media screen and (max-width: 1140px) {
    .workWeExecuteBlock {
      flex-direction: column;
      align-items: center;
      margin: auto;
      width: initial;
      .myBlock {
        margin: 0px 0px 40px;
        width: 300px;
      }
    }
  }
  .block-one {
    margin-left: 120px;
    .block-header-one {
      margin-top: 30px;
    }
  }
  .block-two {
    margin-right: 120px;
    .block-header-two {
      margin-top: 30px;
    }
  }
  .block-three {
    margin-left: 120px;
    .block-header-three {
      margin-top: 40px;
    }
  }
  .block-four {
    margin-right: 120px;
    .block-header-four {
      margin-top: 40px;
    }
  }
`;
//#endregion

//! ---------------------------- DownloadAppStyled --------------------------- */
//#region
const DownloadAppStyled = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-evenly;
  padding: 24px 0px;

  .block-content {
    align-self: center;
    width: 70%;
    text-align: center;
    .downloadApp-heading {
      font-size: 38px;
      line-height: 46px;
      letter-spacing: 0.3px;
      font-weight: 700;
      font-family: avenir, sans-serif;
      margin-bottom: 80px;
      color: #333743;
      margin-left: 32px;
    }
    .downloadApp-para {
      font-family: avenir, sans-serif;
      color: #4a4a4a;
      font-size: 18px;
    }
  }

  .downloadApp-img-block {
    width: 50%;
    .downloadApp-img {
      width: 50%;
      margin-left: 180px;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    .block-content {
      .downloadApp-heading {
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.3px;
        font-weight: 600;
        margin-bottom: 8px;
        margin-left: 0px;
      }
      .downloadApp-para {
        font-family: avenir, sans-serif;
        color: #4a4a4a;
      }
    }
    .downloadApp-img-block {
      width: 50%;
      text-align: center;
      .downloadApp-img {
        width: 70%;
        margin: initial;
        /* text-align:center; */
      }
    }
  }
`;
//#endregion

//! ------------------------------ FooterStyled ------------------------------ */
//#region
const FooterStyled = styled.div`
  background-color: #f6f7fa;
  .footer-block {
    display: flex;
    justify-content: space-between;
    margin: 40px 120px 0px 120px;
    padding: 20px 0px 12px 0px;
    // display: flex;
    align-items: center;
    border-bottom: 1px solid #cecdcd;
    .footer-block__logo {
      height: 100px;
    }
    .footer-heading {
      font-size: 28px;
      line-height: 1.17;
      letter-spacing: 0.3px;
      font-weight: 700;
      padding: 3rem 20px 0 20px;
    }
    .footer-para {
      color: #4a4a4a;
      font-size: 16px;
      padding: 0px 20px;
      text-align: center;
      margin-top: 18px;
    }

    .contactUs-block {
      text-align: center;

      .my-icon-one {
        width: 24px;
      }
      .my-icon {
        width: 24px;
        margin-left: 14px;
      }
      .contactUs-link {
        margin-top: 18px;
        color: #4a4a4a;
        text-align: center;
        font-size: 16px;
      }
    }
  }
  div.social-link-container {
    display: flex;
    justify-content: space-between;
    margin: 8px 120px;
    p.copyright__para {
    }

    div.social-link-text-container {
      .social__link {
        margin-left: 8px;
        padding-right: 8px;
        border-right: 1px solid #cecdcd;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .footer-block {
      flex-direction: column;
      margin: 40px 0px 0px 0px;
      .footer-block__logo {
        height: 50px;
      }
      .contactUs-block {
        /* text-align: initial; */
        .my-icon-one {
          margin-left: 20px;
        }
        .contactUs-link {
          /* text-align: initial;
          margin-left: 20px; */
        }
      }
    }
    div.social-link-container {
      margin: 8px 16px;
      p.copyright__para {
        flex: 1;
      }
      div.social-link-text-container {
        display: flex;
        flex-direction: column;
        flex: 1.5;
        text-align: end;
        .social__link {
          border: none;
        }
      }
    }
  }
`;
//#endregion

export {
  FrontBlockStyled,
  StepIncludeStyled,
  WhyItWorkStyled,
  WorkWeExecuteStyled,
  DownloadAppStyled,
  FooterStyled
};
