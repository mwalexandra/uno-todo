import { useDispatch, useSelector } from 'react-redux'
import style from './index.module.css'
import { changeMode } from '../../storage/interface/actionsCreator'
import { showSettings } from '../../storage/interface/actionsCreator'
import Btn from './Btn'

function UserSettings (){

  const dispatch = useDispatch()
  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])

  const userPic = require(`../../img/${theme.userPic}.svg`);


  return (
    <div className={`${style.modalWrapper}`}>
      <div 
        className={style.modal}
        style={{ backgroundColor: theme.surfaceColor }}  
      >
        <div style={{ color: theme.onSurfaceColor }}>
          <span onClick={() => dispatch(showSettings(false))}>X</span>
          <h3 className={style.modalHeader}>Settings</h3>
        </div>

        <div 
          className={style.usernameWrapper} 
          style={{ borderBottom: `1px solid ${theme.onSurfacePressedBrush}` }}
        >
          <div 
            className={style.userpic}
            style={{ backgroundImage: `url(${userPic})` }}
          ></div>
          <div className={style.descrWrapper}>
            <h3 
              className={style.userName}
              style={{ color: theme.onSurfaceColor }}
            >Antonio Bonilla</h3>
            <p 
              className={style.userEmail}
              style={{ color: theme.onSurfaceMediumBrush }}
            >antonio.bonilla@horus.com.ua</p> 
          </div>
          <button 
            className={style.logoutBtn}
            style={{ color: theme.errorColor }}
          >Sign Out</button>
        </div>

        <div 
          className={style.generalSettingsWrapper}
          style={{ borderBottom: `1px solid ${theme.onSurfacePressedBrush}` }}
        >
          <h4 
            className={style.generalSettingsHeading} 
            style={{ color: theme.primaryColor }}
          >General</h4>
          <div className={style.settingsWrapper}>
            <strong 
              className={style.settingsHeading}
              style={{ color: theme.onSurfaceColor }}
            >Color palette</strong>
            <div className={style.settingsBtns}>
              <Btn settingsName={'color'} btnName={'Purple'} />
              <Btn settingsName={'color'} btnName={'Blue'} />
              <Btn settingsName={'color'} btnName={'Yellow'} />
            </div>
          </div> 
          <div className={style.settingsWrapper}>
            <strong 
              className={style.settingsHeading}
              style={{ color: theme.onSurfaceColor }}
            >Language palette</strong>
            <div className={style.settingsBtns}>
              <Btn settingsName={'language'} btnName={'English'} />
              <Btn settingsName={'language'} btnName={'French'} />
              <Btn settingsName={'language'} btnName={'Spanish'} />
            </div>
            <p>Change will be applied at next app restart</p>
          </div>  
          <div className={style.settingsWrapper}>
            <strong 
              className={style.settingsHeading}
              style={{ color: theme.onSurfaceColor }}
            >Mode</strong>
            <div className={style.settingsBtns}>
              <Btn settingsName={'mode'} btnName={'Light'} />
              <Btn settingsName={'mode'} btnName={'Dark'} />
            </div>
          </div>
        </div> 

        <div className={style.aboutSettingsWrapper}>
          <h4 
            className={style.aboutSettingsHeading}
            style={{ color: theme.primaryColor }}
          >About</h4>
          <strong 
            className={style.settingsHeading}
            style={{ color: theme.onSurfaceColor }}
          >Version</strong>
          <span 
            className={style.versionNumber}
            style={{ color: theme.primaryColor }}
          >1.0</span>
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