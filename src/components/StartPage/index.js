import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './index.module.css'

window.env = { ENV_HOST: '/build-unotodo/', }
const host = window.env.ENV_HOST;

function StartPage(){

  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])
  const logo = require(`../../img/${theme.logo}.png`);

  
  return(
    <section 
      className={style.startPage}
      style={{ backgroundColor: theme.secondaryBackground }}  
    >
      <div 
        className={style.startSideBar}
        style={{ backgroundColor: theme.primaryBackground }}  
      >
        <div 
          className={style.logo}
          style={{ backgroundImage: `url(${logo})` }}
        ></div>

        <div className={style.textBox}>
          <h1
            style={{ color: theme.onSurfaceColor }} 
          >Welcome to Uno To Do!</h1>
          <p
            style={{ color: theme.primaryVariantDarkColor }}  
          >Start using the best to-do app, you can create and manage your To Do lists to improve your organisation.</p>
        </div>
        <Link 
          to={`${host}app`}
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