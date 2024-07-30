import React from 'react';
import Stats from '../components/Dashboard/Stats';
import UrlList from '../components/Dashboard/UrlList';
import CreateUrl from '../components/Dashboard/CreateUrl';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CreateUrl />
      <Stats />
      <UrlList />
    </div>
  );
};

export default DashboardPage;
