import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className='logo_container'>
      <Link to={"/"}>
      <img src="../src/img/logo/logo-ap-white.png" alt="" />
      </Link>
    </div>
  )
}
