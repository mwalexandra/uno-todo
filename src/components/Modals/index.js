import { useSelector } from 'react-redux';
import ConfirmModals from './ConfirmModals'
import ChangeModals from './ChangeModals'


function Modals () {

  const modal = useSelector(state => state.modals.modal) 
  
  switch(modal.type) {
    case 'confirm':
      return <ConfirmModals />
    case 'change':
      return <ChangeModals />
    default: return undefined
  }
}

export default Modals;