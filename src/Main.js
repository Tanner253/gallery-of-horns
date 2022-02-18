import React from "react";
import HornedBeast from "./HornedBeast";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Main extends React.Component {
  render() {
    return (
      <main>
        <SearchBar
          getFilteredItems={this.props.getFilteredItems}
          query={this.props.query}
          data={this.props.data}
        />

        <Dropdown
          handleSelect={this.props.handleSelect}
          data={this.props.data}
        />

        <Container >

          <Row xs={1} sm={2} md={3} lg={3}>
            {this.props.data.map((beast, idx) => (
              <Col key={idx}>
                <HornedBeast
                  beast={beast}
                  handleOpenModal={this.props.handleOpenModal}
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
