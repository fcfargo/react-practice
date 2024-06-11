import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import Header from './Header';

const SuervyNew = () => <h2>ServeyNew</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div className="container">
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <div>
                  <Header />
                  <Outlet />
                </div>
              }
            >
              <Route path="/" element={<Landing />} />
              <Route path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SuervyNew />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
