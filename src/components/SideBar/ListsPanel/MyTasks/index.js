import { useSelector } from 'react-redux';
import style from './index.module.css';
import MyTasksItem from './MyTasksItem'

function MyTasks(){
  const lists = useSelector(state => state.lists.content)

  return (
      <ul className={style.myTasks}> 
        {
          lists.map(list => 
          {
            return <MyTasksItem 
                      list={list} 
                      key={list.id}
                    />
          })
        }
      </ul>
  )
}

export default MyTasks;