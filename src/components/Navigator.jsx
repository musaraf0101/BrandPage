import React from 'react'

const Navigator = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/image/bannd_img.jpg" alt="not found 404" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigator
