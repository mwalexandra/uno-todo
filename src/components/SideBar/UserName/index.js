import style from './index.module.css'

function UserName() {
  return (
    <>
      <div className={style.usernameWrapper}>
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