import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
