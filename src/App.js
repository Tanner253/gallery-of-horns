import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";
import data from "./data/data.json";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Main
          data={data}
        />

        <Footer />
      </>
    );

    //We want to change state of parent
    //state must live in parent component
    //we must pass a function from where state lives, to the child component 
    //through props
    //calling this function from the child component, changes state in the parent component
    
  }
}

export default App;
