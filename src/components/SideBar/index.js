import style from './index.module.css'
import UserName from './UserName'
import Search from './Search'
import ListsPanel from './ListsPanel'
import AddList from './AddList'

function SideBar() {
  return (
    <div className={style.sideBar}>
      <UserName />
      <Search />
      <ListsPanel />
      <AddList />
    </div>
  )
}

export default SideBar;