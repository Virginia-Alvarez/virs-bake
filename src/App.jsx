import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './componets/Landing';
import Home from './componets/Home';
import './styles/app.scss';





function App() {


  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
