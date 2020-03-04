import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Modal } from 'antd';
import flyerImg from './img/flyer.png';
import banner from './img/banner.png';
import coupon from './img/coupon.png';
import sellTicket from './img/sellTicket.png';
import billboard from './img/billboard.png';
import {card as Card, } from './card';
import SuccessCheck from '../success_check/successCheck';


const Marketing = (props) => {

    const [flyer, setFlyer] = useState(false)
    const [coupons, setCoupons] = useState(false)
    const [standeesAndBanners, setstandeesAndBanners] = useState(false)
    const [brandedBooth, setBrandedBooth] = useState(false)
    const [visible, setVisible] = useState(false)
    // const state = { visible: false }

    const showModal = () => {
        setVisible(true)
      };
    
     const handleOk = e => {
        console.log(e);
        setVisible(false)
      };
    
     const handleCancel = e => {
        console.log(e);
        setVisible(false)
      };

    const data = {
        coupons: coupons,
        standeesAndBanners: standeesAndBanners,
        brandedBooth: brandedBooth,
        flyer: flyer
    }

    const submitHandler = () => {
        // if(coupons || flyer || standeesAndBanners || brandedBooth ){
        //     axios.post('http://10.5.50.80:5000/campus_marketing/add_request/', data)            
        //     .then(res => console.log(res))
        //     .catch(error => console.log(error))
        // }
        //  after success
        setVisible(true);
    }
    

    const cardHandler = (e) => {
        const val = e.target.value;
        if(val === "flyer")
            setFlyer(!flyer)
        else if(val === "coupons")
            setCoupons(!coupons)
        else if(val === "standees")
            setstandeesAndBanners(!standeesAndBanners)
        else if(val === "brandedBooth")
            setBrandedBooth(!brandedBooth)
        // console.table({"flyer": flyer, "coupons": coupons, "standees": standees, "brandedbooth": brandedBooth});
    }

    return (
        <div style={{margin: "5rem 0", textAlign: "center"}}>
            <Modal
            style={{textAlign: "center"}}
            title="Modal"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
            >
                <SuccessCheck/>
                <p>Submitted our team will contact you soon.</p>
            </Modal>
            
            <section style={{textAlign: "center"}}>
                <h1 className="heading1" >Select Primary Profile</h1>
                <p className="subHeading">Enter primary Profile</p>
            </section>
            
            <div className="cardItems" style={{margin: "2.5rem"}}>
            <Card cardHandler={cardHandler} value="flyer" heading={"Flyer"} image={flyerImg} price={1500} />
            <Card cardHandler={cardHandler} value="coupons" heading={"Coupons"} image={coupon} price={1500} />
            <Card cardHandler={cardHandler} value="standees" heading={"Standees and Banners"} image1={billboard} image2={banner} price={1500} />
            <Card cardHandler={cardHandler} value="brandedBooth" heading={"Branded Booth & Kiosk"} image={sellTicket} price={1500} />
            </div>

            <Button onClick={submitHandler} style={{backgroundColor: "#ec3f78", color: "#fff", textAlign: "center"}} type="primary">Enquire</Button>
            
        </div>
        
    )
}

export default Marketing;
