import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../../Components/UserNav";
import GroupEventForm from "./Component/GroupEventFrom";
const AddGroupEvent = () => {
  return (
    <>
      <div className="pass-page">
        <UserNav />
        <div>
          <div className="">
            <div className="add-one-on-one">
              <div className="toptaber-a">
                <div className="add-one-on-one-top">
                  <div>
                    <Link to="/user/create_event_type">
                    <button
                      style={{
                        borderColor: "#c59948",
                        color: "#c59948",
                        backgroundColor:
                          "var(--text-color-secondary-4,rgba(255,255,255,1))",
                        fontWeight: "400",
                        fontSize: "1.05em",
                      }}
                      className="toptaber-right-button toptaber-right-button-2"
                    >
                      <div className="toptaber-right-button-a">
                        <span
                          className="toptaber-right-button-plus"
                          style={{ fontSize: "0.85em" }}
                        >
                          <i
                            class="fa-solid fa-chevron-left"
                            style={{ fontSize: "1rem" }}
                          ></i>{" "}
                          <b className="none">Back</b>
                        </span>
                      </div>
                    </button></Link>
                  </div>
                  <div>
                    <h2 style={{ fontSize: "24px", marginTop: "revert" }}>
                      Add Group Event Type
                    </h2>
                  </div>
                  <div className="add-one-on-one-top-end">
                    <div
                      className="add-one-on-one-top-end-a"
                      style={{
                        color: "var(--text-color-level2,rgba(26,26,26,0.61))",
                      }}
                    >
                      <a>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                        view live page
                      </a>
                    </div>
                    <button className="add-one-on-one-share">Share</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="add-event-form">
            <div className="add-event-setting dropdown">
              <button
                className="setting-table setting-table-a dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ width: "100px" }}
              >
                <i class="fa-solid fa-gear" style={{ marginRight: "10px" }}></i>{" "}
                Setting
              </button>
              <div
                className="setting-display setting-display-a setting-display-b setting-add-one dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="dropdown-item">
                  <a className="setting-display-button" style={{ justifyContent:"space-between" }}>
                        <span className="event-setting-invitee">
                            invitee language:  
                        </span>
                        <div><i class="fa-solid fa-chevron-right"></i></div>
                        
                  </a>
                  <p className="invitee-p"> English</p>
                </div>
                <div className="setting-display-border">
                <a className="setting-display-button">
                    <div className="setting-display-button-a">
                      Event Type On/Off  {"  "}
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
            <GroupEventForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddGroupEvent;