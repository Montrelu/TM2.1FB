

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
   <Routes>
    <Route path="/login" element={<ThemeProvider theme={darkTheme}><CssBaseline/><Login/></ThemeProvider>}></Route>
    <Route path="/student" element={<ThemeProvider theme={darkTheme}><CssBaseline/><Questions/></ThemeProvider>}></Route>
    <Route path="/register" element={<ThemeProvider theme={darkTheme}><CssBaseline/><Register/></ThemeProvider>}></Route>
    <Route path="/tutor" element={<ThemeProvider theme={darkTheme}><CssBaseline/><QuestionsT/></ThemeProvider>}></Route>
  </Routes>
  </BrowserRouter>);
