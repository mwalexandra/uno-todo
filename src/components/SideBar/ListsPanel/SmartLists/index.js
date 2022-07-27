import style from './index.module.css'

function SmartLists(){

  return (
    <>
      <ul className={style.smartLists}>
        <li className={style.smartListItem}>
          <span className={`${style.icon} ${style.importantIcon}`}></span>
          <p>Important</p>
          <span className={`${style.icon} ${style.arrow}`}></span>
          </li>
        <li className={style.smartListItem}>
          <span className={`${style.icon} ${style.tasksIcon}`}></span>
          <p>Tasks</p>
          <span className={`${style.icon} ${style.arrow}`}></span>
        </li>
      </ul>
    </>
  )
}

export default SmartLists;