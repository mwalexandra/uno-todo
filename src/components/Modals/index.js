import { useSelector } from 'react-redux';
import ConfirmModals from './ConfirmModals'
import ChangeModals from './ChangeModals'
import style from './index.module.css'


function Modals () {

  const modal = useSelector(state => state.modals.modal) ,
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]);


        
  const modalComponent = () => {
    switch(modal.type) {
      case 'confirm':
        return <ConfirmModals />
      case 'change':
        return <ChangeModals />
      default: return undefined
    }  
  }

  return (
    <div className={style.modalWrapper}>
      <div 
        className={style.modal}
        style={{
          backgroundColor: theme.surfaceColor
        }}
      >
        <h3 
          className={style.modalHeader}
          style={{
            color: theme.onSurfaceColor
          }}
        >{modal.name}</h3>
        {modalComponent()}
      </div>
    </div>
)
}

export default Modals;