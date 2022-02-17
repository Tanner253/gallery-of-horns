import React from "react";


class SearchBar extends React.Component {
  render() {
    return (
    <div>
      <label>Search</label>
      <input type="text" onInput={e => this.props.getFilteredItems(e.target.value, this.props.data ) } />
    </div>
    );
  }
}


export default SearchBar;
