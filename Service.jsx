import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Service() {
  return (
    <div>
    <div className='service-container'>
      <h2 className='service'>Our Services</h2>
    </div>
    <div className="nestServ">
      <div className="nestedNav">
        <Link to="UX">UX Design</Link>
        <Link to="UI">UI Design</Link>
        <Link to="/Web">Web Development</Link>
      </div></div>

      <Outlet />
    </div>
  )
}
