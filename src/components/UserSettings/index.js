import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css';
import { changeMode } from '../../storage/userSettings/actionsCreator';
import { showSettings } from '../../storage/userSettings/actionsCreator';
import Header from './Header';
import User from './User';
import GeneralSettings from './GeneralSettings';
import About from './About';
import { useState } from 'react';

function UserSettings (){

  const dispatch = useDispatch()
  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])

  const [currentMode, setCurrentMode] = useState(mode)

  return (
    <div className={`${style.modalWrapper}`}>
      <div 
        className={style.modal}
        style={{ backgroundColor: theme.surfaceColor }}  
      >
        <Header />
        <User />
        <GeneralSettings 
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
        <About />
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showSettings(false))}
          >Cancel</button>
          <button 
            className={style.saveBtn}
            onClick={() => dispatch(changeMode(currentMode))}
          >Save</button>
        </div>
      </div>
    </div>
  )
}

export default UserSettings;