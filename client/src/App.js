import './App.css';
import PreviewPage from './pages/PreviewPage/PreviewPage';
import { Route, Routes } from "react-router-dom"
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import CoursePage from './pages/CoursePage/CoursePage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<PreviewPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/registration' element={<RegistrationPage />}></Route>
      <Route path='/students' element={<StudentsPage />} />
      <Route path='/course/:id' element={<CoursePage />} />
    </Routes>
  );
}

export default App;
