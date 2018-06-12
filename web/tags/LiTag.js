import React from 'react'

export default props => {
    return (
        <ul>
            {props.content.map((e,k)=><li key={k}>{e}</li>)}
        </ul>
    )
}
