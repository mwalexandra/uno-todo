import { useDispatch, useSelector } from 'react-redux';
import {setActiveTab} from '../../../../storage/interface/actionsCreator'
import style from './index.module.css'

function SmartLists(){
  const dispatch = useDispatch();

  const tab = useSelector(state => state.interface.tab);
  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  const chevron = require(`../../../../img/${theme.chevron}.svg`);

  return (
    <>
      <ul className={style.smartLists}>
        <li 
          className={`${style.smartListItem} ${tab === 'Importants' ? style.selected : ''}`}
          onClick={() => dispatch(setActiveTab('Importants'))}
        >
          <span className={`${style.icon} ${style.importantIcon}`}></span>
          <p>Important</p>
          <span 
            className={`${style.icon} ${style.arrow}`}
            style={{
              backgroundImage: `url(${chevron})`
            }}
          ></span>
        </li>
        <li 
          className={`${style.smartListItem} ${tab === 'Todos' ? style.selected : ''}`}
          onClick={() => dispatch(setActiveTab('Todos'))}
        >
          <span className={`${style.icon} ${style.tasksIcon}`}></span>
          <p>Tasks</p>
          <span 
            className={`${style.icon} ${style.arrow}`}
            style={{
              backgroundImage: `url(${chevron})`
            }}
          ></span>
        </li>
      </ul>
    </>
  )
}

export default SmartLists;