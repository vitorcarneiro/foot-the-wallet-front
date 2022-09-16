import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SelectedThemeProvider } from './contexts/SelectedThemeContext';
import Layout from './layouts/Page';
import Providers from './Providers';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Login</div>} />
      <Route path="/signup" element={<div>SignUp</div>} />
      <Route element={<Layout />}>
        <Route path="/home" element={<div>Hello World</div>} />
        <Route path="/test" element={<div>Test in progress</div>} />
        <Route path="*" element={<div>This page does not exist yet</div>} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <SelectedThemeProvider>
      <BrowserRouter>
        <Providers>
          <App />
        </Providers>
      </BrowserRouter>
    </SelectedThemeProvider>
  );
}
