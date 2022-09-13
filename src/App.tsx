import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/PageLayout';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="*" element={<div>Test</div>} />
        <Route path="/test" element={<div>Test in progress</div>} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
