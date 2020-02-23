import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

class HogCardIndex extends React.Component {

    constructor(){
        super()
        this.state = {
            toggled: true
        }
    }

    handleClick = () => {
        // let toggle = this.state.toggled
        this.setState({
            toggled: !this.state.toggled 
        })
    }

    imageName = () => {
        // console.log("imageeeeeee")
        return this.props.hogInfo.name.toLowerCase().replace(/ /g,"_").concat(".jpg")
    }

    render(){

        return (
            <div className="ui card">
                { this.state.toggled ?
                <CardFront imageNameSerialized={this.imageName} hogInfo={this.props.hogInfo} click={this.handleClick}/> :
                <CardBack imageNameSerialized={this.imageName} hogInfo={this.props.hogInfo} click={this.handleClick}/>
                 }   
            </div>
        )
    }

}

export default HogCardIndex