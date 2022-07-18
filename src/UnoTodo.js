import {useEffect, useState,useMemo } from 'react';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import './common-styles/reset.css';
import { useDate, useLists, CreateDate } from './helpers';

import { useSelector } from 'react-redux';

function UnoTodo() {

  const [selectedList, setSelectedList] = useState(0);

  // useMemo(()=>{console.log(lists)},[lists])

  return (
    <>
      <SideBar 
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <Todos />
    </>
  )
}

export default UnoTodo;