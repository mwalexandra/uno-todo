import { useDispatch, useSelector } from 'react-redux';
import { showModal, showModalInfo } from '../../../../storage/modals/actionsCreator'

import style from './index.module.css'

function TodoListHeader (){
  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId)
  
  const header = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)?.header
  )

  const tab = useSelector(state => state.interface.tab)
  const searchString = useSelector(state => state.interface.searchString)

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode]) 

  function changeHeader(){
    dispatch(showModalInfo('Rename list', 'Rename', 'changeHeader', header))
    dispatch(showModal(true))
  }

  function deleteList(){
    dispatch(showModalInfo('confirm', 'Are you sure?', 'Delete', 'deleteList', 'List will be permanently deleted'))
    dispatch(showModal(true))
  }

  if(searchString) {
    return (
      <div className={style.headingWrapper}>
        <h1 
          className={style.todosHeading}
          style={{
            color: theme.inverseSurfaceColor,
          }}
        >Search</h1>
      </div>
    )
  }

  return (
    <div className={style.headingWrapper}>
      <h1 
        className={style.todosHeading}
        style={{
          color:theme.onPrimaryColor,
        }}
      >{
        tab === 'Importants' ? 'Important' :  header
        }</h1>
      <div className={style.headingBtnWrapper}>
        {
          tab === 'Importants' || searchString ? undefined 
          : <>
              <button
                className={`${style.headingBtn} ${style.headingEdit}`}
                onClick={() => changeHeader()}
              ></button>
              <button
                className={`${style.headingBtn} ${style.headingDelete}`}
                onClick={() => deleteList()}
              ></button>
          </>  
        }
      </div>
    </div>
  )  
}

export default TodoListHeader;