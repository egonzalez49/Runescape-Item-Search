import React from "react";
import SearchDropDown from "./SearchDropDown";
import ItemList from "./ItemList";
import runescape from "../api/runescape";
import { Container } from "reactstrap";

class App extends React.Component {
  state = {
    items: []
  };

  onSubmit = (category, letter) => {
    runescape
      .get("items.json", {
        params: {
          category,
          alpha: letter,
          page: 1
        }
      })
      .then(res => {
        this.setState({
          items: res.data.items
        });
      });
  };

  render() {
    return (
      <div>
        <Container>
          <SearchDropDown onSubmit={this.onSubmit} />
          {this.state.items.length > 0 ? (
            <ItemList items={this.state.items} />
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}

export default App;
