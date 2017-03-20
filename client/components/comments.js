import React from 'react';

const Comments = React.createClass({

	createComment(event){
		// prevent the default action of submiting form
		event.preventDefault();
		// store in a variable the message and properties of what is submitted
		// text : this.comment.value;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		const postId = this.props.params.postId;

		// add the new message to the store
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	},

	renderComment(comment, i) {
		console.log(comment);
		console.log(i);
		return (
			<div key={i} className="comment">
				<p>
					<strong>{comment.user} : </strong>{comment.text}
					<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} >&times;</button>
				</p>
			</div>
		)
	},

	render(){

		return (
			<div className="comments">
				{this.props.comments.map(this.renderComment )}
				<form
					className="comment-form"
					onSubmit={(event) => this.createComment(event)}
					ref="commentForm"
				>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
});

export default Comments;