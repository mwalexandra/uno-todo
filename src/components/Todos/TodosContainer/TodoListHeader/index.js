import { useDispatch, useSelector } from 'react-redux';
import { showModal, showModalInfo } from '../../../../storage/interface/actionsCreator'


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
    dispatch(showModal(true));
    dispatch(showModalInfo('Rename list', 'Rename', 'changeHeader', header))
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
        ></button>
      </div>
    </div>
  )  
}

export default TodoListHeader;