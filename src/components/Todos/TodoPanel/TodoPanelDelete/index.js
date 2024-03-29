import style from './index.module.css';
import { useShowDate } from '../../../../helpers';
import { showPanelTodo, selectTodoId } from '../../../../storage/interface/actionsCreator';
import { showModal, showModalInfo } from '../../../../storage/modals/actionsCreator';
import { useDispatch, useSelector } from 'react-redux';

function TodoPanelDelete(){
  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId),
        todoId = useSelector(state => state.interface.todoId),
        createTodoDate = useSelector(state => state.lists
                                        .content.find(list => list.id === selectedListId)
                                        ?.todos.find(todo => todo.id === todoId)?.createDate),
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]),
        chevron = require(`../../../../img/${theme.chevron}.svg`),
        deleteIcon = require(`../../../../img/${theme.deleteIcon}.svg`);
  
  function showDeleteModal(){
    dispatch(showModal(true));
    dispatch(showModalInfo ('confirm', 'Are you sure?', 'Delete', 'deleteTask', 'Task will be permanently deleted'));
  }

  return (
    <div className={style.todoPanelDeleteWrapper}>
      <span 
        className={style.todoPanelArrow}
        style={{
          backgroundImage: `url(${chevron})`
        }}
        onClick={() => {
          dispatch(showPanelTodo(false));
          dispatch(selectTodoId(null));
        }}
      ></span>
      <p
        style={{
          color: theme.onSurfaceMediumBrush
        }}
      >Created {useShowDate(createTodoDate)}</p>
      <span 
        className={style.todoPanelDelete}
        style={{
          backgroundImage: `url(${deleteIcon})`
        }}
        onClick={() => showDeleteModal()}
        ></span>
    </div>
  )
}

export default TodoPanelDelete;