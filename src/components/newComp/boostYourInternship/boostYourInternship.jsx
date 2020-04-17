import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import flatImg from './flat.png';

let i=1;
const  BoostYourInternship = (props) => {
  console.log("rener " + i++)

    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [selectedPrice, setSelectedPrice] = useState(null)
    
      const showModal = () => {
        setVisible(true);
      };
    
    
      const handleOk = () => {
          setLoading(true);
          // call api, after success
          setLoading(false);
          setVisible(false)
          props.isCloseBoost();

          // call api
          console.log(selectedPrice)
      };
    
      const handleCancel = () => {
        // this.setState({ visible: false });
        setVisible(false)
        props.isCloseBoost();
      };

      const selectPriceHandler =  (price) => {
          setSelectedPrice(price)
      }

    return (
        <div >
        {/* <Button type="primary" onClick={showModal}>
          Open Modal with customized footer
        </Button> */}
        <Modal
        width="42rem"
        className="internship-booster"
        style={{textAlign: "center",}}
          visible={props.isShowBoost}
          title="Boost Your Internship Posting!"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button className={"boost-purchase-btn"}  key="submit" type="primary" loading={loading} onClick={handleOk}>
            Purchase
          </Button>            
          ]}
        >
            <img src={flatImg} alt="flat img"/>
            <div style={{fontWeight: 500}}>
                <p style={{fontSize: "1.2rem"}}>Want to reach more students?</p>
                <p>Feature your internship on project X to get 5X <br/> more visibility and applicants </p>
                {/* <hr/> */}
                <br/>
                <div className="price-cards">
                  <div onClick={() => selectPriceHandler(550)} style={{background: selectedPrice == 550 ? "#d8d6dc" : "none" }}  className="single-card">
                    <div>2 days Boost <br/> <span>INR 550</span> </div>
                  </div>
                  <div onClick={() => selectPriceHandler(1110)} style={{background: selectedPrice == 1110 ? "#d8d6dc" : "none" }} className="single-card">
                    <div>5 days Boost <br/> <span>INR 1110</span> </div>
                  </div>
                  
                </div>

            </div>
            
        </Modal>
      </div>
    )
}

export default BoostYourInternship;
