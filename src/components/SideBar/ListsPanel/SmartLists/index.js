import { useDispatch, useSelector } from 'react-redux';
import {setActiveTab} from '../../../../storage/interface/actionsCreator'
import style from './index.module.css'

function SmartLists(){
  const dispatch = useDispatch();

  const tab = useSelector(state => state.interface.tab);

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])

  const chevron = require(`../../../../img/${theme.chevron}.svg`);
  const houseIcon = require(`../../../../img/${theme.houseIcon}.svg`);
  const importantIcon = require(`../../../../img/${theme.activeImportantIcon}.svg`);

  return (
    <>
      <ul 
        className={style.smartLists}
        style={{
            borderBottom: `1px solid ${theme.onSurfacePressedBrush}`,
          }}
        >
        <li 
          className={style.smartListItem}
          style={
            tab === 'Importants' ? {backgroundColor: theme.primarySelected} : {}
          }
          onClick={() => dispatch(setActiveTab('Importants'))}
        >
          <span 
            className={style.icon}
            style={{
              backgroundImage: `url(${importantIcon})`
            }}
          ></span>
          <p>Important</p>
          <span 
            className={`${style.icon} ${style.arrow}`}
            style={{
              backgroundImage: `url(${chevron})`
            }}
          ></span>
        </li>
        <li 
          className={style.smartListItem}
          style={
            tab === 'Todos' ? {backgroundColor: theme.primarySelected} : {}
          }
          onClick={() => dispatch(setActiveTab('Todos'))}
        >
          <span 
            className={style.icon}
            style={{
              backgroundImage: `url(${houseIcon})`
            }}
          ></span>
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