import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {showModal, showModalInfo} from '../../storage/modals/actionsCreator'


function Placeholder({name}){
  const dispatch = useDispatch();

  const tab = useSelector(state => state.interface.tab);

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])

  function openModal(){
    if(name === 'Lists'){
      dispatch(showModalInfo('change', 'New list', ' + Create', 'addList', ''))
    } else if(name === 'Tasks'){
      dispatch(showModalInfo ('change', 'Add Todo', '+ Add', 'todoAdd', ''))
    }
    dispatch(showModal(true))
  }

  return (
    <div 
      className={style.placeholderWrapper} 
      style={
        tab !== 'Importants' 
        ? {
          backgroundColor: theme.primaryVariantLightColor
        } 
        : {
          backgroundColor: theme.errorColor
        }
      }
    >
      <div className={style.placeholder}>
        <h2 
          className={style.placeholderHeading}
          style={
            tab !== 'Importants' 
            ? {
              color: theme.onSurfaceMediumBrush     
            } 
            : {
              color: theme.onErrorColor
            }
          }
        >{name} not found</h2>
        <p
          className={style.placeholderText}
          style={
            tab !== 'Importants' 
            ? {
              color: theme.onSurfaceMediumBrush     
            } 
            : {
              color: theme.onErrorColor
            }
          }
        >Try to add something ...</p>
      </div>  
    </div>
  )
}

export default Placeholder;