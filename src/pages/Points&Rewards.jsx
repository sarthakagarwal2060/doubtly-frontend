import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { Card } from '@radix-ui/themes'
import { Star } from 'lucide-react';
const Points = () => {
  return (

    <>
      
      <NavBar doubtly={false} searchBar={false} notification={true} profile={true}/>
 
        <SideBar  />
     
  
  
        </>
  )
}

export default Points
