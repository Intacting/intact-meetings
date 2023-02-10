import React from "react";
import Cancelapplybutton from "./Cancel-apply-button";
const ScheduleEventFilter = () => {
  return (
    <>
      <div class="collapse" id="filter">
        <div className="filter-list-bar">
          <div className="d-f filter-list-items">
            <div className="filter-list-item">
              <div className="filter-list-item-name">Teams</div>
              <div className="p-r">
                <button
                  className="filter-list-button"
                  type="button"
                  id="allteams"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>All Teams</span>
                  &nbsp;
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div
                  className=" dropdown-menu calendly-open calendly-open-a calendly-open-b "
                  aria-labelledby="allteams"
                >
                  <form
                    className="filter-form dropdown-item"
                    style={{ borderBottom: "1px solid #e3e9f2" }}
                  >
                    <div className="filter-form-a">
                      <span className="filter-form-b filter-form-c">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input className="filter-form-d" placeholder="Filter" />
                    </div>
                  </form>
                  <div className="all-teams-content">
                    <ul className="all-teams-ul">
                      <li className="all-teams-li-heading">Teams</li>
                      <li className="all-teams-li-data">No item found</li>
                    </ul>
                  </div>
                  <div style={{ paddingTop: "13px" }}>
                    <Cancelapplybutton/>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-list-item">
              <div className="filter-list-item-name">Event Types</div>
              <div className="p-r">
                <button
                  className="filter-list-button"
                  type="button"
                  id="eventType"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>All Event Types</span>
                  &nbsp;
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div
                  className=" dropdown-menu calendly-open calendly-open-a calendly-open-b "
                  aria-labelledby="eventType"
                >
                  <form
                    className="filter-form dropdown-item"
                    style={{ borderBottom: "1px solid #e3e9f2" }}
                  >
                    <div className="filter-form-a">
                      <span className="filter-form-b filter-form-c">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input className="filter-form-d" placeholder="Filter" />
                    </div>
                  </form>
                  <div className="all-teams-content">
                    <ul className="all-teams-ul">
                      <li className="all-teams-li-heading">UserName</li>
                      <li
                        className="all-teams-li-data"
                        style={{ paddingLeft: "14px" }}
                      >
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                          />
                          <label class="form-check-label">
                            30 Minutes Meeting
                          </label>
                        </div>
                      </li>
                      <li
                        className="all-teams-li-data"
                        style={{ paddingLeft: "14px" }}
                      >
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                          />
                          <label class="form-check-label">
                            User
                          </label>
                        </div>
                      </li>
                      <li
                        className="all-teams-li-data"
                        style={{ paddingLeft: "14px" }}
                      >
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                          />
                          <label class="form-check-label">
                            User (Clone)
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div style={{ paddingTop: "13px" }}>
                    <Cancelapplybutton/>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-list-item">
              <div className="filter-list-item-name">Status</div>
              <div className="p-r">
                <button className="filter-list-button"
                type="button"
                id="allEvent"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                  <span>All Events</span>
                  &nbsp;
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div
                  className=" dropdown-menu calendly-open calendly-open-a calendly-open-b "
                  aria-labelledby="allEvent"
                >
                  <div className="all-teams-content">
                    <ul className="all-teams-ul">
                      <li className="all-teams-li-heading">Status</li>
                      <li
                        className="all-teams-li-data"
                        style={{ paddingLeft: "14px" }}
                      >
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                          />
                          <label class="form-check-label">
                            Action events
                          </label>
                        </div>
                      </li>
                      <li
                        className="all-teams-li-data"
                        style={{ paddingLeft: "14px" }}
                      >
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                          />
                          <label class="form-check-label">
                            Canceled events
                          </label>
                        </div>
                      </li>
                      </ul>
                  </div>
                  <div style={{ paddingTop: "13px" }}>
                    <Cancelapplybutton/>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-list-item">
              <div className="filter-list-item-name">Tracking ID</div>
              <div className="p-r">
                <button className="filter-list-button"
                type="button"
                id="allId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                  <span>All IDs</span>
                  &nbsp;
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div
                  className=" dropdown-menu calendly-open calendly-open-a calendly-open-b show-at-down"
                  aria-labelledby="allId"
                >
                  <form
                    className="filter-form dropdown-item"
                    style={{ borderBottom: "1px solid #e3e9f2" }}
                  >
                    <div className="filter-form-a">
                      <span className="filter-form-b filter-form-c">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input className="filter-form-d" placeholder="Filter" />
                    </div>
                  </form>
                  <div className="all-teams-content">
                    <ul className="all-teams-ul">
                      <li className="all-teams-li-heading">UTM_Campaign</li>
                      <li className="all-id-data all-teams-li-data ">No item found</li>
                      <li className="all-teams-li-heading">UTM_Source</li>
                      <li className="all-id-data all-teams-li-data">No item found</li>
                      <li className="all-teams-li-heading">UTM_Medium</li>
                      <li className="all-id-data all-teams-li-data">No item found</li>
                      <li className="all-teams-li-heading">UTM_Content</li>
                      <li className="all-id-data all-teams-li-data">No item found</li>
                      <li className="all-teams-li-heading">UTM_Term</li>
                      <li className="all-id-data all-teams-li-data">No item found</li>
                    </ul>
                  </div>
                  <div style={{ paddingTop: "13px" }}>
                    <Cancelapplybutton/>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-list-item">
              <div className="filter-list-item-name">Invitee Emails</div>
              <div className="p-r">
                <button className="filter-list-button"
                type="button"
                id="allinvitee"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                  <span>All Invitee Emails</span>
                  &nbsp;
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div
                  className=" dropdown-menu calendly-open calendly-open-a calendly-open-b "
                  aria-labelledby="allinvitee"
                >
                  <form
                    className="filter-form dropdown-item"
                    style={{ borderBottom: "1px solid #e3e9f2" }}
                  >
                    <div className="filter-form-a">
                      <span className="filter-form-b filter-form-c">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input className="filter-form-d" placeholder="Filter" />
                    </div>
                  </form>
                  <div className="all-teams-content">
                    <ul className="all-teams-ul">
                      <li className="all-teams-li-heading">Teams</li>
                      <li className="all-teams-li-data">No item found</li>
                    </ul>
                  </div>
                  <div style={{ paddingTop: "13px" }}>
                    <Cancelapplybutton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-buttons">
            <button
              className="detail-edit-button detail-edit-button-color"
              style={{ minHeight: "35px" }}
            >
              <div className="detail-edit-button-a">
                <span>Reset</span>
              </div>
            </button>
            <button
              className="detail-edit-button detail-edit-button-color"
              style={{ minHeight: "35px" }}
              type="button"
                        data-toggle="collapse"
                        data-target="#filter"
                        aria-expanded="false"
                        aria-controls="filter"
            >
              <div className="detail-edit-button-a">
                <span>Close</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScheduleEventFilter;
