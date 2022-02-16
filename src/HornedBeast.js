import React from "react";
import "./HornedBeast.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class HornedBeast extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    favorites: 0,
    };
}
handleFavorites = () => {
    this.setState({
    favorites: this.state.favorites + 1,
    });
};
render() {
    return (
    <article>
        
            <Card style={{ width: '18rem' }}>
                <Card.Img
                onClick={this.handleFavorites}
                variant="top"
                src={this.props.image_url}
                alt={this.props.description}
                />
                <Card.Body>
                    <Card.Title>{this.props.Title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>💖: {this.state.favorites}</Card.Text>
                </Card.Body>
            </Card>
        
    </article>
    );
}

}
export default HornedBeast;
