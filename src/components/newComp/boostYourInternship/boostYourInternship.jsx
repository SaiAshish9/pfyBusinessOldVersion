import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import flatImg from './flat.png';
import rocket from '../../../assets/img/boostInternship/rocket.svg'

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
        width="49rem"
        className="internship-booster"
        style={{textAlign: "center",}}
          visible={props.isShowBoost}
          // title="Boost Internship"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="header">
            <div className="text">Boost Internship</div>
            <div className="border-bottom"></div>
          </div>
            <img className="rocket-img" src={rocket} alt=""/>
            <div className="details" style={{fontWeight: 500}}>
                <p className="para-1">Not receiving enough applications?</p>
                <p className="para-2">Boost your internship today to feature your posting on the top of Pracify's mobile app and website.</p>
                {/* <hr/> */}
                <br/>
                <div className="price-cards">
                  <div onClick={() => selectPriceHandler(550)} style={{background: selectedPrice == 550 ? "#d8d6dc" : "#fff" }}  className="single-card">
                    <div>2 days Boost <br/> <span>INR 550</span> </div>
                  </div>
                  <div onClick={() => selectPriceHandler(1110)} style={{background: selectedPrice == 1110 ? "#d8d6dc" : "#fff" }} className="single-card">
                    <div>5 days Boost <br/> <span>INR 1110</span> </div>
                  </div>
                  
                </div>

            </div>
          <Button className={"boost-purchase-btn"}  onClick={handleOk}>
            BOOST NOW
          </Button> 
            
        </Modal>
      </div>
    )
}

export default BoostYourInternship;
