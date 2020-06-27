import React from 'react';
import { withRouter } from 'react-router-dom';

import { Sidebar, ItemUser, Stories } from './style';

const Index = props => {
  return (
    <Sidebar>
      <div class="header-sidebar">
        <ItemUser>
          <a href="#" class="avatar large">
            <img src="https://picsum.photos/600/600"
              alt="" />
          </a>
          <div class="info-user">
            <a href="#" class="username">
              duynguyen_123
            </a>
            <span class="status">
              torf
            </span>
          </div>
        </ItemUser>
      </div>

      <Stories>
        <div class="header">
          <span>
            Gợi ý cho bạn
          </span>
          <a href="#">
            Xem tất cả
          </a>
        </div>
        <div class="body friends">
          <div class="story">
            <ItemUser>
              <a href="#" class="avatar gradient-border medium">
                <img src="https://picsum.photos/600/600"
                  alt="" />
              </a>
              <div class="info-user">
                <a href="#" class="username">
                  duynguyen_123
                </a>
                <span class="time-story">
                  Theo dõi ban
                </span>
              </div>
              <a href="#" class="follow-btn">
                Theo dõi
              </a>
            </ItemUser>
          </div>
        </div>
      </Stories>
    </Sidebar>
  );
};

export default Index;
