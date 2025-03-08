import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
const Profile = () => {
  return (
    <>
      <NavBar searchBar={false} />
      <SideBar className="w-1/4" />
    </>
  )
}

export default Profile;
