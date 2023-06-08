import { Route, Routes } from 'react-router-dom';
import './CSS/main.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Layout from './pages/Layout';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
