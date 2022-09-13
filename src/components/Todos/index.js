import style from './index.module.css';
import TodosContainer from './TodosContainer'
import TodoPanel from './TodoPanel'
import { useSelector } from 'react-redux';

function Todos() {

  const tab = useSelector(state => state.interface.tab),
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]),
        todoId = useSelector(state => state.interface.todoId);
  
  return (
    <>
      <main 
        className={style.todos} 
        style={
          tab !== 'Importants' 
          ? {backgroundColor: theme.primaryVariantLightColor}
          : {backgroundColor: theme.errorColor}
        }
      >
        <TodosContainer /> 
        {
          todoId ? <TodoPanel /> : undefined
        }
      </main>
    </>
  )
}

export default Todos;