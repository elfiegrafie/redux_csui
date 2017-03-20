import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PostImage = React.createClass({

	renderImage(){
	},

	render(){

		return (
			<div className="grid-photo-wrap">
				<img src={`http://192.168.0.139:8002/assets/${this.props.post.associatedFile.name}`} alt={this.props.post.caption} className="grid-photo"/>
				<ReactCSSTransitionGroup
					transitionName="like"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}
				>
					<span key={this.props.post.totalLikes} className="likes-heart">
						{this.props.post.totalLikes}
					</span>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
});

export default PostImage;