import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';


const mapStateToProps = (state)=>{
	return {
		posts: state.posts,
		comments : state.comments
	}
}


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);