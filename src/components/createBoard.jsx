import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const CreateBoard = ({ onModal, show, value, handleChange, handleClick }) => {
  return (
    <div>
      <button onClick={onModal} className="createBB m-2">
        Create new Board
      </button>
      <Modal animation={false} show={show} onHide={onModal}>
        <ModalHeader closeButton>Add Name</ModalHeader>
        <ModalBody>
          <input type="text" value={value} onChange={handleChange} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClick}>Add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateBoard;
