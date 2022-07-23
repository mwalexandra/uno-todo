import style from './index.module.css'
import { useDispatch } from 'react-redux';
import {showChangeModal, showModalInfo} from '../../../../storage/interface/actionsCreator.js'


function AddTodo(){

  const dispatch = useDispatch();

  function showAddModal(){
    dispatch(showModalInfo ('Add Todo', '+ Add', 'todoAdd', ''))
    dispatch(showChangeModal(true))
  }

  return (  
      <button 
        type='submit'
        className={style.addButton}
        onClick={() => showAddModal()}
      >Add a task</button>
    )
}

export default AddTodo;