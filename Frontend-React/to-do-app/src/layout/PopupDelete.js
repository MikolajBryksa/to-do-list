import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Icon from 'react-bootstrap-icons';
import axios from "axios";
import Table from './Table';

function PopupDelete(props) {
  const [show, setShow] = useState(props.show);

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/tasks/${id}`)
    props.toggleShow();
    props.loadTasks();

  }

  return (
    <>
      <button className="btn btn-danger me-1" onClick={props.toggleShow}><Icon.XLg /></button>

      <Modal
        show={props.show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Delete this task?</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p style={{ color: 'red' }}>{props.task.title}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={props.toggleShow}>
            <Icon.XLg />
          </Button>
          <Button className="btn btn-primary" onClick={() => deleteTask(props.task.id)}><Icon.CheckLg /></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default PopupDelete;