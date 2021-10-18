import React, { Component } from "react";

import CheckItems from "./checkItems";
import * as TrelloAPI from "../api";

class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      value: "",
      checkItems: this.props.checklist.checkItems,
    };
  }

  addCheckItem = async (checkListId, name) => {
    const res = await TrelloAPI.addItem(checkListId, name);
    const newItem = await res.json();
    this.setState({ checkItems: [...this.state.checkItems, newItem] });
  };

  deleteCheckItem = async (checkItemId, checkListID) => {
    await TrelloAPI.deleteItem(checkItemId, checkListID);
    const checkItems = this.state.checkItems.filter(
      (ci) => ci.id !== checkItemId
    );
    this.setState({ checkItems });
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
    this.addCheckItem(this.props.checklist.id, this.state.value);
    this.setState({ showForm: !this.state.showForm, value: "" });
  };

  render() {
    const { checklist, handleDelete } = this.props;
    return (
      <div>
        <p className="d-flex justify-content-between">
          {checklist.name}
          <button
            onClick={() => handleDelete(checklist.id)}
            className="btn btn-light btn-sm"
          >
            Delete
          </button>
        </p>
        <CheckItems
          checkItems={this.state.checkItems}
          checkListId={checklist.id}
          onDelete={(checkItemId, checkListID) =>
            this.deleteCheckItem(checkItemId, checkListID)
          }
        />
        <div>
          {this.state.showForm ? (
            this.showForm()
          ) : (
            <button
              className="btn btn-light btn-sm"
              onClick={() => this.setState({ showForm: !this.state.showForm })}
            >
              Add a Item
            </button>
          )}
        </div>
        <br />
      </div>
    );
  }
}

export default CheckItem;
