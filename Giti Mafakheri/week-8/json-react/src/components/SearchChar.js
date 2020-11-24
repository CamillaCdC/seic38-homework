import React, {Component} from 'react';

class SearchChar extends Component{
  constructor(){
    super();
    this.state ={
     query :''
    };
    this._handleInput=this._handleInput.bind(this);
    this._handleSubmit=this._handleSubmit.bind(this);
  }
  _handleInput(event){

    this.setState({query:event.target.value})
  }
  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }
  render(){
    return (
     <form onSubmit={this._handleSubmit}>
       <input type="search" placeholder="number" required onInput={this._handleInput} /><br/>
       <input type="text" placeholder="name" value={this.props.name}/><br/>
       <input type="submit" value="search" />
     </form>
    );
  }

};

export default SearchChar;
