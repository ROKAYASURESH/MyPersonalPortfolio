import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router'
export default function AppLayout() {
  return (
	<div>
		<Header />
		<Outlet/>
		<Footer/>
	</div>
  )
}
