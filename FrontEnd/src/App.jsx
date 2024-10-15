import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPages from './Components/LoginSignupPage'
import './App.css'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<AuthPages/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
