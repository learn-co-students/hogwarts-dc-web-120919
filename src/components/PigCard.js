import React from "react"
import CardFront from './CardFront'
import CardBack from './CardBack'
class PigCard extends React.Component {
    constructor(){
        super()
        this.state={front:true}
    }
    snakeCaseName =()=>{
       return this.props.hog.name.toLowerCase().replace(/ /g,"_")
        
    }
    flipCard =()=>{
        let front =this.state.front
        this.setState({front: !front})
    }
    render(){
       return(
         this.state.front ?
        <CardFront hog ={this.props.hog} imgName ={this.snakeCaseName()} flipCard={this.flipCard}/> :
        <CardBack hog ={this.props.hog} imgName ={this.snakeCaseName()} flipCard={this.flipCard}/>
        
        )}
}
export default PigCard