import React from 'react';

const Sidebar = props => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar position-fixed h-100 px-0">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file"></span>
              Orders
          </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Products
          </a>
          </li>
        </ul>
      </div>
    </nav>
  );  
};

export default Sidebar;
