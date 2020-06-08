import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = props => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row mt-4 pt-3">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 pt-2">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
