import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class Dropdown extends React.Component {
  render() {
    return (
      //Where is the data we need to change?
      //The function needs to go there, (state should be here as well)
      <Container>
        <Form style={{ width: 'max-content', margin: 'auto' }}>
          <Form.Group controlId="selected">
            <Form.Select onChange={this.props.handleSelect}>
              <option>-- -- --</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="threeplus">4+</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Dropdown;
