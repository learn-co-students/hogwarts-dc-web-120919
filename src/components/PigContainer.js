import React from "react"
import PigCard from './PigCard'

const PigContainer =(props) => {
    
    return(
            <div className ="ui card">
                {props.hogs.map(hog=> <PigCard 
                hog ={hog}
                key ={hog.name} />)}
            </div>
          )

    }
export default PigContainer