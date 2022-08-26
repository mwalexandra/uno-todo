import { initialContentState as listsContent } from '../content/contentReducer';
import { SHOW_SETTINGS, CHANGE_MODE, SHOW_PANEL_TODO,
          SELECT_TODO_ID, SELECT_LIST_ID, 
          SET_ACTIVE_TAB, SEARCH_STRING } from './actions';

const lists = listsContent.content

export const initialInterfaceState = {
  settingsShow: false,
  settings: {
    mode: 'lightTheme',
    lightTheme: {
      primaryColor: '#5946D2',
      onPrimaryColor: '#FFFFFF',
      primaryColorOpacity: 'rgba(89, 70, 210, 0.08)',
      primaryInverseColor: '#C8BFFF',
      primaryContainerColor: '#E5DEFF',
      onPrimaryContainerColor: '#160067',
      primaryVariantLightColor: '#B0A2F2',
      primaryVariantDarkColor: '#5835E5',
      secondaryContainerColor: '#E5DFF9',
      onSecondaryContainerColor:'#1B192C',
      backgroundColor: '#F4F4F4',
      onBackgroundColor: '#1C1B1F',
      inverseSurfaceColor: '#313033',
      onSurfaceColor: '#1C1B1F',
      outline: '#79747E',
      errorColor: '#F85977',
      errorContainerColor: '#F9DEDC',
      onErrorContainerColor: '#410E0B',
      appBackground: '#fff', //listBackground, fontColor, buttonColor
      fontColor:'#000',
      chevron: 'light-chevron_right',
    },
    darkTheme: {
      appBackground: '#000000',
      fontColor:'#ffffff',
      chevron: 'dark-chevron_right',
    },
    color: 'Purple',
    language: 'English',
  },
  panelShow: false,
  todoId: lists[0]?.todos[0]?.id | null,
  listId: lists[0]?.id | null,
  tab: 'Todos',
  searchString: '',
};

function iterfaceReducer(state = initialInterfaceState, {type, payload}) {

  switch(type){

    case SHOW_SETTINGS:
      return {
        ...state,
        settingsShow: payload.settingsShow,
    }

    case CHANGE_MODE:
      return {
        ...state,
        settings: {
          ...state.settings,
          mode: payload.mode,
        }
    }

    case SHOW_PANEL_TODO:
      return {
        ...state,
        panelShow: payload.panelShow,
    }

    case SELECT_TODO_ID:
      return {
        ...state,
        todoId: payload.id,
    }

    case SELECT_LIST_ID:
      return {
        ...state,
        listId: payload.id,
    }

    case SET_ACTIVE_TAB:
      return {
        ...state,
        tab: payload.tab,
    }

    case SEARCH_STRING:
      return {
        ...state,
        searchString: payload.searchString,
      }

    default: return state;
  }
}

  export {iterfaceReducer};
