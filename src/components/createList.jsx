import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";

const CreateList = ({
  onModal,
  show,
  value,
  handleChange,
  handleClick,
  boardId,
}) => {
  return (
    <div>
      <button onClick={onModal} className="btn btn-light btn-small m-2">
        + Add Another List
      </button>
      <Modal animation={false} show={show} onHide={onModal}>
        <ModalBody>
          <input
            type="text"
            placeholder="Enter List Title"
            value={value}
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => handleClick(boardId)}
            className="btn btn-primary btn-sm"
          >
            Add List
          </Button>
          <Button onClick={onModal} className="btn btn-light btn-sm">
            X
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateList;
