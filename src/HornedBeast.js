import React from "react";
import "./HornedBeast.css";
import Card from "react-bootstrap/Card";


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
handleUserClick = () => {
    this.handleFavorites();
    this.props.handleOpenModal(this.props.beast);
}
render() {
    return (
    <article className="text-center">
        
            <Card style={{ width: '18rem' }}>
                <Card.Img
                onClick={this.handleUserClick}
                variant="top"
                src={this.props.beast.image_url}
                alt={this.props.beast.description}
                />
                <Card.Body>
                    <Card.Title>{this.props.beast.Title}</Card.Title>
                    <Card.Text>{this.props.beast.description}</Card.Text>
                    <Card.Text>💖: {this.state.favorites}</Card.Text>
                </Card.Body>
            </Card>
        
    </article>
    );
}

}
export default HornedBeast;
