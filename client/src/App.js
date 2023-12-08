import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar'

//Web pages
import Homepage from './Pages/homepage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
