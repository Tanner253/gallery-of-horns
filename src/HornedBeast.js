import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageURL} alt = "monster" className = "beast-image" title = {this.props.title}/>
            <p>{this.props.description}</p>
            </>
        );
    }
}
export default HornedBeast; 

