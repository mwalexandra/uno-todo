import { useDispatch } from 'react-redux';
import style from './index.module.css'
import {showChangeModal, showModalInfo} from '../../storage/interface/actionsCreator'


function Placeholder({name}){
  const dispatch = useDispatch();

  function openModal(){
    if(name === 'list'){
      dispatch(showModalInfo('New list', ' + Create', 'addList', ''))
    } else if(name === 'task'){
      dispatch(showModalInfo ('Add Todo', '+ Add', 'todoAdd', ''))
    }
    dispatch(showChangeModal(true))
  }

  return (
    <div className={style.placeholderWrapper}>
      <div className={style.placeholder}>
        <h2 className={style.placeholderHeading}>{name} not found</h2>
        <p className={style.placeholderText}>But you can add one</p>
        <button 
          className={style.placeholderBtn}
          onClick={() => openModal()}
        >Add {name}</button>
      </div>  
    </div>
  )
}

export default Placeholder;