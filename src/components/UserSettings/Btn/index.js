import { useDispatch, useSelector } from "react-redux";
import style from './index.module.css';
import { changeMode } from '../../../storage/interface/actionsCreator'



function Btn({settingsName, btnName}){
  const dispatch = useDispatch()

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  const color = useSelector(state => state.interface.settings.color)
  const language = useSelector(state => state.interface.settings.language)

  const sunIcon = require(`../../../img/${theme.sunIcon}.svg`);
  const moonIcon = require(`../../../img/${theme.moonIcon}.svg`);


  switch(settingsName) {
    case 'color':
      return (
          <button 
            className={style.settingsBtn} 
            style={
              color !== btnName 
              ? {
                color: theme.onSurfaceVariantColor,
                border: `1px solid ${theme.outline}`,
              }
              : {
                color: theme.onPrimaryContainerColor,
                backgroundColor: theme.secondaryContainerColor,
                border: `1px solid ${theme.secondaryContainerColor}`,
              }
            }
          >{btnName}</button>
      )

    case 'language':
      return (
        <button 
          className={style.settingsBtn} 
          style={
            language !== btnName 
            ? {
              color: theme.onSurfaceVariantColor,
              border: `1px solid ${theme.outline}`,
            }
            : {
              color: theme.onPrimaryContainerColor,
              backgroundColor: theme.secondaryContainerColor,
              border: `1px solid ${theme.secondaryContainerColor}`,
            }
          }
        >{btnName}</button>
    )

    case 'mode':
      return (
          <button 
            className={`${style.settingsBtn} ${style.modeBtn}`}
            style={
              mode !== btnName 
              ? {
                color: theme.onSurfaceVariantColor,
                border: `1px solid ${theme.outline}`,
              }
              : {
                color: theme.onPrimaryContainerColor,
                backgroundColor: theme.secondaryContainerColor,
                border: `1px solid ${theme.secondaryContainerColor}`,
              }
            }
            // TODO переделать, changeMode только при клике на кнопке Save
            onClick={() => dispatch(changeMode(btnName))} 
          >
            <span
              className={style.iconSpan} 
              style={
                btnName === 'Light'
                ? {backgroundImage: `url(${sunIcon})`}
                : {backgroundImage: `url(${moonIcon})`}
              }
            ></span>
            {btnName}
          </button>
      )

     default:
      return undefined 
  }

}

export default Btn;