import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddStudent from './pages/AddStudentPage';
import EditStudent from './pages/EditStudent';
import NotFoundPage from './pages/NotFoundPage';
import DeleteStudent from './pages/DeleteStudent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
        <Routes>
        <Route path='/' element={<HomePage />} > </Route>
        <Route path='/student' element={<AddStudent />}></Route>
        <Route path='/student/:id' element={<EditStudent/>}></Route>
        <Route path='/student/delete/:id' element={<DeleteStudent/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    

      </BrowserRouter>
  );
}


export default App;
