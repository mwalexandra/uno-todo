import { useSelector } from 'react-redux';
import style from '../index.module.css';

function About(){

  const mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]);

  return (
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
  )
}

export default About;