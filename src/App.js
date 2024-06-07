import logo from './logo.svg';
import './App.css';
import AddAlbum from './Components/AddAlbum';
import SearchAlbum from './Components/SearchAlbum';
import DeleteAlbum from './Components/DeleteAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewallAlbum from './Components/ViewallAlbum';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      <Route path='/search' element={<SearchAlbum/>}/>
      <Route path='/delete' element={<DeleteAlbum/>}/>
      <Route path='/viewall' element={<ViewallAlbum/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
