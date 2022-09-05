import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {showModal, showModalInfo} from '../../../../storage/modals/actionsCreator.js'


function AddTodo(){

  const dispatch = useDispatch();
  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])  

  function showAddModal(){
    dispatch(showModalInfo ('change', 'Add Todo', '+ Add', 'todoAdd', ''))
    dispatch(showModal(true))
  }

  return (  
      <button 
        type='submit'
        className={style.addButton}
        style={{
          color: theme.onPrimaryColor,
          backgroundColor: theme.onSurfaceDraggedBrush,
        }}
        onClick={() => showAddModal()}
      >Add a task</button>
    )
}

export default AddTodo;