import { useDispatch, useSelector } from "react-redux";
import style from '../index.module.css';
import { showSettings } from '../../../storage/userSettings/actionsCreator';

function Header(){

  const dispatch = useDispatch()
  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])
  
  return (
    <div style={{ color: theme.onSurfaceColor }}>
      <span onClick={() => dispatch(showSettings(false))}>X</span>
      <h3 className={style.modalHeader}>Settings</h3>
    </div>
  )
}

export default Header;