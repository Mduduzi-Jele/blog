import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/navigation.css'

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const signOut = () => {
    localStorage.clear()
    navigate("/")
    window.location.reload();
  }

    return (
      <>
       
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/home">
                  <span className="sr-only">
                    
                  </span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
             
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link
                  to="/home"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  My Post
                </Link>
                <Link
                  to="/create"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Create
                </Link>
                <a
                  onClick={() => signOut()}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign Out
                </a>
                
              </nav>
             
            </div>
          </div>
         
  
          <div
            className={
              open
                ? "navi-open opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                : " opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                    
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  
                </div>
              </div>
              <div className=" py-6 px-5 space-y-6">
                <div className="grid grid-cols- gap-y-4 gap-x-8">
                  <Link
                    to="/home"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    My Posts
                  </Link>
                  <Link
                    to="/create"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Create
                  </Link>
                  <a
                    onClick={() => signOut()}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Sign Out
                  </a>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
export default Navbar