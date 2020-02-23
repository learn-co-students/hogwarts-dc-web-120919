import React, { Component } from "react"
import "../App.css"
import Nav from "./Nav"
import HogContainer from "./HogContainer"
import hogs from "../porkers_data"


class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }

  handleGreaseClick = () => {
    console.log("I'm a greasy piggy")
    console.log(this.state.hogs)
    if (this.state.hogs === hogs){
    let greasedPigs = this.state.hogs.filter(hog => hog.greased === true)
      console.log(greasedPigs)
      this.setState({
        hogs: greasedPigs
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }
  }

  handleSortClick = (value) => {
    if (value === "name") {
      let sortedName = this.state.hogs.sort((hog1, hog2) => hog1[value] > hog2[value] ? 1 : -1)
      this.setState({
        hogs: sortedName
      })
    } else if (value === "weight") {
      let sortedWeight = this.state.hogs.sort((hog1, hog2) => hog1[value] - hog2[value])
      this.setState({
        hogs: sortedWeight
      })
    }
    // console.log()
  }

  render() {
    return (
      <div className="App">
        <Nav greaseClick={this.handleGreaseClick} sortClick={this.handleSortClick}/>
        <HogContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;