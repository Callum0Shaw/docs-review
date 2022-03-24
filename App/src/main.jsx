import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Doc from './routes/Doc';
import Docs from './routes/Docs';
import Home from './routes/Home';
import NewDoc from './routes/NewDoc'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />}>
            <Route index element={<h1 className="text-black">Index</h1>} />
            <Route path=":docName" element={<Doc />} />
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
