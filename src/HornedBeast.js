import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <h3>{this.props.title}</h3>
            <img src={this.props.imageURL} alt = "monster" />
            <h3>{this.props.description}</h3>
            </>
        );
    }
}
export default HornedBeast; 

