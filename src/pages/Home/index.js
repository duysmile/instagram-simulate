import { connect } from 'react-redux';
import actions from 'modules/auth/actions';
import Home from './Home';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  errorLogin: state.auth.error,
  isRegisterSuccess: state.auth.isRegisterSuccess
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (username, password) => dispatch(actions.login({ username, password }, ownProps.history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
