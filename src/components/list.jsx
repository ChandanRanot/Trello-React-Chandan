import React from "react";
import * as TrelloAPI from "../api";
import Cards from "./cards";
import { Component } from "react";
import CreateCard from "./createCard";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addNewCard = async (listID, name) => {
    const res = await TrelloAPI.addCard(listID, name);
    const newCard = await res.json();
    this.setState({ cards: [...this.state.cards, newCard] });
  };

  fetchCards = async (listId) => {
    const res = await TrelloAPI.getCards(listId);
    const cards = await res.json();
    this.setState({ cards });
  };
  componentDidMount() {
    this.fetchCards(this.props.list.id);
  }

  deleteCard = async (cardId) => {
    await TrelloAPI.removeCard(cardId);
    const cards = this.state.cards.filter((c) => c.id !== cardId);
    this.setState({ cards });
  };

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
        <Cards
          cards={this.state.cards}
          onDelete={(cardId) => this.deleteCard(cardId)}
        />
        <CreateCard
          listId={this.props.list.id}
          addNewCard={(listId, name) => this.addNewCard(listId, name)}
        />
      </div>
    );
  }
}

export default List;
