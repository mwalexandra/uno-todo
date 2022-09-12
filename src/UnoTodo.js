import SideBar from './components/SideBar';
import Todos from './components/Todos';
import Placeholder from './components/Placeholder';
import Modals from './components/Modals';
import UserSettings from './components/UserSettings';
import { selectListId } from './storage/interface/actionsCreator';
import './common-styles/reset.css';
import './UnoTodo.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function UnoTodo() {
  const dispatch = useDispatch();

  const lists = useSelector(state => state.lists.content),
        modalShow = useSelector(state => state.modals.modalShow),
        settingsShow = useSelector(state => state.userSettings.settingsShow);

        //TODO переделать?
  useEffect(() => {
    if(lists.length){
      dispatch(selectListId(lists[lists.length - 1].id));
    } else {
      dispatch(selectListId(null));
    } 
  }, [dispatch, lists])

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