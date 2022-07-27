import style from './index.module.css'

function MyTasks(){

  return (
    <>
      <ul className={style.myTasks}>
        <li className={`${style.myTasksItem} ${style.selected}`}>
          <span className={`${style.icon} ${style.listIcon}`}></span>
          <p>Task List</p>
          <span className={`${style.icon} ${style.arrow}`}></span>
          </li>
        <li className={style.myTasksItem}>
          <span className={`${style.icon} ${style.listIcon}`}></span>
          <p>House List</p>
          <span className={`${style.icon} ${style.arrow}`}></span>
        </li>
      </ul>
    </>
  )
}

export default MyTasks;