import style from './index.module.css';
import TodosContainer from './TodosContainer'
import TodoPanel from './TodoPanel'
import { useSelector } from 'react-redux';

function Todos() {

  const tab = useSelector(state => state.interface.tab);

  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])
  // const logo = require(`../../img/${theme.logo}.png`);
  
  return (
    <>
      <div 
        className={style.todos} 
        style={
          tab !== 'Importants' 
          ? {backgroundColor: theme.primaryVariantLightColor}
          : {backgroundColor: theme.errorColor}
        }
      >  
        <TodosContainer /> 
        <TodoPanel />
      </div>
    </>
  )
}

export default Todos;