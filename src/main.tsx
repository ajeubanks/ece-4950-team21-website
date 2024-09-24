import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ThemeProvider from './context/ThemeContext'; // Import the theme context

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
          <Header />
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}/`} element={<Home />} />
            <Route path={`${import.meta.env.BASE_URL}/about`} element={<About />} />
            <Route path={`${import.meta.env.BASE_URL}/projects`} element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
