import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Icon from 'react-bootstrap-icons';
import axios from "axios";
import Table from './Table';

function PopupEmail(props) {
  const [show, setShow] = useState(props.show);

  const sendEmail = async () => {
    await axios.get(`http://localhost:8080/send-mail`);
    console.log("Email sent")
    props.toggleShow();

}

  return (
    <>
      <button className='nav-item btn btn-primary me-1' onClick={props.toggleShow}>Send Email</button>

      <Modal
        show={props.show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Do you want an email with tasks?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={props.toggleShow}>
            <Icon.XLg />
          </Button>
          <Button className="btn btn-primary" onClick={() => sendEmail()}><Icon.CheckLg /></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default PopupEmail;