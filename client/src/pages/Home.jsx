import React from 'react'
import { useState } from 'react'

import { Navbar } from '../components/Navbar'

import { Sidebar } from '../components/Sidebar'

export const Home = ({isrender}) => {
  const [isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar toggle={toggle} isrender={isrender}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    
    </>
    
  )
}
