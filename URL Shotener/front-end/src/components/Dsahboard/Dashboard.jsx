import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import CreateShortUrl from './CreateShortUrl';
import UrlList from './UrlList';
import Stats from './Stats';

const Dashboard = () => {
  let match = useMatch("/dashboard/*");

  return (
    <div>
      <Routes>
        <Route path={`${match.pathnameBase}/create`} element={<CreateShortUrl />} />
        <Route path={`${match.pathnameBase}/urls`} element={<UrlList />} />
        <Route path={`${match.pathnameBase}/stats`} element={<Stats />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
