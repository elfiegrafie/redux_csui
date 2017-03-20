import React from 'react';

// import components
import Header from './header';
import Single from './single';
import PhotoGrid from './photogrid';

const Main = React.createClass({
	render(){
		return (
			<div>
				<Header  />
				<PhotoGrid  {...this.props} />

			</div>
		)
	}
});

export default Main;