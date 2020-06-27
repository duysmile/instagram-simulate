import React from 'react';
import { withRouter } from 'react-router-dom';

import { Header, Menu } from './style';

const Navbar = props => {
  const { logout, history } = props;

  const clickLogout = (e) => {
    e.preventDefault();
    logout();
    history.push(`/login`);
  };

  return (
    <Header>
      <Menu>
        <div className="logo item-nav">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo" />
        </div>
        <form className="search">
          <input type="text" placeholder="Tìm kiếm" />
          <span className="icon-search">
            <i className="fa fa-search"></i>
          </span>
          <span className="icon-exit">
            <i className="fa fa-times-circle"></i>
          </span>
        </form>
        <div className="actions item-nav">
          <a href="#" className="icon-button">
            <svg aria-label="Trang chủ" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48"
              width="22">
              <path
                d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">
              </path>
            </svg>
          </a>
          <a href="#" className="icon-button">
            <svg aria-label="Direct" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
              <path
                d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z">
              </path>
              <path d="M14.7 48.4l2.9-.7"></path>
            </svg>
          </a>
          <a href="#" className="icon-button">
            <svg aria-label="Tìm người" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48"
              width="22">
              <path clip-rule="evenodd"
                d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"
                fill-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="icon-button">
            <svg aria-label="Nguồn cấp dữ liệu hoạt động" fill="#262626" height="22" viewBox="0 0 48 48"
              width="22">
              <path clip-rule="evenodd"
                d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                fill-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="avatar">
            <img src="https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-19/s150x150/89941862_841433836338586_7049665289935388672_n.jpg?_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_ohc=oKfF7NY067oAX9uf-c_&oh=74996b94eb0b65c921f2fa059e0a2364&oe=5EA5BA64"
              alt="" />
          </a>
        </div>
      </Menu>
    </Header>
  );
};

export default withRouter(Navbar);
