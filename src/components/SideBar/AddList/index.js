
import style from './index.module.css'
import { useDispatch } from 'react-redux';
import {showChangeModal, showModalInfo} from '../../../storage/interface/actionsCreator'


function AddList(){

  const dispatch = useDispatch();

  function showAddModal(){
    dispatch(showModalInfo ('Add List', '+ Add', 'listAdd', ''))
    dispatch(showChangeModal(true))
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