import { setSearchString } from "../../../storage/interface/actionsCreator";
import { useDispatch, useSelector } from "react-redux";
import style from './index.module.css'

function Search() {

  const dispatch = useDispatch()
  const searchString = useSelector(state => state.interface.searchString)

  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])
  const searchIcon = require(`../../../img/${theme.searchIcon}.svg`);

  return (
    <>
      <form 
        className={style.searchForm}
        style={{
          backgroundColor: theme.onSurfaceHoverBrush,
          borderBottom: `2px solid ${theme.onSurfaceLowBrush}`,
        }}
      >
        <input
          className={style.searchInput}
          style={{
            backgroundImage: `url(${searchIcon})`,
            color: theme.onSurfaceLowBrush,
          }}
          placeholder='Search'
          value={searchString}
          onChange={(e) => dispatch(setSearchString(e.target.value))}
        />
        {
          searchString 
          ? <span 
            className={style.searchClean}
            style={{
              color: theme.onSurfaceLowBrush,
            }}
            onClick={() => dispatch(setSearchString(''))}
          >X</span>
          : undefined 
        }
          
      </form>
    </>
  )
}

export default Search;