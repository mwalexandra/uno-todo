import style from './index.module.css';
import TodoImportant from '../../TodosContainer/TodoList/TodoBox/TodoImportant';
import { todoComplete, changeTitle } from '../../../../storage/content/actionsCreator';
import { useDispatch, useSelector } from 'react-redux';

function TodoPanelHeader(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId),
        todoId = useSelector(state => state.interface.todoId),

        title = useSelector(state => 
                              state.lists.content.find(list => list.id === selectedListId)
                              ?.todos.find(todo => todo.id === todoId)?.title),

        completed = useSelector(state => 
                                  state.lists.content.find(list => list.id === selectedListId)
                                  ?.todos.find(todo => todo.id === todoId)?.completed),

        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]);
  
  console.log(title, completed);

  return (
    <div 
      className={style.todoPanelHeader}
      style={{
        borderBottom: `1px solid ${theme.onSurfacePressedBrush}`
      }}
    >
      <input 
        type='checkbox' 
        value={completed} 
        checked={completed} 
        onChange={()=> dispatch(todoComplete(selectedListId, todoId))}
      />

      <input 
        type='text'  
        style={{
          color: theme.onSurfaceMediumBrush,
          backgroundColor: theme.surfaceColor
        }}
        value={title} 
        onChange={(e)=> dispatch(changeTitle(selectedListId, todoId, e.target.value))} 
      />

      <TodoImportant todoId={todoId} />

    </div>
  )
}

export default TodoPanelHeader;