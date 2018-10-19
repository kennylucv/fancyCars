import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CarCard from "./components/CarCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { connect, Provider } from "react-redux";
import configStore from "./config/store";
import { actions as dropdownActions } from "./actions/dropdown";
import { actions as serviceActions } from "./actions/services";

class App extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  _onSelect = selectedValue => {
    this.props.selectSort(selectedValue.value);
  };

  render() {
    console.log(this.props);
    let cars = this.props.carsData;

    const options = ["Availability", "Alphabetically"];

    if (this.props.sortOption === "Alphabetically") {
      cars.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else if (this.props.sortOption === "Availability") {
      cars.sort((a, b) => {
        if (a.available < b.available) return -1;
        if (a.available > b.available) return 1;
        return 0;
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to fancy cars!</h1>
          <Dropdown
            className="App-dropdown"
            options={options}
            onChange={this._onSelect}
            value={this.props.sortOption}
            placeholder="Select an option"
          />
          {cars.map(carObject => {
            return <CarCard data={carObject} />;
          })}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const AppWithRedux = connect(
  mapStateToProps,
  { ...serviceActions, ...dropdownActions }
)(App);

export default () => {
  const { store } = configStore();

  return (
    <Provider store={store}>
      <AppWithRedux />
    </Provider>
  );
};
