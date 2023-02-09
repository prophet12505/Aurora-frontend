import React from 'react'
import "./SideMessage.css"
const SideMessage = ({message}) => {
  return (
    <div id='side-message'>
        <h2><i class="fa-solid fa-envelope-open-text"></i>  Notice</h2>
        <p>{message}</p>
    </div>
  )
}

export default SideMessage