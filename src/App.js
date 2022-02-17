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
      beast: {}
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
        handleOpenModal={this.handleOpenModal}/> 
        <Footer />
      </>
    );
  }
}

export default App;