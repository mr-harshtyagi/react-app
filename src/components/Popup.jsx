import React ,{useState} from "react";
import { Modal ,Button} from "react-bootstrap";

export default function Popup(props) {
  const [show,setShow] =useState(false);
  return (
    <>
      <Modal >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}