import React, { Component } from 'react';
import PigContainer from  './PigContainer'
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Controls from './Controls'

class App extends Component {
  constructor(){
    super()
    this.state={hogs: hogs}
    }
  handleGreasedChange =()=>{
 if(this.state.hogs === hogs){
   let newHogs = hogs.filter(hog =>hog.greased)
   this.setState({hogs: newHogs})
 }else{
    this.setState({hogs: hogs})
  }
   }
 
  render() {
    return (
      <div className="App">
          < Nav />
          <Controls handleGreasedChange= {this.handleGreasedChange}/>
          <PigContainer hogs ={this.state.hogs} />

      </div>
    )
  }
}


export default App;
