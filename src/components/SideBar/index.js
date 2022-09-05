import style from './index.module.css'
import UserName from './UserName'
import Search from './Search'
import ListsPanel from './ListsPanel'
import AddList from './AddList'
import { useSelector } from 'react-redux'

function SideBar() {

  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])

  return (
    <div 
      className={style.sideBar} 
      style={{
        backgroundColor: theme.surfaceColor,
        color: theme.onSurfaceColor,
      }}>
      <UserName />
      <Search />
      <ListsPanel />
      <AddList />
    </div>
  )
}

export default SideBar;