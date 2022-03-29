import React from 'react';
import ReactDOM from 'react-dom';
import { FaBlackberry } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DocRoute from './routes/DocRoute';
import DocsRoute from './routes/DocsRoute';
import Home from './routes/Home';
import NewDoc from './routes/NewDoc';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<DocsRoute />}>
            <Route index element={<h1 className="text-black">Index</h1>} />
            <Route path=":docName" element={<DocRoute />} />
            <Route path="new" element={<NewDoc />} />
          </Route>
          <Route
            path="*"
            element={
              <h1 className="text-black text-2xl font-semibold absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
                404 not found
              </h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
