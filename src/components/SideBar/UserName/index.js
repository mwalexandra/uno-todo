import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { showSettings } from '../../../storage/interface/actionsCreator'

function UserName() {

  const dispatch = useDispatch()

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  const userPic = require(`../../../img/${theme.userPic}.svg`);


  return (
    <>
      <div 
        className={style.usernameWrapper}
        onClick={() => dispatch(showSettings(true))}
      >
        <div 
          className={style.userpic}
          style={{
            backgroundImage: `url(${userPic})`
          }}
        ></div>
        <div className={style.descrWrapper}>
          <h3 
            className={style.userName}
            style={{
              color: theme.onSurfaceColor
            }}
          >Antonio Bonilla</h3>
          <p 
            className={style.userEmail}
            style={{
              color: theme.onSurfaceMediumBrush
            }}
          >antonio.bonilla@horus.com.ua</p>
        </div>
      </div>
    </>
  )
}

export default UserName;