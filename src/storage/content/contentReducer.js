import { TODO_ADD, TODO_COMPLETE, TODO_IMPORTANT, TODO_SELECTED, TODO_DELETE,
        CHANGE_DATE, CHANGE_NOTE, CHANGE_TITLE,
        ADD_LIST, CHANGE_HEADER, DELETE_LIST } from './actions';
import { CreateDate } from '../../helpers';


const initialState = {
  content: [
    // {
    //   id: 44444,
    //   header: 'Task list',
    //   todos: [
    //     {
    //       id: '11111',
    //       title: 'Todo 1',
    //       note: 'Do something important',
    //       date: CreateDate(),
    //       createDate: CreateDate(),
    //       completed: true,
    //       important: true,
    //       selected: false,
    //     },
    //     {
    //       id: '22222',
    //       title: 'Todo 2',
    //       note: 'Do something important',
    //       date: CreateDate(),
    //       createDate: CreateDate(),
    //       completed: true,
    //       important: true,
    //       selected: false,
    //     },
    //     {
    //       id: '33333',
    //       title: 'Todo 3',
    //       note: 'Do something',
    //       date: CreateDate(),
    //       createDate: CreateDate(),
    //       completed: true,
    //       important: true,
    //       selected: false,
    //     },
    //   ]
    // },
  ]
}

function contentReducer(state = initialState, {type, payload}) {
  switch(type){

    case TODO_ADD:
      return {
        ...state,
          content: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos.push({
                id: Date.now(),
                title: payload.title,
                note: 'no notes',
                date: Date.now(),
                createDate: Date.now(),
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
              })
            }
            return list;
          })
        }

    case TODO_IMPORTANT:
      return {
        ...state,
        сontent: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos.map(todo => {
                if(todo.id === payload.todoId){
                  todo.important = !todo.important;
                }
              })
            }
            return list;
          })
        }

    case TODO_SELECTED:
      return {
        ...state,
        content: state.content.map(list => {
          if(list.id === payload.listId) {
            list.todos.map(todo => {
              if(todo.id === payload.todoId){
                todo.selected = true;
              } else {
                todo.selected = false;
              }
            })
          } else {
            list.todos.map(todo => todo.selected = false)
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
                })
              }
              return list;
            })
          }     

      case CHANGE_TITLE:
        return {
          ...state,
          сontent: state.content.map(list => {
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