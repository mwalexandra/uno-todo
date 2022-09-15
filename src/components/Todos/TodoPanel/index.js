import style from './index.module.css'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'
import { useSelector } from 'react-redux'


function TodoPanel(){

  const isShownPanelTodo = useSelector(state => state.interface.panelShow),
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]),
        todoId = useSelector(state => state.interface.todoId);

  return (
    <section 
      className={`${style.todoPanel} ${isShownPanelTodo ? style.isShown : ''}`}
      style={{
        backgroundColor: theme.surfaceColor
      }}  
    >
    {
      todoId ? 
      <>
        <TodoPanelHeader />
        <TodoPanelDate />
        <TodoPanelNote />
        <TodoPanelDelete />
      </> 
      : undefined
    }
    </section>  
  )
}





export default TodoPanel;