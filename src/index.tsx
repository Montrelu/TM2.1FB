

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Questions from "./components/Questions"
import QuestionsT from "./components/QuestionsT"
import Register from "./components/Register"
import Login from './components/Login'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
   <Login />
  </BrowserRouter>);
