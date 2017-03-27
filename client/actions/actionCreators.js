import promise from 'redux-promise-middleware';

// increment likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}

// increment likes
export function decrement(index) {
	// return dispatch => {
	// 	setTimeout( () =>{
	// 		dispatch({
	// 			type: 'DECREMENT_LIKES',
	// 			index: index
	// 		});
	// 	}
	// 	,2000);
	// }
	return {
		type: 'DECREMENT_LIKES',
		index: index
	}
// 	const zindex = index;
// 	const p1 = new Promise( (resolve, reject) => {
// 		setTimeout( ()=>{
// 			resolve(zindex);
// 		}, 2000);
// 	});
// 	p1.then(
// 		function(zindex) { 
// 			return {
// 				type: 'DECREMENT_LIKES',
// 				index: zindex
// 			}
// 	});
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId: postId,
		author: author,
		comment: comment
	}
}

//  remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId: postId,
		i: i
	}
}

