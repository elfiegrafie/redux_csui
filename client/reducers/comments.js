// a reducer takes in  things:
//  - the action (what happened)
//  - the copy of the current state
//
//


function postComments( postComment = [], action ) {

	switch(action.type) {
		case "ADD_COMMENT": {
			const newcom = {
				user: action.author,
				text: action.comment
			};
			return [ ...postComment,newcom]

			break;
		}
		case "REMOVE_COMMENT": {
			console.log("removing comment")
			return [ 
				...postComment.slice(0, action.i),
				...postComment.slice(action.i +1)
			]
			break;
		}
		default: {
			return postComment;
		}
	}
	return postComment;
}

function commentsReducer( state = [], action ) {
	if (typeof action.postId !== 'undefined') {
		return {
			// take the current state
			...state,
			// override the current post with a new one
			[action.postId]: postComments(state[action.postId] , action)
		}

	}
	return state;
}

export default commentsReducer;