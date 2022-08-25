import { TODO_ADD, TODO_COMPLETE, TODO_IMPORTANT, TODO_DELETE,
				CHANGE_DATE, CHANGE_TITLE, CHANGE_NOTE,
				ADD_LIST, DELETE_LIST, CHANGE_HEADER } from './actions';


function todoAdd(listId, title, important) {
  return {
    type: TODO_ADD, 
    payload: {
      listId,
			title,
			important,
    }
  }
}

function todoComplete(listId, todoId) {
  return {
    type: TODO_COMPLETE, 
    payload: {
      listId,
      todoId,
    }
  }
}

function todoImportant(listId, todoId) {
	return {
		type: TODO_IMPORTANT,
		payload: {
			listId,
			todoId,
		}
	}
}

function todoDelete(listId, todoId) {
	return {
		type: TODO_DELETE,
		payload: {
			listId,
			todoId,
		}
	}
}

function changeDate(listId, todoId, date) {
	return {
		type: CHANGE_DATE,
		payload: {
			listId,
			todoId,
			date,
		}
	}
}

function changeTitle(listId, todoId, title) {
	return {
		type: CHANGE_TITLE,
		payload: {
			listId,
			todoId,
			title,
		}
	}
}

function changeNote(listId, todoId, note) {
	return {
		type: CHANGE_NOTE,
		payload: {
			listId,
			todoId,
			note,
		}
	}
}

function addList(header){
	return {
		type: ADD_LIST,
		payload: {
			header,
		}
	}
}

function changeHeader(listId, header) {
	return {
		type: CHANGE_HEADER,
		payload: {
			listId,
			header,
		}
	}
}

function deleteList(listId) {
	return {
		type: DELETE_LIST,
		payload: {
			listId,
		}
	}
}

export {todoAdd, todoComplete, todoImportant, todoDelete, 
				changeDate, changeTitle, changeNote,
				addList, changeHeader, deleteList};