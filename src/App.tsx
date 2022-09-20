import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SelectedThemeProvider } from './contexts/SelectedThemeContext';
import LoggedInLayout from './layouts/LoggedIn';
import NotLoggedLayout from './layouts/NotLogged';
import Login from './pages/Login';
import Providers from './Providers';

export function App() {
  return (
    <Routes>
      <Route element={<NotLoggedLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<div>SignUp</div>} />
      </Route>

      <Route element={<LoggedInLayout />}>
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
