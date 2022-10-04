import { AppBar, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"
import AppHideOnScroll from './common/HideOnScroll'

const NavigationBar = () => {
  return (
    <>
      <AppHideOnScroll>
        <AppBar>
          <Toolbar>
            <Link to="/clients">Wall of clients</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/recommendations">Recommendations</Link>
          </Toolbar>
        </AppBar>
      </AppHideOnScroll>
    </>
  )
}

export default NavigationBar