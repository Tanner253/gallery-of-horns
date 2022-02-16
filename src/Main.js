import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data/data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


/* Completed stretch goal after the code review */
class Main extends React.Component {
  render() {
    return (
      <main>

        <Row xs={1} md={2} lg={3}>
            {data.map((value, idx) => (
            <Col key={idx}>
            <HornedBeast
              
              title={value.title}
              description={value.description}
              image_url={value.image_url}
              keyword={value.keyword}
              horns={value.horns}
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
