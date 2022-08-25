import { initialContentState as listsContent } from '../content/contentReducer';
import { SHOW_SETTINGS, CHANGE_MODE, SHOW_PANEL_TODO,
          SELECT_TODO_ID, SELECT_LIST_ID, 
          SET_ACTIVE_TAB, SEARCH_STRING } from './actions';

const lists = listsContent.content

export const initialInterfaceState = {
  settingsShow: false,
  settings: {
    mode: 'light',
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
