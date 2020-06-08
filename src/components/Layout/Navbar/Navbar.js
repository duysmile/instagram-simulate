import React from 'react';
import { withRouter } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

const Navbar = props => {
  const { logout, history } = props;

  // const tokenInfo = jwtDecode(token);
  // const role = tokenInfo.role;

  const clickLogout = (e) => {
    e.preventDefault();
    logout();
    history.push(`/login`);
  };

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <a className="navbar-brand" href="index.html">
          <img className="logo_icon" src="../assets/images/logo_icon.png"/>
          {/*<img className="logo" src="images/logo_icon.png"/>*/}
        </a>
        <div className="mobile_menu">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="icon-menu icons"></span>
          </button>
          <a href="#" className="navbar-toggler" data-toggle="collapse" data-target="#navbarheader"
             aria-controls="navbarheader" aria-expanded="false" aria-label="Toggle navigation"><i
              className="icon-options-vertical"></i></a>
        </div>
        <div className="collapse navbar-collapse" id="navbarheader">
          <ul className="navbar-nav">
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link text-center menubar" id="sidenavToggler">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </a>
            </li>
            <li className="nav-item">
              <a href="javascript:void(0)" className="search_icon"><i className="fa fa-search"></i></a>
              <form className="form-inline search_input">
                <div className="input-group">
                  <input className="form-control" type="text" placeholder="Search for..."/>
              <span className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </span>
                </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item dropdown menu_user">
              <a className="nav-link dropdown-toggle" id="userDropdown" href="#" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <span className="user_img"><img src="images/user4.jpg" alt="user4"/></span> Profile</a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <ul className="menu-nav list_none">
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <button className="btn btn-default" data-toggle="modal" data-target="#exampleModal" onClick={clickLogout}><i className="icon-logout icons"></i>Logout</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse navbar-sidenav fc-scroll" id="navbarResponsive">
          <ul className="navbar-nav" id="exampleAccordion">
            <li className="nav-item">
              {/*<a className="nav-link" href="index.html">*/}
              {/*  <i className="icon-grid icons"></i>*/}
              {/*  <span className="nav-link-text">Dashboard</span>*/}
              {/*</a>*/}
            </li>
          </ul>
        </div>

      </nav>
  );
};

export default withRouter(Navbar);
