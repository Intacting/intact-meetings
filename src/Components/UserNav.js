import React, { useState } from "react";
import "../assets/userStyle.css";
import Image from "../assets/Image/proaxiom-symbol+text.png";
import logo from "../assets/Image/proaxiom-logo.png";
const UserNav = () => {
  return (
    <>
      <header className="user-nav">
        
        <nav class="navbar navbar-expand-md navbar-light nav-bar-padding" >
        <div className="user-nav-a" style={{marginLeft : "inherit"}}>
          <a type="base" className="name header-name" href="/intact-meetings/user">
            <div
              className="logo-display user-nav-logo"
              data-testid="logo"
              width="auto"
            >
              <img
                src={Image}
                height="40px"
                style={{ height: "20px" }}
                alt="Calendly logo"
                width="auto"
                className="logo-img"
              />
              <img src={logo}
              alt="logo"
              className="logo-small"/>
            </div>
          </a>
         
            
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className=" navbar-nav user-nav-ul">
            <li>
              <a className="usernav-name">Home</a>
            </li>
            <li>
              <a className="usernav-name">Availability</a>
            </li>
            <li>
              <a className="usernav-name">Integrations</a>
            </li>
            <li>
              <div class="dropdown">
                <div>
                  <a
                    className="usernav-name  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Help
                  </a>
                  <div
                    aria-labelledby="dropdownMenuButton"
                    className="setting-display setting-display-a setting-display-b setting-display-c nav-help dropdown-menu"
                    style={{ minWidth: "170px", fontSize: "8" }}
                  >
                    <div className="dropdown-item">
                      <a className="setting-display-button">
                        <div className="setting-display-button-a">
                          <i class="fa fa-external-link"></i> Help Center
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-item">
                      <a className="setting-display-button">
                        <div className="setting-display-button-a">
                          <i class="fa-regular fa-message"></i> Chat with us
                          Note
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className=" dropdown usernav-li-last">
                <a
                  className="usernav-li-last-abc dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="usernav-li-last-button">
                    <div className="usernav-li-last-button-a">
                      <span>S</span>
                    </div>
                  </div>
                  <a className="usernav-name" style={{ padding: "20px 7px" }}>
                    Account
                  </a>
                </a>

                <div
                  className="setting-display setting-display-a setting-display-b setting-display-c nav-account dropdown-menu"
                  style={{ minWidth: "314px", fontSize: "8" }}
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-solid fa-user"></i> Account
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa fa-credit-card"></i> Billing Note
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-regular fa-calendar"></i> Calender
                        Connections
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-solid fa-user-group"></i> Admin Managment
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-solid fa-lock"></i> Organization Settings
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-solid fa-chart-column"></i> Analytics
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-solid fa-link"></i> Share Your Link
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-solid fa-th-large"></i> Apps
                      </div>
                    </a>
                  </div>
                  <div className=" dropdown-item setting-display-border">
                    <a className="setting-display-button">
                      <div className="setting-display-button-a">
                        <i class="fa-solid fa-right-from-bracket"></i> Logout
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </div>
          </nav>
        
      </header>
    </>
  );
};
export default UserNav;
