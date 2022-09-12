import { useSelector } from "react-redux";
import style from '../index.module.css';

function User(){

  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])
  const userPic = require(`../../../img/${theme.userPic}.svg`);
  
  return (
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
  )
}

export default User;