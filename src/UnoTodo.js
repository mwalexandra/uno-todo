import SideBar from './components/SideBar';
import Todos from './components/Todos';
import Placeholder from './components/Placeholder'
import ChangeModal from './components/Modals/ChangeModal';
import ConfirmModal from './components/Modals/ConfirmModal';
import './common-styles/reset.css';
import { useSelector } from 'react-redux';

function UnoTodo() {

  const lists = useSelector(state => state.lists.content)
  const main = {
    display: 'flex',
  }
  // useMemo(()=>{console.log(lists)},[lists])

  return (
    <div style={main}>
      <SideBar />
      
      {
        lists.length === 0
        ? <Placeholder name={'list'}/>
        : <Todos />
      }

      <ChangeModal />
      <ConfirmModal />
    </div>
  )
}

export default UnoTodo;