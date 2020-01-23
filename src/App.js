import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import ListItems from "./ListItems.js";

class App extends React.Component {
  state = {
    items: [
      { id: 1, content: "woda", active: true },
      { id: 2, content: "woda letnia", active: false },
      { id: 3, content: "chleb", active: true },
      { id: 4, content: "krupnik", active: false },
      { id: 5, content: "woda zimna", active: true }
    ]
  };
  handleChangeStatus = id => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items // short version items: items
    });
  };
  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </>
    );
  }
}

export default App;
