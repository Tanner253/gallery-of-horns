import React from "react";
import Container from "react-bootstrap/Container"
class SearchBar extends React.Component {
  render() {
    return (
      //add on submit and form
      <Container className="text-center">
        <div>
          <label>Search</label>
          <input
            type="text"
            onInput={(e) =>
              this.props.getFilteredItems(e.target.value, this.props.data)
            }
          />
        </div>
      </Container>
    );
  }
}

export default SearchBar;
