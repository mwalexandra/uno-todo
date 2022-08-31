import { useDispatch, useSelector } from "react-redux";
import style from './index.module.css';
import { changeMode } from '../../../storage/interface/actionsCreator'
import { useState } from "react";



function Btn(props){
  const dispatch = useDispatch()

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  const color = useSelector(state => state.interface.settings.color)
  const language = useSelector(state => state.interface.settings.language)

  const sunIcon = require(`../../../img/${theme.sunIcon}.svg`);
  const moonIcon = require(`../../../img/${theme.moonIcon}.svg`);

  switch(props.settingsName) {
    case 'color':
      return (
          <button 
            className={style.settingsBtn} 
            style={
              color !== props.btnName 
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
          >{props.btnName}</button>
      )

    case 'language':
      return (
        <button 
          className={style.settingsBtn} 
          style={
            language !== props.btnName 
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
        >{props.btnName}</button>
    )

    case 'mode':
      return (
          <button 
            className={`${style.settingsBtn} ${style.modeBtn}`}
            style={
              props.currentMode !== props.btnName 
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
            onClick={() => props.setCurrentMode(props.btnName)} 
          >
            <span
              className={style.iconSpan} 
              style={
                props.btnName === 'Light'
                ? {backgroundImage: `url(${sunIcon})`}
                : {backgroundImage: `url(${moonIcon})`}
              }
            ></span>
            {props.btnName}
          </button>
      )

     default:
      return undefined 
  }

}

export default Btn;