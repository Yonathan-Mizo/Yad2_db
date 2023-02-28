import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './features/header';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div>
      <Header></Header>
    </div>
    // <Router>
    // <div className='container'>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //   </Routes>
    // </div>
    // </Router>
    
  )
}

export default App;
