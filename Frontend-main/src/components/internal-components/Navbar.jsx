import React from "react";

function Navbar() {
  return (
    <>
      <div className=" z-20 px-10 fixed top-0 right-0 w-full shadow-2xl bg-white">
        <div className="navbar bg-base-100 md:mx-0 -mx-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56 mx-2"
              >
                <li>
                  <a className="hover:bg-amber-300" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:bg-amber-300" href="/About">
                    About
                  </a>
                </li>
                <li>
                  <details>
                    <summary className="hover:bg-amber-300">
                      News & event
                    </summary>
                    <ul className="p-2 ">
                      <li>
                        <details>
                          <summary className="hover:bg-amber-300">
                            Event
                          </summary>
                          <ul>
                            <li>
                              <a
                                className="hover:bg-amber-300"
                                href="/Events/k-12"
                              >
                                K-12
                              </a>
                            </li>
                            <li>
                              <a
                                className="hover:bg-amber-300"
                                href="/Events/Chem_e_versary"
                              >
                                Chem-E-Versary
                              </a>
                            </li>
                            <li>
                              <a
                                className="hover:bg-amber-300"
                                href="/Events/Urjaexperience"
                              >
                                UrjaXperience
                              </a>
                            </li>
                            <li>
                              <a
                                className="hover:bg-amber-300"
                                href="/Events/Others"
                              >
                                Others
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <a
                          className="hover:bg-amber-300"
                          href="/Events/Achievements"
                        >
                          Achievements
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:bg-amber-300"
                          href="/Events/Affairs"
                        >
                          External Affairs
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="hover:bg-amber-300">Team</summary>
                    <ul className="p-2 ">
                      <li>
                        <a className="hover:bg-amber-300" href="/Team/leaders">
                          Leaders
                        </a>
                      </li>
                      <li>
                        <a className="hover:bg-amber-300" href="/Team/Officers">
                          Officers
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <div className="indicator hover:bg-amber-300 ">
                    <span className="indicator-item badge badge-info">new</span>
                    <a href="/Latest">Latest</a>
                  </div>
                </li>
                <li>
                  <a className="hover:bg-amber-300" href="/Contact">
                    Contact us
                  </a>
                </li>
                <div className="navbar-end flex lg:hidden p-2 mx-4">
                  <a
                    className="btn bg-amber-300 text-amber-800 hover:bg-amber-400"
                    href="/Registration"
                  >
                    REGISTER
                  </a>
                </div>
              </ul>
            </div>
            <img src="../../logo.png" className="h-6"></img>
            <a className="btn btn-ghost text-xl hover:bg-transparent" href="/">
              AIChE RGIPT
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <a className="hover:bg-amber-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:bg-amber-300" href="/About">
                  About
                </a>
              </li>
              <li>
                <details>
                  <summary className="hover:bg-amber-300">News & event</summary>
                  <ul className="p-2 ">
                    <li>
                      <details>
                        <summary className="hover:bg-amber-300">Event</summary>
                        <ul>
                          <li>
                            <a
                              className="hover:bg-amber-300"
                              href="/Events/k-12"
                            >
                              K-12
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover:bg-amber-300"
                              href="/Events/Chem_e_versary"
                            >
                              Chem-E-Versary
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover:bg-amber-300"
                              href="/Events/Urjaexperience"
                            >
                              UrjaXperience
                            </a>
                          </li>
                          <li>
                            <a
                              className="hover:bg-amber-300"
                              href="/Events/Others"
                            >
                              Others
                            </a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <a
                        className="hover:bg-amber-300"
                        href="/Events/Achievements"
                      >
                        Achievements
                      </a>
                    </li>
                    <li>
                      <a className="hover:bg-amber-300" href="/Events/Affairs">
                        External Affairs
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="hover:bg-amber-300">Team</summary>
                  <ul className="p-2 ">
                    <li>
                      <a className="hover:bg-amber-300" href="/Team/leaders">
                        Leaders
                      </a>
                    </li>
                    <li>
                      <a className="hover:bg-amber-300" href="/Team/Officers">
                        Officers
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <div className="indicator hover:bg-amber-300 ">
                  <span className="indicator-item badge badge-info">new</span>
                  <a href="/Latest">Latest</a>
                </div>
              </li>

              <li>
                <a className="hover:bg-amber-300" href="/Contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <a
              className="btn bg-amber-300 text-amber-800 hover:bg-amber-400"
              href="/Registration"
            >
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
