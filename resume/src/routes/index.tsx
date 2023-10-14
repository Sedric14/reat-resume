import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Skills from './skills';
import Experience from './experience';
import Education from './education';

const About = lazy(() => import('./about'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="about"
      element={
        <Suspense fallback={<Spin />}>
          <About />
        </Suspense>
      }
    />
    <Route path="skills" element={<Skills />} />
    <Route
      path="experience"
      element={
        <Suspense fallback={<Spin />}>
          <Experience />
        </Suspense>
      }
    />
    <Route path="education" element={<Education />} />
  </Routes>
);

export default Router;
