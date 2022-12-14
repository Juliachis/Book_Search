import SearchPage from 'entities/SearchPage';
import PageLayout from 'layouts/MainLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
