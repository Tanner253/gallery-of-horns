import React from 'react'
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import data from "./data/data.json";
import SelectedBeast from "./SelectedBeast";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      beast: {},
      query: '',
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }
handleOpenModal = (beast) => {
  this.setState({
    showModal: true,
    beast
  })
}

getFilteredItems = (query, items) => {
  if(!query){
    return items;
  }
  return items.filter(beast => beast.title.includes(query) || beast.keyword.includes(query));
}


  render(){
    return(
      <>
        <Header />
        <SelectedBeast 
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          beast={this.state.beast}
        />
        <Main 
        data={data}
        handleOpenModal={this.handleOpenModal}
        query={this.state.query}
        getFilteredItems={this.getFilteredItems}/> 
        <Footer />
      </>
    );
  }
}

export default App;