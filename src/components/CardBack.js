import React from 'react'
const CardBack =(props)=> {
    return(
        <div className ="ui card" onClick={props.flipCard}>
            <div className = "back-image">
                <img alt ="pigs" src={require(`../hog-imgs/${props.imgName}.jpg`)}/>
            </div>
            <div className ="content">
            <div className ="header"> {props.hog.name}</div>
            <div className= "meta">{props.hog.greased ? "Greased":"Ungreased"}</div>
            <div className= "description">
                Specialty: {props.hog.specialty}
                Weight: {props.hog.weight}
            </div>
            </div>
            <div className="extra content">
                <span><i className="trophy icon"></i> {props.hog['highest medal achieved']}</span>
            </div>
        </div>
    )
}
export default CardBack