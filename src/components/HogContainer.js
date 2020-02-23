import React from 'react'
import HogCardIndex from './HogCardIndex'

class HogContainer extends React.Component {
    render(){
        return (
            <div className="ui cards">
                {this.props.hogs.map((hog, index)=> <HogCardIndex key={index} hogInfo={hog}/>)}
            </div>
    )
}
}

export default HogContainer