import style from './index.module.css'
import { changeMode } from '../../storage/interface/actionsCreator'
import { useDispatch, useSelector } from 'react-redux';
import { showSettings } from '../../storage/interface/actionsCreator'

function UserSettings (){

  const dispatch = useDispatch()
  const mode = useSelector(state => state.interface.settings.mode)

  const theme = useSelector(state => state.interface.settings[mode])
  const userPic = require(`../../img/${theme.userPic}.svg`);


  return (
    <div className={`${style.modalWrapper}`}>
      <div className={style.modal}>
        <span
          onClick={() => dispatch(showSettings(false))}
        >X</span>
        <h3 className={style.modalHeader}>Settings</h3>

        <div className={style.usernameWrapper}>
          <div 
            className={style.userpic}
            style={{
              backgroundImage: `url(${userPic})`
            }}
          ></div>
          <div className={style.descrWrapper}>
            <h3 className={style.userName}>Antonio Bonilla</h3>
            <p className={style.userEmail}>antonio.bonilla@horus.com.ua</p>
          </div>
          <button className={style.logoutBtn}>Sign Out</button>
        </div>

        <div className={style.generalSettingsWrapper}>
          <h4 className={style.generalSettingsHeading}>General</h4>
          <div className={style.settingsWrapper}>
            <strong className={style.settingsHeading}>Color palette</strong>
            <div className={style.settingsBtns}>
              <button className={`${style.settingsBtn} ${style.activeSetting}`}>Purple</button>
              <button className={style.settingsBtn}>Blue</button>
              <button className={style.settingsBtn}>Yellow</button>
            </div>
          </div> 
          <div className={style.settingsWrapper}>
            <strong className={style.settingsHeading}>Language palette</strong>
            <div className={style.settingsBtns}>
              <button className={`${style.settingsBtn} ${style.activeSetting}`}>English</button>
              <button className={style.settingsBtn}>French</button>
              <button className={style.settingsBtn}>Spanish</button>
            </div>
            <p>Change will be applied at next app restart</p>
          </div>  
          <div className={style.settingsWrapper}>
            <strong className={style.settingsHeading}>Mode</strong>
            <div className={style.settingsBtns}>
              <button 
                className={`${style.settingsBtn} ${style.lightBtn} ${mode === 'lightTheme' ? style.activeSetting : ''}`}
                onClick={() => dispatch(changeMode('lightTheme'))}
              >Light</button>
              <button 
                className={`${style.settingsBtn} ${style.darkBtn} ${mode === 'darkTheme' ? style.activeSetting : ''}`}
                onClick={() => dispatch(changeMode('darkTheme'))}
              >Dark</button>
            </div>
          </div>
        </div> 

        <div className={style.aboutSettingsWrapper}>
          <h4 className={style.aboutSettingsHeading}>About</h4>
          <strong className={style.settingsHeading}>Version</strong>
          <span className={style.versionNumber}>1.0</span>
        </div>
            
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showSettings(false))}
          >Cancel</button>
          <button 
            className={style.saveBtn}
          >Save</button>
        </div>

      </div>
    </div>
  )
}

export default UserSettings;