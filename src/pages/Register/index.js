import { connect } from 'react-redux';
import actions from 'modules/auth/actions';
import Register from './Register';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  errorRegister: state.auth.error,
  isRegisterSuccess: state.auth.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  register: (username, password, email) => dispatch(actions.register({ username, password, email }, ownProps.history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
