import style from './index.module.css'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'
import { useSelector } from 'react-redux'


function TodoPanel(){

  const isShownPanelTodo = useSelector(state => state.interface.panelShow)
  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])

  return (
    <section 
      className={`${style.todoPanel} ${isShownPanelTodo ? style.isShown : ''}`}
      style={{
        backgroundColor: theme.surfaceColor
      }}  
    >
      <TodoPanelHeader />
      <TodoPanelDate />
      <TodoPanelNote />
      <TodoPanelDelete />
    </section>  
  )
}





export default TodoPanel;