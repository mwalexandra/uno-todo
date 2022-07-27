import { useState } from "react";
import style from './index.module.css'

function Search() {
const [value, setValue] = useState();

  return (
    <>
      <form className={style.searchForm}>
        <button 
          className={style.searchBtn}
          // onClick={() => dispatch(search(value))}
        ></button>
        <input
          className={style.searchInput}
          placeholder='Search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  )
}

export default Search;