import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <a href="" className="navbar-brand text-light">Stock Prediction Portal</a>

        <div>
          <Button class="btn-outline-info" text='Login' />
          &nbsp;
          <Button class="btn-info" text="Register" />
        </div>
      </nav>
    </>
  )
}

export default Header