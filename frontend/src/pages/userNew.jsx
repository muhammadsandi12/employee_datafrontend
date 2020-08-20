import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserNew() {
  function handleClick() {
    console.log('saving')
  }

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Save</button>
    </div>
  )
}
