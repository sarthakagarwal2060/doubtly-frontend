import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
const SearchPage = () => {
  return (
    <div>
      <NavBar
        doubtly={true}
        searchBar={true}
        notification={true}
        profile={true}
      />
      <SideBar />
    </div>
  )
}

export default SearchPage
