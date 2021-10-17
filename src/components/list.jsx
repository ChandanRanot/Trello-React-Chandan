import React from "react";
import * as TrelloAPI from "../api";
import Cards from "./cards";
import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  fetchCards = async (listId) => {
    const res = await TrelloAPI.getCards(listId);
    const cards = await res.json();
    this.setState({ cards });
  };
  componentDidMount() {
    this.fetchCards(this.props.list.id);
  }

  render() {
    return (
      <div className="card m-2 " style={{ height: "fit-content" }}>
        <div className="card-header d-flex justify-content-between">
          {this.props.list.name}
          {/* <button
            onClick={() => handleDelete(list.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button> */}
        </div>
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default List;
