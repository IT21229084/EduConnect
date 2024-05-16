import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="d-flex">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div >
        <Outlet/>
      </div>
    </div>
  )
}
