import React from "react";
import HornedBeast from "./HornedBeast";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  
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
    } else if (selected === "one-hundred") {
      let newData = this.props.data.filter((data) => data.horns === 100);
      this.setState({ data: newData });
    } else {
      this.setState({ data: this.props.data });
    }
  };
  render() {
    
    return (
      <main>


        <SearchBar
          getFilteredItems={this.props.getFilteredItems}
          query={this.props.query}
          //i know this is wrong
          data={this.props.data}
        />

        <Dropdown 
        handleSelect={this.props.handleSelect}
        data={this.props.data}
        />
        

        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.data.map((beast, idx) => (
            <Col key={idx}>
              <HornedBeast
              beast={beast}
              handleOpenModal={this.props.handleOpenModal}
              />
            </Col>
          ))}
        </Row>


      </main>
    );
  }
}

export default Main;
