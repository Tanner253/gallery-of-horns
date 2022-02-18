import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data/data.json";
import SelectedBeast from "./SelectedBeast";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
      query: '',
      data,
    };
  }
  iDontUnderstandReact = () => {
    this.setState({
      understandsReact: false
    })
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      beast,
    });
  };

  getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    let filteredItems = items.filter(
      (beast) => beast.title.includes(query) || beast.keyword.includes(query)
    );
    this.setState({ data: filteredItems });
  };

  handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === "one") {
      let newData = data.filter((data) => data.horns === 1);
      this.setState({ data: newData });
    } else if (selected === "two") {
      let newData = data.filter((data) => data.horns === 2);
      this.setState({ data: newData });
    } else if (selected === "three") {
      let newData = data.filter((data) => data.horns === 3);
      this.setState({ data: newData });
    }else if (selected === "threeplus") {
      let newData = data.filter((data) => data.horns > 3);
      this.setState({ data: newData });
    } else {
      this.setState({ data: data });
    }
  };

  render() {
    return (
      <>
        <Header />
        <SelectedBeast
          showModal={this.state.showModal}
          beast={this.state.beast}
          handleCloseModal={this.handleCloseModal}
        />
        <Main
          data={this.state.data}
          query={this.state.query}
          handleOpenModal={this.handleOpenModal}
          getFilteredItems={this.getFilteredItems}
          handleSelect={this.handleSelect}
        />
        <Footer />
      </>
    );
  }
}

export default App;
