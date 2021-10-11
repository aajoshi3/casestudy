import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routing from '../router'
import CustomNavbar from './CustomNavbar'

const CustomNavbarRouting = () => {
    return (
        <BrowserRouter>

        <div>
        <CustomNavbar />
        {routing}

        </div>
        </BrowserRouter>
    )
}

export default CustomNavbarRouting
