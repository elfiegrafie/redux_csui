// a reducer takes in  things:
//  - the action (what happened)
//  - the copy of the current state
//
//

function postsReducer( state = [], action ) {

	switch(action.type) {
		case "INCREMENT_LIKES": {
			console.log("increment");
			return [
				...state.slice(0,action.index),
				{...state[action.index], totalLikes: state[action.index].totalLikes +1, isLikedByUser:true },
				...state.slice(action.index+1),
			]
			break;
		}
		case "DECREMENT_LIKES": {
			console.log("decrement");
			return [
				...state.slice(0,action.index),
				{...state[action.index], totalLikes: state[action.index].totalLikes -1, isLikedByUser:false },
				...state.slice(action.index+1),
			]
			break;
		}
		default: {
			return state;
		}
	}
	return state;
}

export default postsReducer;