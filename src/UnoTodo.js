import { useState } from 'react';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import Modal from './ui/modal';
import './common-styles/reset.css';

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
      <Modal />
    </>
  )
}

export default UnoTodo;