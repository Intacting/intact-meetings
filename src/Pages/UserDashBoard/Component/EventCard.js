import React, { useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
const EventCard = (props) => {
  return (
    <>
    
      <div className="event-card">
        <div className="event-card-a event-card-b">
          <Link to="/user/edit_event" className="event-card-button"></Link>
          <div
            className="top-border"
            style={{ backgroundColor: props.color }}
          ></div>
          <div className="event-type-card-control-container">
            <label className="event-type-label">
              <form>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                </div>
              </form>
            </label>
          </div>
          <div className="evt-setting dropdown">
            <button
              className="setting-table setting-table-a evt-setting-a dropdown-toggle"
              type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            >
              <i class="fa-solid fa-gear"></i>
            </button>
              <div
                className="setting-display setting-display-a setting-display-b setting-display-c dropdown-menu"
                style={{ minWidth: "170px" }}
                aria-labelledby="dropdownMenuButton"
              >
                <div className="dropdown-item">
                  <a className="setting-display-button">
                    <div className="setting-display-button-a">
                      <i class="fa-solid fa-pen"></i> Edit
                    </div>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="setting-display-button">
                    <div className="setting-display-button-a">
                      <i class="fa-regular fa-note-sticky"></i> Add Internal
                      Note
                    </div>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="setting-display-button">
                    <div className="setting-display-button-a">
                      <i class="fa-regular fa-clone"></i> Clone
                    </div>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="setting-display-button">
                    <div className="setting-display-button-a">
                      <i class="fa-regular fa-trash-can"></i> Delete
                    </div>
                  </a>
                </div>
                <div className="setting-display-border">
                  <a className="setting-display-button">
                    <div className="setting-display-button-a">
                      On/Off{" "}
                      <label
                        class="switch"
                        style={{ marginLeft: "auto", marginBottom: "0px" }}
                      >
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </a>
                </div>
              </div>
          </div>
          
          <div className="evt-data">
                    <h2 style={{ fontSize : "20px",  marginBottom : "2px"}}>{props.name}</h2>
                    <p style={{ color : "var(--text-color-level2,rgba(26,26,26,0.61))", marginBottom : "6px" }}>
                        30 mins,One-on-One
                    </p>
                    <div style={{ color : "#c59948" }}>View booking page</div>
          </div>
          
          <div className="evt-last">
                <div className="evt-last-a">
                    <a className="d-f">
                    <div className="evt-last-b">
                      <i class="fa-regular fa-clone"></i> Copy link
                    </div>
                    </a>
                </div>
                <div className="evt-last-share">
                <button style={{borderColor : "#c59948", color: "#c59948" ,backgroundColor : "var(--text-color-secondary-4,rgba(255,255,255,1))", fontWeight : "400", minHeight : "31px", padding: "4px 21px"}} className="toptaber-right-button toptaber-right-button-2">
                                    <div className="toptaber-right-button-a">
                                        <span className="toptaber-right-button-plus">
                                        Share
                                        </span>
                                    </div>
                                </button>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventCard;
