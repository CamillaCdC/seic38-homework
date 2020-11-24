import React, {Component} from 'react';
import SearchChar from './SearchChar';
import Picture from './Picture';
import axios from 'axios';
class FinalSpace extends Component{
  constructor(){
    super();
    this.state ={
       url :'',
       name : ''
    };
    this.fetchImage=this.fetchImage.bind(this);
  }
  fetchImage(picNum){
    console.log(picNum);
    axios('https://finalspaceapi.com/api/v0/character/'+picNum).then((result=>{
      let url = result.data.img_url;
       let name = result.data.name;
       debugger;
    this.setState({url:url , name:name});


  }));
  }
  render(){
    return (
      <div>
     <SearchChar onSubmit={this.fetchImage} name={this.state.name}/>
     <Picture url={this.state.url}/>
     </div>
    );
  }

};

export default FinalSpace;
