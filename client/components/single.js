import React from 'react';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
	render(){
		// index of the post
		const i = this.props.posts.findIndex( (post) => post.code === this.props.params.postId);
		console.log(i);
		// get us the post
		const post = this.props.posts[i];
		const postComments = this.props.comments[this.props.params.postId] || [];
		return (
			<div className="single-photo">
				<Photo {...this.props}  i={i} post={post} />
				<Comments {...this.props} comments={postComments} />
			</div>
		)
	}
});

export default Single;