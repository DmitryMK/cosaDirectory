import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Directory from './Directory';
import About from './About';
import Events from './Events';
import Application from './Application';
import ProjectDescription from './ProjectDescription';
import NotFound from './NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Directory />} />
      <Route path='/about' element={<About />} />
      <Route path='/events' element={<Events />} />
      <Route path='/application' element={<Application />} />
      <Route path='/directory' element={<Directory />} />
      <Route path='/directory/:id' element={<ProjectDescription />} />
      <Route path='/notfound' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
