import React from 'react'
import logo from '../images/logo.png';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="navigation relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="logo flex items-center flex-shrink-0 mr-6">
          <a href='#'>
        <img src={logo} alt="logo" />
        </a>
        </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
               <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="navLinkWrapper flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="navItem"
                  href="#"
                >
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItem "
                  href="#"
                >
                 Search
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItem"
                  href="#"
                  style={{color:'#0085e6'}}
                >
                Try Instaread
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="navItem"
                  href="#"
                >
                Login </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
