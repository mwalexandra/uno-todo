import style from './index.module.css'
import {setActiveTab} from '../../../../storage/interface/actionsCreator'
import { useDispatch, useSelector } from 'react-redux';

function TabSwitcher(){

  const dispatch = useDispatch()
  const tab = useSelector(state => state.interface.tab)
  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])  

  return (
    <div>
      <button
        className={style.todosBtn}
        style={
          tab !== 'Todos' 
          ? {
            color: theme.onSurfaceLowBrush,
            borderBottom: `1px solid ${theme.primaryInverseColor}`
          }
          :
          {
            color: theme.primaryColor,
            borderBottom: `1px solid ${theme.primaryColor}`
          }
        }
        onClick={() => dispatch(setActiveTab('Todos'))}
      >To Do</button>
      <button
        className={style.todosBtn}
        style={
          tab !== 'Completed' 
          ? {
            color: theme.onSurfaceLowBrush,
            borderBottom: `1px solid ${theme.primaryInverseColor}`
          }
          :
          {
            color: theme.primaryColor,
            borderBottom: `1px solid ${theme.primaryColor}`
          }
        }
        onClick={() => dispatch(setActiveTab('Completed'))}
      >Completed</button>
    </div>
  )
}

export default TabSwitcher;