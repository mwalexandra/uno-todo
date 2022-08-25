import style from './index.module.css'
import UserName from './UserName'
import Search from './Search'
import ListsPanel from './ListsPanel'
import AddList from './AddList'
import { useSelector } from 'react-redux'

function SideBar() {

  const mode = useSelector(state => state.interface.settings.mode)

  return (
    <div className={`${style.sideBar} ${mode === 'light' ? style.light : style.dark}`}>
      <UserName />
      <Search />
      <ListsPanel />
      <AddList />
    </div>
  )
}

export default SideBar;