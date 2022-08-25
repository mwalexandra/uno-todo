import { useDispatch } from 'react-redux';
import style from './index.module.css'
import { showSettings } from '../../../storage/interface/actionsCreator'

function UserName() {

  const dispatch = useDispatch()

  return (
    <>
      <div 
        className={style.usernameWrapper}
        onClick={() => dispatch(showSettings(true))}
      >
        <div className={style.userpic}></div>
        <div className={style.descrWrapper}>
          <h3 className={style.userName}>Antonio Bonilla</h3>
          <p className={style.userEmail}>antonio.bonilla@horus.com.ua</p>
        </div>
      </div>
    </>
  )
}

export default UserName;