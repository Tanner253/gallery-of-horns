import React from "react";
import HornedBeast from "./HornedBeast";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SelectedBeast from"./SelectedBeast"

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      showModal: false,
      beast: {},
      query: '',
    }
  }

handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === "one") {
      let newData = this.props.data.filter((data) => data.horns === 1);
      this.setState({ data: newData });
    } else if (selected === "two") {
      let newData = this.props.data.filter((data) => data.horns === 2);
      this.setState({ data: newData });
    } else if (selected === "three") {
      let newData = this.props.data.filter((data) => data.horns === 3);
      this.setState({ data: newData });
    }else if (selected === "threeplus") {
      let newData = this.props.data.filter((data) => data.horns > 3);
      this.setState({ data: newData });
    } else {
      this.setState({ data: this.props.data });
    }
};

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

  render() {
    console.log(this.state);
    return (
      <main>
        <SearchBar
          getFilteredItems={this.getFilteredItems}
          query={this.state.query}
          data={this.state.data}
        />

        <SelectedBeast
          showModal={this.state.showModal}
          beast={this.state.beast}
          handleCloseModal={this.handleCloseModal}
        />

        <Dropdown
          handleSelect={this.handleSelect}
          data={this.state.data}
        />

        <Container >
          <Row xs={1} sm={2} md={3} lg={3}>
            {this.state.data.map((beast, idx) => (
              <Col key={idx}>
                <HornedBeast
                  beast={beast}
                  handleOpenModal={this.handleOpenModal}
                />
              </Col>
            ))}
          </Row>
        </Container>

      </main>
    );
  }
}

export default Main;
