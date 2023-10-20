import "./style.css"
import React from 'react'

function Message({greeting}) {
  return (
    <div>
        <h1>{greeting}</h1>
    </div>
  )
}

export default Message