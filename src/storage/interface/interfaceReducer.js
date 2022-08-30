import { initialContentState as listsContent } from '../content/contentReducer';
import { SHOW_SETTINGS, CHANGE_MODE, SHOW_PANEL_TODO,
          SELECT_TODO_ID, SELECT_LIST_ID, 
          SET_ACTIVE_TAB, SEARCH_STRING } from './actions';

const lists = listsContent.content

export const initialInterfaceState = {
  settingsShow: false,
  settings: {
    // mode: 'lightTheme',
    mode: 'darkTheme',
    lightTheme: {
      primaryColor: '#5946D2',
      onPrimaryColor: '#FFFFFF',
      primaryBackground: '#FFFFFF',
      surfaceColor: '#FFFFFF',
      secondaryBackground: 'rgba(89, 70, 210, 0.08)',
      primarySelected: 'rgba(89, 70, 210, 0.08)',
      onSurfacePressedBrush: 'rgba(28, 27, 31, 0.12)',
      onSurfaceLowBrush: 'rgba(28, 27, 31, 0.38)',
      onSurfaceHoverBrush: 'rgba(28, 27, 31, 0.08)',
      onSurfaceColor: '#1C1B1F',
      onSurfaceMediumBrush: 'rgba(28, 27, 31, 0.6)',
      primaryVariantLightColor: '#B0A2F2',
      errorColor: '#F85977',

      // images
      chevron: 'light-chevron_right',
      logo: 'light-logo',
      lilaPlus: 'light-lila-plus',
      houseIcon: 'light-house_siding',
      importantIcon: 'light-important',
      taskListIcon: 'light-task_icon',
      searchIcon: 'light-search',
      userPic: 'light-name',
    },
    darkTheme: {
      primaryColor: '#9373FF',
      onPrimaryColor: '#FFFFFF',
      primaryBackground: '#252429',
      surfaceColor: '#201F24',
      secondaryBackground: 'rgba(37, 36, 41, 0.9)',
      primaryVariantDarkColor: '#CBBEFF',
      primarySelected: 'rgba(200, 191, 255, 0.08)',
      onSurfacePressedBrush: 'rgba(230, 225, 229, 0.12)',
      onSurfaceLowBrush: 'rgba(230, 225, 229, 0.38)',
      onSurfaceHoverBrush: 'rgba(230, 225, 229, 0.08)',
      onSurfaceColor: '#E6E1E5',
      onSurfaceMediumBrush: 'rgba(230, 225, 229, 0.6)',
      primaryVariantLightColor: '#544794',
      errorColor: '#F85977',

      // images
      chevron: 'dark-chevron_right',
      logo: 'dark-logo',
      lilaPlus: 'dark-lila-plus',
      houseIcon: 'dark-house_siding',
      importantIcon: 'dark-important',
      taskListIcon: 'dark-task_icon',
      searchIcon: 'dark-search',
      userPic: 'dark-name',
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
