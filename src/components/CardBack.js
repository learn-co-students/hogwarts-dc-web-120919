import React, { Component } from 'react'


export default class CardBack extends Component {
    render() {
        let {specialty, greased, weight} = this.props.hogInfo
        return (
            <div className="ui card" onClick={this.props.click}>
                <img src={require(`../hog-imgs/${this.props.imageNameSerialized()}`)} alt="piggy" />                <p>{specialty}</p>
                <p>{weight}</p>
                <p>{greased ? "Greased" : "Not Greased"}</p>
                <p>{this.props.hogInfo['highest medal achieved']}</p>
            </div>
        )
    }
}
