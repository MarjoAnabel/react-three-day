import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Contact from '../component/Contact'
import PageSimple from '../component/PageSimple'


function App() {
  return (
    <BrowserRouter>
    <h1>Restaurant</h1>
      <ul>
        <li> 
          <Link to="/" className='App'>
              Home
          </Link>
        </li>
        <li> 
          <Link to="/Contact" className='App'>
              Contact
          </Link>
        </li>
        <li> 
          <Link to="/PageSimple" className='App'>
              Page Simple
          </Link>
        </li>
      </ul>
      <Routes>
      <Route path='/Contact' element= {<Contact/>} />
      <Route path='/PageSimple' element= {<PageSimple/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
