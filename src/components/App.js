import React from "react";
import Chart from "chart.js";
import SearchDropDown from "./SearchDropDown";
import ItemList from "./ItemList";
import runescape from "../api/runescape";
import { Container } from "reactstrap";

var ctx = document.getElementById("myChart").getContext("2d");
var chart;

class App extends React.Component {
  state = {
    items: [],
    graphLabel: [],
    graphData: []
  };

  onSubmit = (category, letter) => {
    runescape
      .get("catalogue/items.json", {
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

  selected = id => {
    runescape.get(`graph/${id}.json`).then(data => {
      var labels = Object.keys(data.data.average);
      var formatted = labels.map(item => {
        var d = new Date(parseInt(item));
        var date = d.getDate();
        var month = d.getMonth(); //Be careful! January is 0 not 1
        var year = d.getFullYear();

        return month + 1 + "-" + date + "-" + year;
      });
      this.setState({
        graphLabel: formatted,
        graphData: Object.values(data.data.average)
      });

      if (chart) {
        chart.destroy();
      }
      chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: this.state.graphLabel,
          datasets: [
            {
              label: "Average Price",
              borderColor: "rgb(255, 99, 132)",
              data: this.state.graphData
            }
          ]
        },

        // Configuration options go here
        options: {}
      });
    });
  };

  render() {
    return (
      <div>
        <Container>
          <SearchDropDown onSubmit={this.onSubmit} />
          {this.state.items.length > 0 ? (
            <ItemList clicked={this.selected} items={this.state.items} />
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}

export default App;
