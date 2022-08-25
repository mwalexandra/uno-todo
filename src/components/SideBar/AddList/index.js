
import style from './index.module.css'
import { useDispatch } from 'react-redux';
import {showModal, showModalInfo} from '../../../storage/modals/actionsCreator'


function AddList(){

  const dispatch = useDispatch();

  function showAddModal(){
    dispatch(showModalInfo ('change', 'Add List', '+ Add', 'addList', ''))
    dispatch(showModal(true))
  }

  return (  
      <button 
        type='submit'
        className={style.addButton}
        onClick={() => showAddModal()}
      >New list</button>
    )
}

export default AddList;