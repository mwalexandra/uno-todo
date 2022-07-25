import { useState } from 'react';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import Placeholder from './components/Placeholder'
import ChangeModal from './components/Modals/ChangeModal';
import ConfirmModal from './components/Modals/ConfirmModal';
import './common-styles/reset.css';
import { useSelector } from 'react-redux';

function UnoTodo() {

  const [selectedList, setSelectedList] = useState(0);
  const lists = useSelector(state => state.lists.content)

  // useMemo(()=>{console.log(lists)},[lists])

  return (
    <>
      <SideBar 
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      
      {
        lists.length === 0
        ? <Placeholder name={'list'}/>
        : <Todos />
      }

      <ChangeModal />
      <ConfirmModal />
    </>
  )
}

export default UnoTodo;