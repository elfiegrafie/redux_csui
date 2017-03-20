import React from 'react';

const ActionButtons = React.createClass({

	preRender(){
		if (this.props.post.isLikedByUser) {
			return (
				<div className="control-buttons">
					<button className="like is_liked" onClick={this.props.decrement.bind(null, this.props.i)}>&hearts;&nbsp;{this.props.post.totalLikes} </button>
				</div>
			);
		} else {
			return (
				<div className="control-buttons">
					<button className="like is_notLiked" onClick={this.props.increment.bind(null, this.props.i)} >&hearts;&nbsp;{this.props.post.totalLikes} </button>
				</div>
			);
		}
	},

	render(){
		return(
			this.preRender()
		);
	}
});

export default ActionButtons;