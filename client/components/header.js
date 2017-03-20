import React, { Component } from 'react';
import { Link } from 'react-router';


const Header = React.createClass({
	render() {
		return (
			<header>
				<div className="container">
      				<div className="row">
      					<div className = "col-3">
      						
      					</div>
      					<div className = "col-9">
						    <nav className="navbar">
						        <div className="navbar-header">
						          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						            <span className="sr-only">Toggle navigation</span>
						            <span className="icon-bar"></span>
						            <span className="icon-bar"></span>
						            <span className="icon-bar"></span>
						          </button>
						        </div>
						        <div id="navbar" className="navbar-collapse collapse">
						          <form className="navbar-form navbar-right" >
						            <div className="form-group">
										<input type="text" className="form-control" placeholder="Find a page or block type in a page" />
										<button type="submit" className="input-group-addon">X</button> 
						            </div>
						          </form>
						        </div>
						    </nav>
						</div>
					</div>
				</div>	
			</header>
		);
	}
});

export default Header;
