import style from './index.module.css'
import { useDispatch } from 'react-redux';
import {showModal} from '../../../../storage/interface/actionsCreator.js'


function AddTodo(){

  const dispatch = useDispatch();


  return (  
      <button 
        type='submit'
        className={style.addButton}
        onClick={() => dispatch(showModal('Add a task', true, 'addTask', '+ Add'))}
      >Add a task</button>
    )
}

export default AddTodo;