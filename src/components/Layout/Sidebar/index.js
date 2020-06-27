import { connect } from 'react-redux';

import actions from 'modules/auth/actions';
import Sidebar from './Sidebar';

const mapStateToProps = state => ({
  // token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(actions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
