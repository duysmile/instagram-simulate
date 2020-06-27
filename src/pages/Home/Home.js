import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Layout/Navbar';
import Sidebar from '../../components/Layout/Sidebar';
import Card from '../../components/Layout/Card';

import {
  MainContainer,
  MainContent,
} from './style';

const Home = props => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <MainContent>
          <Card />
        </MainContent>
        <Sidebar />
      </MainContainer>

    </>
  )
};

export default Home;
