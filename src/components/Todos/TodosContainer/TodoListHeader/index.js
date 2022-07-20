import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useTextInput } from '../../../../helpers'
import {changeHeader} from '../../../../storage/content/actionsCreator'
import { showModal } from '../../../../storage/interface/actionsCreator'


import style from './index.module.css'

function TodoListHeader (){
  const headerInput = useRef(null);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const selectedListId = useSelector(
    state => state.interface.listId
  )
  
  const header = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)?.header
  )

  // const [title, bindTitle] = useTextInput(header);

  // useEffect(
  //   function onFocus() {
  //     if(!disabled) {
  //       headerInput.current.focus();
  //     }
  //   }, [disabled]
  // )


  // function changeTodoListHeader(e){
  //   e.preventDefault();
  //   dispatch(changeHeader(selectedListId, title));
  //   setDisabled(true);
  // }

  return (
    <div className={style.headingWrapper}>
      {/* <form 
        onSubmit={(e) => changeTodoListHeader(e)}
      >
        <input 
            type='text'
            className={style.todosHeading}
            {...bindTitle}
            disabled={disabled}
            ref={headerInput}
        />
      </form> */}
      <h1 className={style.todosHeading}>{header}</h1>
      <div className={style.headingBtnWrapper}>
        <button
          className={`${style.headingBtn} ${style.headingEdit}`}
          onClick={() => dispatch(showModal('Rename list', true, 'changeHeader', 'Rename', header))
          }
        ></button>
        <button
          className={`${style.headingBtn} ${style.headingDelete}`}
        ></button>
      </div>
    </div>
  )  
}

export default TodoListHeader;