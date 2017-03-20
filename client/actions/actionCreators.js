// increment likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}

// increment likes
export function decrement(index) {
	return {
		type: 'DECREMENT_LIKES',
		index: index
	}
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

