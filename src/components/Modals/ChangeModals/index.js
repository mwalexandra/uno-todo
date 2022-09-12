import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import style from '../index.module.css'
import { showModal } from '../../../storage/modals/actionsCreator'
import ChangeBtn from './ChangeBtn'


function ChangeModals () {

  const dispatch = useDispatch(),
        modal = useSelector(state => state.modals.modal),
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]),
        inputValue = useSelector(state => state.modals.modal.inputValue),
        [ currentValue, setCurrentValue ] = useState(inputValue) 
  

  return (
    <>
      <input
          type='text'
          className={`${style.modalInput} ${mode === 'Light' ? style.light : style.dark}`}
          style={{
            backgroundColor: theme.surfaceVariantColor,
            color: theme.onSurfaceColor,
            borderBottom: `1px solid ${theme.onSurfaceLowBrush}`
          }}
          placeholder={modal.name}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
      <div className={style.btnWrapper}>
        <button
          className={style.cancelBtn}
          style={{
            color: theme.primaryColor,
          }}
          onClick={() => dispatch(showModal(false))}
        >Cancel</button>
        <ChangeBtn 
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      </div>
    </>
  )
}

export default ChangeModals;