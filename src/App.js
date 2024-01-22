import { useState } from "react";
import mobile from "./images/image-hero-mobile.png";
import desktop from "./images/image-hero-desktop.png";
import audiophile from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import logo from "./images/logo.svg";
import chevronDown from "./images/icon-arrow-down.svg";
import chevronUp from "./images/icon-arrow-up.svg";
import menuOpen from "./images/icon-menu.svg";
import closeMenu from "./images/icon-close-menu.svg";
import todolist from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import reminders from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";

function App() {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start">
          <img src={logo} className="lg:mr-5" alt="" />
          <nav className="navbar">
            <div>
              <button
              onClick={() =>setOpenFeatures(!openFeatures)}
              className="flex items-center justify-start"
              >
                Features{" "}
                {openFeatures ? (
                  <img src={chevronDown} alt="" className="ml-2" />
                ) : (
                  <img src={chevronUp} alt="" className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={todolist} alt="" className="mr-2" /> Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={calendar} alt="" className="mr-2" /> Calendar
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={reminders} alt="" className="mr-2" /> Reminders
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={planning} alt="" className="mr-2" /> Planning
                  </li>
                </ul>
              )}
            </div>
            <div>
              <button
                className="flex items-center justify-start"
                onClick={() => setOpenCompany(!openCompany)}
              >
                Company{" "}
                {openCompany ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0  lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0">
              <button>Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default App;
