import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {showModal} from '../storage/interface/actionsCreator'

function Modal(){
  const dispatch = useDispatch();
  const isModalActive = useSelector(state => state.interface.isModalActive)

  return (
    <div className={`${style.modalWrapper} ${isModalActive ? style.activeModal : ''}`}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>Rename list</h3>
        <input
        className={style.modalInput}
          placeholder='Rename list'
          // value='value'
          // onChange={() => console.log('changed')}
        ></input>
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showModal(false))}
          >Cancel</button>
          <button className={style.addBtn}>Rename</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;