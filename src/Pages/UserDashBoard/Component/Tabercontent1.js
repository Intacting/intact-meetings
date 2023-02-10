import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Image/coding.png";
import EventCard from "./EventCard";
const Tabercontent1 = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <div className="mtl wrapper overflowing">
              <div>
                <div>
                  <div>
                    <div className="filter-abc">
                      <form className="filter-form">
                        <div className="filter-form-a">
                          <span className="filter-form-b filter-form-c">
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </span>
                          <input
                            className="filter-form-d"
                            placeholder="Filter"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="p-r">
                  <div>
                    <div className="mb-60">
                      <table className="head-table table ">
                        <tbody>
                          <tr>
                            <td className="avatar">
                              <div className="avatar-element">S</div>
                            </td>
                            <td className="user">
                              <div className="f-l">
                                <div className="user-name truncator">
                                  User name
                                </div>
                                <div className="truncator">
                                  <a
                                    style={{
                                      color: "#c59948",
                                    }}
                                  >
                                    proaxiom.in/username-50
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className=" res-event-a action">
                              <div>
                                <div>
                                  <div className="p-r d-if">
                                    <div className="d-f">
                                      <Link to="/user/create_event_type">
                                        <button
                                          style={{
                                            borderColor: "#c59948",
                                            color: "#c59948",
                                            backgroundColor:
                                              "var(--text-color-secondary-4,rgba(255,255,255,1))",
                                            fontWeight: "400",
                                          }}
                                          className="toptaber-right-button toptaber-right-button-2"
                                        >
                                          <div className="toptaber-right-button-a">
                                            <span className="toptaber-right-button-plus">
                                              <i
                                                class="fa-solid fa-plus"
                                                style={{ fontSize: "1rem" }}
                                              ></i>{" "}
                                              New Event Type
                                            </span>
                                          </div>
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="is-settings">
                              <div>
                                <div className="p-r dropdown">
                                  <button
                                    className="setting-table setting-table-a"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i class="fa-solid fa-gear"></i>
                                  </button>
                                  <div
                                    className="setting-display setting-display-a setting-display-b setting-display-c dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <div className="dropdown-item">
                                      <a className="setting-display-button">
                                        <div className="setting-display-button-a">
                                          <i class="fa-solid fa-link"></i> Copy
                                          Link
                                        </div>
                                      </a>
                                    </div>
                                    <div className="dropdown-item">
                                      <a className="setting-display-button">
                                        <div className="setting-display-button-a">
                                          <img
                                            src={image}
                                            alt="icon"
                                            style={{ width: "18px" }}
                                          />{" "}
                                          Add to Website
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="res-event-b p-r d-if">
                        <div className="d-f">
                          <Link to="/user/create_event_type">
                            <button
                              style={{
                                borderColor: "#c59948",
                                color: "#c59948",
                                backgroundColor:
                                  "var(--text-color-secondary-4,rgba(255,255,255,1))",
                                fontWeight: "400",
                              }}
                              className="toptaber-right-button toptaber-right-button-2"
                            >
                              <div className="toptaber-right-button-a">
                                <span className="toptaber-right-button-plus">
                                  <i
                                    class="fa-solid fa-plus"
                                    style={{ fontSize: "1rem" }}
                                  ></i>{" "}
                                  New Event Type
                                </span>
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="workflows-box-section2 d-i"
                        style={{ padding: "0px" }}
                      >
                          <EventCard color="rgb(255, 79, 0)" name="User" />
                       
  
                          <EventCard
                            color="rgb(130, 71, 245)"
                            name="30,Minutes Meeting"
                          />
                          <EventCard
                            color="rgb(23, 232, 133)"
                            name="30,Minutes Meeting"
                          />
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabercontent1;
