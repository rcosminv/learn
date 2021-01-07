import React from 'react'
import Cross from './svg/Cross'
import Circle from './svg/Circle'
import './stilu.css'

const renderSVG = svg =>{
    if (svg === 'cross'){
        return <Cross size = {40}/>
    }
    else if (svg === 'circle'){
        return <Circle size = {40}/>
    } else {
        return null
    }
}

export default function Grid(props)
{

    const divisions= props.positions.map((value , index) => {
        const isWinningIndex = props.winningIndexes.includes(index) 
        return(
            <div className = {isWinningIndex ? 'winner' :null}
             key = {index} onClick = {() =>{
                props.setPositions(index)
            }}>
                {renderSVG(value)}
            </div>
        )
    }) 
    return(

        <div className = 'container'>
            {divisions}
        </div>
    )
}