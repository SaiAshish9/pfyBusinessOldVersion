import { Modal, Select } from "antd";
import React, { useState, useEffect } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const { Option } = Select;
export default function NewCreateInternship(props) {
  const [page1Complete, setPage1Complete] = useState(false);
  const [page1data, setpage1data] = useState(null);

  const [page2Complete, setPage2Complete] = useState(false);
  const [page2data, setpage2data] = useState(null);

  const [page3Complete, setPage3Complete] = useState(false);
  const [page3data, setpage3data] = useState(null);

  const [visible, setVisible] = useState(null);

  const page1datafun = (values) => {
    setpage1data(values);
    console.log("page1 data is set ", values);
  };

  const page2datafun = (values) => {
    setpage2data(values);
    console.log("page2 data is set ", values);
  };
  const page3datafun = (values) => {
    setpage3data(values);
    console.log("page3 data is set ", values);
  };

  const isPage1Com = () => {
    setPage1Complete(true);
  };
  const isPage2Com = () => {
    setPage2Complete(true);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    props.close();
  };

  const handleCancel = () => {
    setVisible(false);
    props.close();
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const submitHandler = () => {
    // console.log('FINAL SUBMISSION');
    // const data = {...page1data, ...page2data, ...page3data}
    // console.log(data)
  }

  useEffect(() => {
    if(page3data){
    console.log('FINAL SUBMISSION');
    let benifitsArr = []
    let locationArr = []
    const data = {...page1data, ...page2data, ...page3data}

    if(data.isCertificate) benifitsArr.push('Certificate')
    if(data.isPPO) benifitsArr.push('PPO')
    data.benifits = benifitsArr

    if(data.location) locationArr.push('all-india') 
    else locationArr = data.cities
    data.location = locationArr

    data.applyBefore = data.applyBefore.format("DD MMM YYYY")
    data.startingOfInternship = data.startingOfInternship.format("DD MMM YYYY")

    console.log('FINAL DATA ', data) 
    }
  }, [page3data]);

  return (
    <div>
      <Modal
        style={{ top: 20 }}
        width={1038}
        className="create-internship-form"
        visible={props.isShow}
        title="Create Internship"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="page-1">
          {page1Complete && page2Complete ? (
            <Page3
              initVal3={page3data}
              data3={(values) => page3datafun(values)}
              back={() => setPage2Complete(false)}
              submitHandler={submitHandler}
            />
          ) : page1Complete ? (
            <Page2
              initVal2={page2data}
              data2={(values) => page2datafun(values)}
              isSuccess2={isPage2Com}
              back={() => setPage1Complete(false)}
            />
          ) : (
            <Page1
              initVal1={page1data}
              data1={(values) => page1datafun(values)}
              isSuccess1={isPage1Com}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}
