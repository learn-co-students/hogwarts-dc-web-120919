import React, { Component } from 'react'


export default class Button extends Component {
    render() {
        return (
            <div>
                <br></br>
                <button className="ui large teal button" onClick={this.props.greaseClick}>Greased?</button>
                <button className="ui large yellow button" onClick={() => this.props.sortedClick("name")}>Name</button>
                <button className="ui large green button"  onClick={() => this.props.sortedClick("weight")}>Weight</button>
            </div>
        )
    }
}
