import React from "react";
import HornedBeast from "./HornedBeast";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



/* Completed stretch goal after the code review */
class Main extends React.Component {

  render() {
    return (
      <main>

        <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.data.map((beast, idx) => (
            <Col key={idx}> 
              <HornedBeast
                beast={beast}
                handleOpenModal={this.props.handleOpenModal}
              />
            </Col>
            )
            )}
          </Row>
      </main>
        );
    }
  }


export default Main;
