import { todoImportant } from '../../../../../../storage/content/actionsCreator.js';
import { useDispatch, useSelector } from 'react-redux';

function TodoImportant({todoId}) {

  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.interface.listId
  )

  function importantClick(e) {
    e.stopPropagation();
    dispatch(todoImportant(selectedListId, todoId))
  }

  const important = useSelector(
    state => 
      state.lists.content
        .find( list =>  list.id === selectedListId)
        ?.todos.find( todoItem => todoId === todoItem.id)?.important
  )

  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])
  const importantIcon = require(`../../../../../../img/${theme.importantIcon}.svg`);
  const activeImportantIcon = require(`../../../../../../img/${theme.activeImportantIcon}.svg`);

  return(
    <div 
      onClick={importantClick}
    >
      {
        important 
        ? <img src={`${activeImportantIcon}`} alt='important' />
        : <img src={`${importantIcon}`} alt='non-important' />
      }
    </div>
  )
}

export default TodoImportant;