import { useSelector } from "react-redux";
import style from '../index.module.css';
import SettingsBtn from '../SettingsBtn';

function GeneralSettings({currentMode, setCurrentMode}){

  const mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]);

  return (
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
          <SettingsBtn settingsName={'color'} btnName={'Purple'} />
          <SettingsBtn settingsName={'color'} btnName={'Blue'} />
          <SettingsBtn settingsName={'color'} btnName={'Yellow'} />
        </div>
      </div> 
      <div className={style.settingsWrapper}>
        <strong 
          className={style.settingsHeading}
          style={{ color: theme.onSurfaceColor }}
        >Language palette</strong>
        <div className={style.settingsBtns}>
          <SettingsBtn settingsName={'language'} btnName={'English'} />
          <SettingsBtn settingsName={'language'} btnName={'French'} />
          <SettingsBtn settingsName={'language'} btnName={'Spanish'} />
        </div>
        <p>Change will be applied at next app restart</p>
      </div>  
      <div className={style.settingsWrapper}>
        <strong 
          className={style.settingsHeading}
          style={{ color: theme.onSurfaceColor }}
        >Mode</strong>
        <div className={style.settingsBtns}>
          <SettingsBtn 
            settingsName={'mode'} 
            btnName={'Light'} 
            currentMode={currentMode} 
            setCurrentMode={setCurrentMode} 
          />
          <SettingsBtn 
            settingsName={'mode'} 
            btnName={'Dark'} 
            currentMode={currentMode} 
            setCurrentMode={setCurrentMode} 
          />
        </div>
      </div>
    </div> 
  )
}

export default GeneralSettings;