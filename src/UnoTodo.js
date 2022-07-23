import { useState } from 'react';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import ChangeModal from './components/Modals/ChangeModal';
import ConfirmModal from './components/Modals/ConfirmModal';
import './common-styles/reset.css';
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
      
        {
          selectedList === 0 
          ? <p>Lists not found</p> 
          : <Todos />
        }

      <ChangeModal />
      <ConfirmModal />
    </>
  )
}

export default UnoTodo;