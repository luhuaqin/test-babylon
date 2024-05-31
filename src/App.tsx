import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { routes } from './router';
import LazyComponent from './components/lazyComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={path === '/' ? <Navigate replace to="/home" /> : <LazyComponent Element={element} />}
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
