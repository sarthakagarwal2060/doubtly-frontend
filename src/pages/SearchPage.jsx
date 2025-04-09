import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Search from '../components/Search';
const MemoizedNavBar = React.memo(NavBar);
const MemoizedSideBar = React.memo(SideBar);
const SearchPage = () => {
 

  return (
    <>
    <MemoizedNavBar 
        doubtly={true}
        searchBar={true}
        notification={true}
        profile={true}
      />
      <MemoizedSideBar />
      <Search />
    </>
  );
};

export default SearchPage;