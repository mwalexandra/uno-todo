import {
  TODO_ADD, 
	TODO_COMPLETE, 
	TODO_IMPORTANT, 
	TODO_DELETE,
	ADD_LIST, 
	DELETE_LIST, 
	CHANGE_HEADER, 
	CHANGE_DATE, 
	CHANGE_TITLE, 
	CHANGE_NOTE,
} from './actions';
import { CreateDate } from '../../helpers/index';
import { v4 as uuidv4 } from 'uuid';

const initialContentState = {
  content: []
}

function contentReducer(state = initialContentState, {type, payload}) {

  switch(type){

    case TODO_ADD:
      return {
        ...state,
          content: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos.push({
                id: uuidv4(),
                title: payload.title,
                important: payload.important,
                completed: false,
                note: 'no notes',
                date: CreateDate(),
                createDate: CreateDate(),
              })
            }
            return list;
          })
        }

    case TODO_COMPLETE:
      return {
        ...state,
          content: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos.map(todo => {
                if(todo.id === payload.todoId){
                  todo.completed = !todo.completed;
                }
                return todo
              })
            }
            return list;
          })
        }

    case TODO_IMPORTANT:
      return {
        ...state,
        content: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos.map(todo => {
                if(todo.id === payload.todoId){
                  todo.important = !todo.important;
                }
                return todo
              })
            }
            return list;
          })
        }
      
      case TODO_DELETE:
        return {
          ...state,
          content: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos = list.todos.filter(todo => todo.id !== payload.todoId)
            } 
            return list;
          })
        }     

      case CHANGE_DATE:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.todos.map(todo => {
                  if(todo.id === payload.todoId){
                    todo.date = payload.date;
                  }
                  return todo
                })
              }
              return list;
            })
          } 

      case CHANGE_NOTE:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.todos.map(todo => {
                  if(todo.id === payload.todoId){
                    todo.note = payload.note;
                  }
                  return todo
                })
              }
              return list;
            })
          }     

      case CHANGE_TITLE:
        return {
          ...state,
          content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.todos.map(todo => {
                  if(todo.id === payload.todoId){
                    todo.title = payload.title;
                  }
                  return todo;
                })
              }
              return list;
            })
          }
          
//lists
      case ADD_LIST: 
        return {
          ...state,
          content: [...state.content, {
              id: Date.now(),
              header: payload.header,
              todos: [],
            }],
        }

      case CHANGE_HEADER:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.header = payload.header
              }
              return list;
            })
          }
          
      
      case DELETE_LIST:
        return {
          ...state,
          content: state.content = state.content.filter(list => list.id !== payload.listId)
        } 

    default: return state;    
  }
}

  export {contentReducer};