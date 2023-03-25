import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/react.svg'

interface IsActive {
  isActive: boolean;
}

const About = () => (
  <div className='main-layout'>
    <h1>About Page</h1>
  </div>
)

const Home = () => (
  <div className='main-layout'>
    <h1>Home Page</h1>
  </div>
)

const setActive = ({ isActive }: IsActive) => isActive ? 'nav-active' : '';

export const Navigation = () => {

  
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={ logo } alt="React Logo" />

          <ul>
            <li>
              <NavLink to='/' className={ setActive }>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={ setActive }>About</NavLink>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path='/about' element={ <About /> }/>
          <Route path='/' element={ <Home /> }/>

          <Route path='/*' element={ <Navigate to='/' replace /> }/>
        </Routes>

      </div>
      
    </BrowserRouter>
  )
}

