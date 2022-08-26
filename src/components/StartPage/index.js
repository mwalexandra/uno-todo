import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './index.module.css'


function StartPage(){

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  
  return(
    <section 
      className={style.startPage}
      style={{
        backgroundColor: theme.primaryColorOpacity,
      }}  
    >
      <div 
        className={style.startSideBar}
        style={{
          backgroundColor: theme.onPrimaryColor,
        }}  
      >
        <div className={style.logo}></div>

        <div className={style.textBox}>
          <h1
            style={{
              color: theme.onSurfaceColor,
            }} 
          >Welcome to Uno To Do!</h1>
          <p
            style={{
              color: theme.primaryVariantDarkColor,
            }}  
          >Start using the best to-do app, you can create and manage your To Do lists to improve your organisation.</p>
        </div>
        <Link 
          to='/uno-todo' 
          className={style.startedBtn}
          style={{
            color: theme.onPrimaryColor,
            backgroundColor: theme.primaryColor,
          }}
        >Get started</Link>
      </div>
      <div className={style.startBack}></div>
    </section>
  )
}

export default StartPage;