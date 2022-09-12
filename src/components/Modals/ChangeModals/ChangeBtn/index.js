import { useDispatch, useSelector } from "react-redux";
import style from '../../index.module.css';
import { showModal } from '../../../../storage/modals/actionsCreator';
import { changeHeader, addList, todoAdd } from '../../../../storage/content/actionsCreator';
import { selectListId } from '../../../../storage/interface/actionsCreator';
import { useEffect, useMemo } from "react";

function ChangeBtn({currentValue, setCurrentValue}){

  const dispatch = useDispatch();

  const modal = useSelector(state => state.modals.modal),
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]),
        tab = useSelector(state => state.interface.tab),
        lists = useSelector(state => state.lists.content),
        listId = useSelector(state => state.interface.listId);


  function listAdd(){
    dispatch(addList(currentValue));
    setCurrentValue('');
    dispatch(showModal(false));
  } 

  function addTodo(){
    const important = tab === 'Importants' ? true : false
    dispatch(todoAdd(listId, currentValue, important));
    setCurrentValue('');
    dispatch(showModal(false));
  } 

  function actionHandler(){
    if(modal.action === 'changeHeader'){
      dispatch(changeHeader(listId, currentValue)); 
    } else if (modal.action === 'todoAdd') {
      addTodo();
    } else if (modal.action === 'addList') {
      listAdd();
    }
  }

  return (
    <button 
      className={style.addBtn}
      disabled={!currentValue}
      style={{
        backgroundColor: theme.primaryColor,
        color: theme.onPrimaryColor,
      }}
      onClick={() => actionHandler()}  
    >{modal.btnText}</button>
  )
}

export default ChangeBtn;