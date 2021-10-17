import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import * as TrelloAPI from "./api";
import NavBar from "./components/navbar";
import Boards from "./components/boards";
import CreateBoard from "./components/createBoard";
import Lists from "./components/lists";
import CreateList from "./components/createList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      lists: [],
      showModal: false,
      modalValue: "",
      boardId: "",
    };
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  onChangeInput = (event) => {
    this.setState({ modalValue: event.target.value });
  };

  createNewBoard = async () => {
    const res = await TrelloAPI.createBoard(this.state.modalValue);
    const newBoard = await res.json();
    this.setState({
      boards: [...this.state.boards, newBoard],
      showModal: !this.state.showModal,
      modalValue: "",
    });
  };

  addList = async (boardId) => {
    const res = await TrelloAPI.addNewList(this.state.modalValue, boardId);
    const newList = await res.json();
    this.setState({
      lists: [...this.state.lists, newList],
      showModal: !this.state.showModal,
      modalValue: "",
    });
  };

  // deleteList = async (listId) => {
  //   // const res = await TrelloAPI.deleteList(listId);
  //   // console.log(res);
  //   // const lists = this.state.lists.filter((l) => l.id !== listId);
  //   // this.setState({ lists });
  // };

  async fetchBoards() {
    const res = await TrelloAPI.getBoards();
    const boards = await res.json();
    this.setState({ boards });
  }

  async fetchLists(boardId) {
    const res = await TrelloAPI.getLists(boardId);
    const lists = await res.json();
    this.setState({ lists, boardId });
  }

  componentDidMount() {
    this.fetchBoards();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <main className="d-flex flex-wrap">
            <Switch>
              <Route path="/" exact>
                <Boards
                  boards={this.state.boards}
                  getLists={(boardId) => this.fetchLists(boardId)}
                />
                <CreateBoard
                  onModal={this.handleModal}
                  show={this.state.showModal}
                  value={this.state.modalValue}
                  handleChange={this.onChangeInput}
                  handleClick={this.createNewBoard}
                />
              </Route>
              <Route path="/boards/id">
                <div className="d-flex flex-nowrap">
                  <Lists
                    lists={this.state.lists}
                    // onDelete={(listId) => this.deleteList(listId)}
                  />
                  <CreateList
                    onModal={this.handleModal}
                    show={this.state.showModal}
                    value={this.state.modalValue}
                    handleChange={this.onChangeInput}
                    handleClick={this.addList}
                    boardId={this.state.boardId}
                  />
                </div>
              </Route>
            </Switch>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
