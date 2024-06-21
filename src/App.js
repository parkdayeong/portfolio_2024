import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import Home from './components/pages/Home';
import ProjectsPage from './components/pages/ProjectsPage';
import BlogPage from './components/pages/BlogPage';
import ProjectDetail from './components/pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={AboutPage} />
      {/* <Route exact path='/projects' component={ProjectsPage} /> */}
      <Route exact path='/projects/:name' component={ProjectDetail} />
      <Route exact path='/blog' component={BlogPage} />
    </BrowserRouter>
  );
}

export default App;
