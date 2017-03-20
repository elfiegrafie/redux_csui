import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SkyLight from 'react-skylight';

import PostImage from './postimage';
import ActionButtons from './actionButtons';

const Photo = React.createClass({

	renderTags(tag, i) {
		return (
			<span key={i} className="tag">{tag.name}</span>
		)
	},

	render(){

		return (
			<div className="list-post">
				<figure className="grid-figure">
					<PostImage post={this.props.post} />
					<Link onClick={() => this.refs.simpleDialog.show()} to={`/view/${this.props.post.code}`}>
					<figcaption>
							<p  className="post-title">
								{this.props.post.title}
							</p>
							<div className="tags-list">{this.props.post.postHasTags.map(this.renderTags )} </div>

							{this.props.post.body}

					</figcaption>
					</Link>
					<ActionButtons {...this.props} />
				</figure>
				<div className="post-infos">
					<Link to={this.props.post.link}>{this.props.post.link}</Link><br/>
					<span  className="post-title">
						{this.props.post.title}
					</span>
				</div>
				<SkyLight hideOnOverlayClicked ref="simpleDialog" >
					<PostImage post={this.props.post} />
					<div className="post-description">
						<span className="post-title">
								{this.props.post.title}
						</span>
						<ActionButtons {...this.props} />
						<p  className="post-body">
							{this.props.post.body}
						</p>
						<Link to={this.props.post.link}>{this.props.post.link}</Link><br/>
						<h4>Tags</h4>
						<div className="tags-list">{this.props.post.postHasTags.map(this.renderTags )} </div>
					</div>
				</SkyLight>
			</div>
		)
	}
});

export default Photo;