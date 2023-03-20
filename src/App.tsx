import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Questions from './components/Questions'
import QuestionsT from './components/QuestionsT'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
export default function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<ThemeProvider theme={darkTheme}><CssBaseline/><Login/></ThemeProvider>}/>
        <Route path="/register" element={<ThemeProvider theme={darkTheme}><CssBaseline/><Register/></ThemeProvider>}/>
        <Route path="/student" element={<ThemeProvider theme={darkTheme}><CssBaseline/><Questions/></ThemeProvider>}/>
        <Route path="/tutor" element={<ThemeProvider theme={darkTheme}><CssBaseline/><QuestionsT/></ThemeProvider>}/>
      </Routes>
      </BrowserRouter>  
    );
}


