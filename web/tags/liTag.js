import React from 'react'

export default props => {
    return (
        <ol>
            {props.content.map((e,k)=><li key={k}>{e}</li>)}
        </ol>
    )
}
