import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Modal } from 'antd';
import flyerImg from '../../../assets/img/campusMarketing/flyer.svg';
// import banner from '../../../assets/img/campusMarketing/banner.svg';
import coupon from '../../../assets/img/campusMarketing/voucher.svg';
import sellTicket from '../../../assets/img/campusMarketing/brandedBooth.svg';
import banner from '../../../assets/img/campusMarketing/banner.svg';
import {card as Card, } from './card';
import SuccessCheck from '../../independentComponent/success_check/successCheck';
import showOffImg from '../../../assets/img/gig/showOffImg.svg';


const CampusMarketing = (props) => {

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

    

    const submitHandler = () => {
        const data = {
            coupons: coupons,
            standeesAndBanners: standeesAndBanners,
            brandedBooth: brandedBooth,
            flyer: flyer
        }
        console.table(data)
        if(coupons || flyer || standeesAndBanners || brandedBooth ){
            const url = 'campus_marketing/add_request'
            axios.post(url, data)            
            .then(res => {
                console.log(res.data)
                setVisible(true);
            })
            .catch(error => console.log(error))
        }
        
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
        // console.table({"flyer": flyer, "coupons": coupons, "standees": standeesAndBanners, "brandedbooth": brandedBooth});
    }

    return (
        <div className="campus-marketing" >
            <h1 className="heading">Campus Marketing</h1>
            <div className="showOff-block">
                <img src={showOffImg} alt="" className="showOff__img" />
                <h1 className="showOff__h1">
                Some Dummy Text For The Representation !
                </h1>
                <p className="showOff__p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when.
                </p>
            </div>
            
            <div className="marketing-cardItems" style={{margin: "0.5rem"}}>
                
            <Card cardHandler={cardHandler} value="flyer" heading={"Flyer"} image={flyerImg} price={1500} />
            <Card cardHandler={cardHandler} value="coupons" heading={"Coupons"} image={coupon} price={1500} />
            <Card cardHandler={cardHandler} value="standees" heading={"Standees and Banners"}  image={banner} price={1500} />
            <Card cardHandler={cardHandler} value="brandedBooth" heading={"Branded Booth & Kiosk"} image={sellTicket} price={1500} />
            </div>

            <Button onClick={submitHandler} className="enquire-button" style={{backgroundColor: "#ec3f78", color: "#fff", textAlign: "center"}} type="primary">Enquire</Button>
            <Modal
                style={{textAlign: "center"}}
                // title="Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                >
                    <SuccessCheck/>
                    <p>Submitted our team will contact you soon.</p>
            </Modal>
        </div>
        
    )
}

export default CampusMarketing;
