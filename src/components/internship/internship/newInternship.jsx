import React, { useState, useReducer, Fragment } from "react";
import { Modal, Button } from "antd";
import CreateInternship from "./createInternship";
import modalSvg from "../../../assets/img/modalSvg.svg";
import NewCreateInternship from '../internshipForm/newCreateInternship';

export const ModalVisibleContext = React.createContext();

function modalVisibleReducer(state, action) {
  
  switch (action.type) {
    case "modalVisible": {
      return true;
    }
    case "cancelModalVisible": {
      return false;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function NewInternship() {
  const [modalVisible, dispatchModalVisible] = useReducer(
    modalVisibleReducer,
    false
  );

  const [isShow, setIsShow] = useState(false)
  const handleCreateInternship = () => {
    setIsShow(true)
    console.log('open create internship modal')

  };

  const close = () => {
    setIsShow(false)
  }

  return (
    <Fragment>
      <NewCreateInternship isShow={isShow} close={close} />
    <div className="newInternship-main-block">
      <div className="newInternship-block-one">
        <div className="img-block-one"></div>
        <h1 className="block-one__header">
          Some Dummy Text For The Representation !
        </h1>
        <p className="block-one__para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been industry's standard dummy text ever
          since the
        </p>
        <Button
          onClick={handleCreateInternship}
          //   modalVisible={modalVisible}
          //   setModalVisible={setModalVisible}
          className="block-one__button"
        >
          Create New Internship
        </Button>
      </div>
      <div className="newInternship-block-two">
        <Button
          onClick={handleCreateInternship}
          //   modalVisible={modalVisible}
          //   setModalVisible={setModalVisible}
          className="block-two__button"
        >
          Create New Internship
        </Button>
        <h1 className="block-two__header">
          Some Dummy Text For The Representation !
        </h1>
        <p className="block-two__para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been industry's standard dummy text ever
          since the
        </p>
        <div className="img-block-two"></div>
      </div>
      <ModalVisibleContext.Provider
        value={{ modalVisible, dispatchModalVisible }}
      >
        <CreateInternship />
      </ModalVisibleContext.Provider>
    </div>
    </Fragment>
  );
}
