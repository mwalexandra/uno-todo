import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {showModal, showModalInfo} from '../../storage/modals/actionsCreator'


function Placeholder({name}){
  const dispatch = useDispatch();

  const tab = useSelector(state => state.interface.tab);

  function openModal(){
    if(name === 'Lists'){
      dispatch(showModalInfo('change', 'New list', ' + Create', 'addList', ''))
    } else if(name === 'Tasks'){
      dispatch(showModalInfo ('change', 'Add Todo', '+ Add', 'todoAdd', ''))
    }
    dispatch(showModal(true))
  }

  return (
    <div className={`${style.placeholderWrapper} ${tab === 'Importants' ? style.placeholderImportants : style.placeholderTasks}`}>
      <div className={style.placeholder}>
        <h2 className={style.placeholderHeading}>{name} not found</h2>
        <button 
          className={style.placeholderBtn}
          onClick={() => openModal()}
        >Add {name}</button>
      </div>  
    </div>
  )
}

export default Placeholder;