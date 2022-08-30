
import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {showModal, showModalInfo} from '../../../storage/modals/actionsCreator'


function AddList(){

  const dispatch = useDispatch();

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  const lilaPlus = require(`../../../img/${theme.lilaPlus}.svg`);

  function showAddModal(){
    dispatch(showModalInfo ('change', 'Add List', '+ Add', 'addList', ''))
    dispatch(showModal(true))
  }

  return (  
      <button 
        type='submit'
        className={style.addButton}
        style={{
          color: theme.primaryColor,
          backgroundImage: `url(${lilaPlus})`
        }}
        onClick={() => showAddModal()}
      >New list</button>
    )
}

export default AddList;