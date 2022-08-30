import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {selectListId} from '../../../../../storage/interface/actionsCreator'
import style from './index.module.css'

function MyTasksItem({list}){
  const dispatch = useDispatch();
  const listId = useSelector(state => state.interface.listId)

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  const chevron = require(`../../../../../img/${theme.chevron}.svg`);
  const taskListIcon = require(`../../../../../img/${theme.taskListIcon}.svg`);

  return (
    <li 
      className={style.myTasksItem}
      style={
        list.id === listId ? {backgroundColor: theme.primarySelected} : {}
          }
      onClick={() => dispatch(selectListId(list.id))}
      key={list.id}
    >
      <span 
        className={style.icon} 
        style={{
          backgroundImage: `url(${taskListIcon})`
        }}
      ></span>
      <p>{list.header}</p>
      <span 
        className={`${style.icon} ${style.arrow}`} 
        style={{
          backgroundImage: `url(${chevron})`
        }}
      ></span>
    </li>
  )
}

export default MyTasksItem;