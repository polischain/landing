import React from 'react'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between lg:w-4/6">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src="/img/logo.png" alt="polis" className="w-14"/>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              { navbarOpen ? (<i className="text-white fas fa-times" />) : (<i className="text-white fas fa-bars" />)}

            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? "block rounded shadow-lg" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center text-white text-md">
                <span className="inline-block ml-4">Get Started</span>
              </li>
              <li className="flex items-center text-white text-md">
                <span className="inline-block ml-4">Documentation</span>
              </li>
              <li className="flex items-center text-white text-md">
                <span className="inline-block ml-4">About</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
