import SideBar from './components/SideBar';
import Todos from './components/Todos';
import Placeholder from './components/Placeholder'
import Modals from './components/Modals';
import UserSettings from './components/UserSettings'
import './common-styles/reset.css';
import './UnoTodo.css';
import { useSelector } from 'react-redux';

function UnoTodo() {

  const lists = useSelector(state => state.lists.content)
  const modalShow = useSelector(state => state.modals.modalShow)
  const settingsShow = useSelector(state => state.userSettings.settingsShow)

  return (
    <>
      <div className="main">
        <SideBar />
        
        {
          lists.length === 0
          ? <Placeholder name={'Lists'}/>
          : <Todos />
        }

        {
          modalShow ? <Modals /> : undefined
        }
      </div>
      {
        settingsShow ? <UserSettings /> : undefined
      }
  </>
  )
}

export default UnoTodo;