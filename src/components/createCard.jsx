import React, { Component } from "react";

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false, value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ showForm: !this.state.showForm });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewCard(this.props.listId, this.state.value);
    this.setState({ showForm: !this.state.showForm, value: "" });
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
  render() {
    return (
      <div>
        {this.state.showForm ? (
          this.showForm()
        ) : (
          <button
            className="btn btn-light btn-small m-2"
            onClick={() => this.setState({ showForm: !this.state.showForm })}
          >
            + Add a Card
          </button>
        )}
      </div>
    );
  }
}

export default CreateCard;
