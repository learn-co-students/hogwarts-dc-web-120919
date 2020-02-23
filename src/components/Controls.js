import React from 'react'
class Controls extends React.Component {
    render(){
        return(
            <div>
                <button className ="ui button" onClick= {this.props.handleGreasedChange}> Greased Only</button>
            </div>
        )
    }
}
export default Controls