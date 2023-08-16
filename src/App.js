import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignInPage from '../src/components/SignInPage'
import SignUpPage from '../src/components/SignUpPage'

import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import LatestNewsPage from './components/LatestNewsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">ABC IT</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Courses</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link className='nav-link' to="/contactUs">Contact Us </Link> </li>
                    <li><Link className='nav-link' to="/aboutUs">About Us </Link> </li>
                    <li> <Link className='nav-link' to="/latestNews">Latest News </Link> </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link className='nav-link' to="/singup">Sign up</Link>
                </li>
                <li class="nav-item">

                  <Link className='nav-link' to="/singin">Sign In</Link>


                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>

          <Route path='/singin' element={<SignInPage />}></Route>
          <Route path='/singup' element={<SignUpPage />}></Route>
          <Route path='/contactUs' element={< ContactUsPage />}></Route>
          <Route path='/aboutUs' element={<AboutUsPage />}></Route>
          <Route path='/latestNews' element={<LatestNewsPage />}></Route>


        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
