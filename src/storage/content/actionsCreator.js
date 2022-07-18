import { TODO_ADD, TODO_COMPLETE, TODO_IMPORTANT, TODO_SELECTED, TODO_DELETE,
				CHANGE_HEADER, CHANGE_DATE, CHANGE_TITLE, CHANGE_NOTE } from './actions';

// function todoAdd(listId, ) {
//   return {
//     type: TODO_COMPLETE, 
//     payload: {
//       listId,
//       todoId,
//     }
//   }
// }

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

function todoSelected(listId, todoId) {
	return {
		type: TODO_SELECTED,
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

function changeHeader(listId, header) {
	return {
		type: CHANGE_HEADER,
		payload: {
			listId,
			header,
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

export {todoComplete, todoImportant, todoSelected, todoDelete, 
				changeHeader, changeDate, changeTitle, changeNote};