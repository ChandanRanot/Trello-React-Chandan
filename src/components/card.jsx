import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

import * as TrelloAPI from "../api";
import CheckLists from "./checkLists";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLists: [],
      show: false,
      showForm: false,
      value: "",
    };
  }

  showCheckLists = async (cardId) => {
    const res = await TrelloAPI.getCheckLists(cardId);
    const checkLists = await res.json();
    this.setState({ show: !this.state.show, checkLists });
  };

  handleModal = () => {
    this.setState({ show: !this.state.show });
  };

  addCheckList = async (cardId, name) => {
    const res = await TrelloAPI.addNewCheckList(cardId, name);
    const newCheckList = await res.json();
    this.setState({ checkLists: [...this.state.checkLists, newCheckList] });
  };

  deleteCheckList = async (checkListId) => {
    await TrelloAPI.removeCheckList(checkListId);
    const checkLists = this.state.checkLists.filter(
      (cl) => cl.id !== checkListId
    );
    this.setState({ checkLists });
  };

  showForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter Name"
            className="form-control"
          />
        </div>
        <input type="submit" value="Add" className="btn btn-primary btn-sm" />
        <button onClick={this.handleClose} className="btn btn-light btn-sm">
          X
        </button>
      </form>
    );
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ showForm: !this.state.showForm });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addCheckList(this.props.card.id, this.state.value);
    this.setState({ showForm: !this.state.showForm, value: "" });
  };

  render() {
    const { card, handleDelete } = this.props;
    return (
      <>
        <div
          onClick={() => this.showCheckLists(card.id)}
          className="btn btn-light btn-sm d-flex justify-content-between"
        >
          {card.name}
          <button
            onClick={() => handleDelete(card.id)}
            className="btn btn-light btn sm"
          >
            X
          </button>
        </div>
        <Modal
          animation={false}
          show={this.state.show}
          onHide={this.handleModal}
        >
          <ModalHeader className="d-flex justify-content-between">
            {card.name}
            <div>
              {this.state.showForm ? (
                this.showForm()
              ) : (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    this.setState({ showForm: !this.state.showForm })
                  }
                >
                  Add New CheckList
                </button>
              )}
            </div>
          </ModalHeader>
          <ModalBody>
            <CheckLists
              checkLists={this.state.checkLists}
              onDelete={(checkListId) => this.deleteCheckList(checkListId)}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Card;
