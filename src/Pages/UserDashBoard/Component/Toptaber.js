import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tabercontent1 from "./Tabercontent1";
import Tabercontent2 from "./Tabercontent2";
import Tabercontent3 from "./Tabercontent3";
import Tabercontent4 from "./Tabercontent4";
const Toptaber = () => {
  return (
    <>
      <div >
        <Tabs>
          <div className="toptaber">
            <div className="toptaber-a">
              <div className="toptaber-b">
                <div className="mr-a width-44">
                  <div className="toptaber-calendly dropdown">
                    <a
                      className="toptaber-calendly-button mybooking"
                      type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    >
                      <div className="calendly-name">
                        <h1 className="mybooking">My Bookings </h1>
                      </div>
                      <span
                        className="usernav-downarrow"
                        style={{ padding: "10px" }}
                      >
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </a>
                      <div className=" dropdown-menu calendly-open calendly-open-a calendly-open-b " aria-labelledby="dropdownMenuButton">
                        <form 
                          className="filter-form dropdown-item"
                          style={{ borderBottom: "1px solid #e3e9f2" }}
                        >
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
                        <div className="calendly-open-c dropdown-item" style={{ whiteSpace : "inherit" }}>
                          <div className="mb-10">
                            Work together with a proaxiom organization
                          </div>
                          <div className="mb-10">
                            When you add users to your proaxiom organization you
                            can create Team Pages, Team Event, and much more.
                          </div>
                          <div className="mb-10">
                            <a style={{ fontSize: "13px" }} className="golden">
                              Visit your Users page to learn more
                            </a>
                          </div>
                          <a style={{ fontSize: "13px" }} className="golden">
                            Add seats
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="mt-14 dropdown">
                  <button className="toptaber-right-button toptaber-right-button-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="toptaber-right-button-a">
                      <span className="toptaber-right-button-plus">
                        <i
                          class="fa-solid fa-plus"
                          style={{ fontSize: "1rem" }}
                        ></i>{" "}
                        Create
                      </span>
                    </div>
                  </button>
                  <div className="create-open create-open-a calendly-open-b dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="/user/create_event_type" className="create-open-b dropdown-item">
                      <span className="filter-form-c calendly-open-icon"><i class="fa-solid fa-pager"></i></span>
                      <div>
                      <div className="create-open-heading">Event Type</div>
                      <div className="create-open-content">Create a new template for your regularly scheduled events.</div>
                      </div>
                    </Link>
                    <a className="create-open-b dropdown-item">
                      <span className="filter-form-c calendly-open-icon"><i class="fa fa-ticket-simple" style={{ transform: "rotate(310deg)" }}></i></span>
                      <div>
                      <div className="create-open-heading">Event Type</div>
                      <div className="create-open-content">Create a new template for your regularly scheduled events.</div>
                      </div>
                    </a>
                    <a className="create-open-b dropdown-item">
                      <span className="filter-form-c calendly-open-icon"><i class="fa-solid fa-list"></i></span>
                      <div>
                      <div className="create-open-heading">Metting poll <span className="beta">
                        beta
                      </span>
                      </div>
                      <div className="create-open-content">Create a new template for your regularly scheduled events.</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="tabs">
                  <TabList>
                    <Tab className="tab-button" style={{ marginLeft: "0px" }}>
                      Event Types
                    </Tab>
                    <Tab className="tab-button">Schedule Events</Tab>
                    <Tab className="tab-button">Workflows</Tab>
                    <Tab className="tab-button">Routing Forms</Tab>
                  </TabList>
                </div>
              </div>
            </div>
          </div>
          <TabPanel>
            <Tabercontent1 />
          </TabPanel>
          <TabPanel>
            <Tabercontent2/>
          </TabPanel>
          <TabPanel>
            <Tabercontent3/>
          </TabPanel>
          <TabPanel>
            <Tabercontent4/>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Toptaber;
