import React from 'react'
import './Homescreen.css'
import Homebanner from './Homebanner/Homebanner'
import Homedetails from './Homedetails/Homedetails'
import Footer from '../../Component/Footer/Footer'

function Homescreen() {
  return (
    <div className='homescreen'>
 <Homebanner/>
 <Homedetails name="Today's deal"/>
 <Homedetails name="Best Deals"/>
 


    </div>
  )
}

export default Homescreen