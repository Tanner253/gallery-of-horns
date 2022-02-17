import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{width: '100%'}}
            src={this.props.beast.image_url}
            alt={this.props.beast.description}
          ></img>
          <ul>
            <li>
              {this.props.beast.title}
            </li>
            <li>
              {this.props.beast.description}
            </li>
            <li>
              Keyword: {this.props.beast.keyword}
            </li>
            <li>
              {this.props.beast.horns}
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
