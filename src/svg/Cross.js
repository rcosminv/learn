import react from 'react'

export default function Cross(props)
{
    const size = props.size || 100

    return(
        <svg width = {size} height = {size} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L105 105M105 5L5 105" stroke="black" stroke-width="10" stroke-linecap="round"/>
        </svg>
    )
}


