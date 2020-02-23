import React from 'react'


class CardFront extends React.Component {
    render() {
        return (
            <div className="content" onClick={this.props.click}>
                <img src={require(`../hog-imgs/${this.props.imageNameSerialized()}`)} alt="piggy" />
                <div className="header">{this.props.hogInfo.name}</div>
            </div>
        )
    }
}

export default CardFront