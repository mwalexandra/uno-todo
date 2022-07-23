import { useDispatch, useSelector } from 'react-redux';
import { showChangeModal, showConfirmModal, showModalInfo } from '../../../../storage/interface/actionsCreator'

import style from './index.module.css'

function TodoListHeader (){
  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.interface.listId
  )
  
  const header = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)?.header
  )

  function changeHeader(){
    dispatch(showModalInfo('Rename list', 'Rename', 'changeHeader', header))
    dispatch(showChangeModal(true))
  }

  function deleteList(){
    dispatch(showModalInfo('Are you sure?', 'Delete', 'deleteList', 'List will be permanently deleted'))
    dispatch(showConfirmModal(true))
  }

  return (
    <div className={style.headingWrapper}>
      <h1 className={style.todosHeading}>{header}</h1>
      <div className={style.headingBtnWrapper}>
        <button
          className={`${style.headingBtn} ${style.headingEdit}`}
          onClick={() => changeHeader()}
        ></button>
        <button
          className={`${style.headingBtn} ${style.headingDelete}`}
          onClick={() => deleteList()}
        ></button>
      </div>
    </div>
  )  
}

export default TodoListHeader;