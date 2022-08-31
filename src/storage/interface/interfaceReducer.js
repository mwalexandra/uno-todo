import { initialContentState as listsContent } from '../content/contentReducer';
import { SHOW_SETTINGS, CHANGE_MODE, SHOW_PANEL_TODO,
          SELECT_TODO_ID, SELECT_LIST_ID, 
          SET_ACTIVE_TAB, SEARCH_STRING } from './actions';

const lists = listsContent.content

export const initialInterfaceState = {
  settingsShow: false,
  settings: {
    // mode: 'Light',
    mode: 'Dark',
    Light: {
      primaryColor: '#5946D2',
      onPrimaryColor: '#FFFFFF',
      onPrimaryContainerColor: '#160067',
      primaryBackground: '#FFFFFF',
      primaryVariantLightColor: '#B0A2F2',
      primarySelected: 'rgba(89, 70, 210, 0.08)',
      primaryInverseColor: '#C8BFFF',
      surfaceColor: '#FFFFFF',
      surfaceVariantColor: '#FAF9FB',
      secondaryBackground: 'rgba(89, 70, 210, 0.08)',
      secondaryContainerColor: '#E5DFF9',
      onSurfacePressedBrush: 'rgba(28, 27, 31, 0.12)',
      onSurfaceLowBrush: 'rgba(28, 27, 31, 0.38)',
      onSurfaceHoverBrush: 'rgba(28, 27, 31, 0.08)',
      onSurfaceColor: '#1C1B1F',
      onSurfaceMediumBrush: 'rgba(28, 27, 31, 0.6)',
      onSurfaceDraggedBrush: 'rgba(28, 27, 31, 0.16)',
      onSurfaceVariantColor: '#A5A0AC',
      inverseSurfaceColor: '#313033',
      errorColor: '#F85977',
      onErrorColor: '#ffffff',
      outline: '#79747E',
      // images
      chevron: 'light-chevron_right',
      logo: 'light-logo',
      lilaPlus: 'light-lila-plus',
      houseIcon: 'light-house_siding',
      importantIcon: 'light-important',
      activeImportantIcon: 'light-active_important',
      taskListIcon: 'light-task_icon',
      searchIcon: 'light-search',
      userPic: 'light-name',
      deleteIcon: 'light-delete',
      sunIcon: 'light-sun',
      moonIcon: 'light-moon',
    },

    Dark: {
      primaryColor: '#9373FF',
      onPrimaryColor: '#FFFFFF',
      onPrimaryContainerColor: '#E5DEFF',
      primaryBackground: '#252429',
      primaryInverseColor: '#5946D2',
      primaryVariantDarkColor: '#CBBEFF',
      primarySelected: 'rgba(200, 191, 255, 0.08)',
      primaryVariantLightColor: '#544794',
      surfaceColor: '#201F24',
      surfaceVariantColor: '#49454F',
      secondaryBackground: 'rgba(37, 36, 41, 0.9)',
      secondaryContainerColor: '#474459',
      onSurfacePressedBrush: 'rgba(230, 225, 229, 0.12)',
      onSurfaceLowBrush: 'rgba(230, 225, 229, 0.38)',
      onSurfaceHoverBrush: 'rgba(230, 225, 229, 0.08)',
      onSurfaceColor: '#E6E1E5',
      onSurfaceMediumBrush: 'rgba(230, 225, 229, 0.6)',
      onSurfaceDraggedBrush: 'rgba(230, 225, 229, 0.16)',
      onSurfaceVariantColor: '#CAC4D0',
      inverseSurfaceColor: '#313033',
      errorColor: '#F85977',
      onErrorColor: '#ffffff',
      outline: '#79747E',
      // images
      chevron: 'dark-chevron_right',
      logo: 'dark-logo',
      lilaPlus: 'dark-lila-plus',
      houseIcon: 'dark-house_siding',
      importantIcon: 'dark-important',
      activeImportantIcon: 'dark-active_important',
      taskListIcon: 'dark-task_icon',
      searchIcon: 'dark-search',
      userPic: 'dark-name',
      deleteIcon: 'dark-delete',
      sunIcon: 'dark-sun',
      moonIcon: 'dark-moon',
    },
    color: 'Blue',
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
