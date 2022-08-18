import { setSearchString } from "../../../storage/interface/actionsCreator";
import { useDispatch, useSelector } from "react-redux";
import style from './index.module.css'

function Search() {

  const dispatch = useDispatch()
  const searchString = useSelector(state => state.interface.searchString)

  return (
    <>
      <form className={style.searchForm}>
        <input
          className={style.searchInput}
          placeholder='Search'
          value={searchString}
          onChange={(e) => dispatch(setSearchString(e.target.value))}
        />
        {
          searchString 
          ? <span 
            className={style.searchClean}
            onClick={() => dispatch(setSearchString(''))}
          >X</span>
          : undefined 
        }
          
      </form>
    </>
  )
}

export default Search;