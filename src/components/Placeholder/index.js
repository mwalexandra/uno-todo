import { useSelector } from 'react-redux';
import style from './index.module.css'


function Placeholder({name}){

  const tab = useSelector(state => state.interface.tab);
  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])

  return (
    <div 
      className={style.placeholderWrapper} 
      style={
        tab !== 'Importants' 
        ? { backgroundColor: theme.primaryVariantLightColor } 
        : { backgroundColor: theme.errorColor }
      }
    >
      <div 
        className={style.placeholder}
        style={
            tab !== 'Importants' 
            ? { color: theme.onSurfaceMediumBrush } 
            : { color: theme.onErrorColor }
          }  
      >
        <h2 className={style.placeholderHeading}> {name} not found </h2>
        <p className={style.placeholderText}> Try to add something ... </p>
      </div>  
    </div>
  )
}

export default Placeholder;