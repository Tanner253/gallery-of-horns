import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class Dropdown extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="selected">
            <Form.Select onChange={this.props.handleSelect}>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="one-hundred">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Dropdown;
