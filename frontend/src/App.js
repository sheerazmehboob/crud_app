import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Students from './components/Students';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students/>}></Route>
          <Route path='/create' element={<CreateStudent/>}></Route>
          <Route path='/update/:id' element={<UpdateStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
