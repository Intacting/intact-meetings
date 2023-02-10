import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../../Components/UserNav";
import Row from "../../assets/Image/row.png";
import AddEventForm from "./Component/AddEventForm";
import DataRangeform from "./Component/DataRangeform/DataRangeform.js";
import InviteeQuestionsform from "./Component/InviteeQuestionForm/InviteeQuestionsform";
import Workflowscolumn from "./Component/Workflowscolumn";
import NotificationAndCancelPolicy from "./Component/NotificationAndCancelPolicy";
import ConfirmationPage from "./Component/ConfirmationPage";
import CollectPayments from "./Component/CollectPayments";
const EditEventType = () => {
  return (
    <>
      <div className="pass-page">
        <UserNav />
        <div>
          <div className="subheader">
            <div className="wrapper">
              <div className="actions">
                <Link to="/user">
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
                        Back
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="title">
                <h2 className="fs-20" style={{ marginTop: "revert" }}>
                  Edit Event Type
                </h2>
              </div>
              <div className="add-one-on-one-top-end">
                <div
                  className="add-one-on-one-top-end-a"
                  style={{
                    color: "#c59948",
                  }}
                >
                  <a>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> view
                    live page
                  </a>
                </div>
                <button
                  className="add-one-on-one-share"
                  style={{
                    backgroundColor: "#c59948",
                    color: "white",
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
          <div className=" pb-40 add-event-form ">
            <div className="edit-event-page">
              <div></div>
              <div style={{ fontStyle: "italic" }}>
                Last edited 11 january 2023
              </div>
              <div>
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
                    <i
                      class="fa-solid fa-gear"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    Setting
                  </button>
                  <div
                    className="setting-display setting-display-a setting-display-b setting-add-one dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="dropdown-item">
                      <a
                        className="setting-display-button"
                        style={{ justifyContent: "space-between" }}
                      >
                        <span className="event-setting-invitee">
                          invitee language:
                        </span>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </a>
                      <p className="invitee-p"> English</p>
                    </div>
                    <div className="setting-display-border">
                      <a className="setting-display-button">
                        <div className="setting-display-button-a">
                          Event Type On/Off {"  "}
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
              </div>
            </div>
            <div>
              <div className="edit-content-box">
                <a
                  className="form-box-a"
                  data-toggle="collapse"
                  href="#form-down"
                  role="button"
                  aria-expanded="false"
                  aria-controls="form-down"
                >
                  <div className="form-box-c">
                    <div
                      className="form-box-b"
                      style={{ backgroundColor: "rgb(130, 71, 245)" }}
                    ></div>
                    <div className="form-box-d none">
                      <div style={{ fontSize: "16px", color : "black" }}>
                        What event is this?
                      </div>
                      <div className="form-box-e">
                        <span>User</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="collapse" id="form-down">
                <div className="">
                  <AddEventForm />
                </div>
                </div>
              </div>
              <div className="edit-content-box">
                <a
                  className="form-box-a"
                  data-toggle="collapse"
                  href="#datarange-form"
                  role="button"
                  aria-expanded="false"
                  aria-controls="datarange-form"
                >
                  <div className="form-box-c">
                    <div>
                      <i class="fa-solid fa-calendar" style={{color : "black"}}></i>
                    </div>
                    <div className="form-box-d none">
                      <div style={{ fontSize: "16px", color : "black" }}>
                        When can people book this event?
                      </div>
                      <div className="form-box-e">
                        <span>30 min, 60 rolling calender days</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="collapse" id="datarange-form">
                <div className="">
                  <DataRangeform/>
                </div>
                </div>
              </div>
              <div className="additional">
               <b> Additional Options </b>
              </div>
              <div className="edit-content-box">
                <a
                  className="form-box-a"
                  data-toggle="collapse"
                  href="#InviteeQuestionform"
                  role="button"
                  aria-expanded="false"
                  aria-controls="InviteeQuestionform"
                >
                  <div className="form-box-c">
                    <div>
                    <img className="icon-img" src={Row} alt="row"/>
                    </div>
                    <div className="form-box-d none">
                      <div style={{ fontSize: "16px", color : "black" }}>
                        Invitee Questions
                      </div>
                      <div className="form-box-e">
                        <span>Name, Email + 1 question</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="collapse" id="InviteeQuestionform">
                <div className="">
                  <InviteeQuestionsform />
                </div>
                </div>
              </div>
              <div className="edit-content-box">
                <a
                  className="form-box-a"
                  data-toggle="collapse"
                  href="#workflow-column"
                  role="button"
                  aria-expanded="false"
                  aria-controls="workflow-column"
                >
                  <div className="form-box-c">
                    <div>
                    <i class="fa-solid fa-bolt" style={{color : "black"}}></i>
                    </div>
                    <div className="form-box-d none">
                      <div style={{ fontSize: "16px", color : "black" }}>
                        Workflows <span className="try-it">TRY IT</span>
                      </div>
                      <div className="form-box-e">
                        <span>Set up automations around your events, such as email and text notifications, thank you emails etc.</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="collapse" id="workflow-column">
                <div className="">
                 <Workflowscolumn/>
                </div>
                </div>
              </div>
              <div className="edit-content-box">
                <a
                  className="form-box-a"
                  data-toggle="collapse"
                  href="#notification-cancel-policy"
                  role="button"
                  aria-expanded="false"
                  aria-controls="notification-cancel-policy"
                >
                  <div className="form-box-c">
                    <div>
                    <i class="fa-regular fa-envelope" style={{color : "black"}}></i>
                    </div>
                    <div className="form-box-d none">
                      <div style={{ fontSize: "16px", color : "black" }}>
                        Notifications and Cancellation Policy
                      </div>
                      <div className="form-box-e">
                        <span>Calender Invitations, No Reminders</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="collapse" id="notification-cancel-policy">
                <div className="">
                  <NotificationAndCancelPolicy/>
                </div>
                </div>
              </div>
              <div className="edit-content-box">
                <a
                  className="form-box-a"
                  data-toggle="collapse"
                  href="#confirmation-page"
                  role="button"
                  aria-expanded="false"
                  aria-controls="confirmation-page"
                >
                  <div className="form-box-c">
                    <div>
                    <i class="fa-solid fa-arrow-up-right-from-square" style={{color : "black"}}></i>
                    </div>
                    <div className="form-box-d none">
                      <div style={{ fontSize: "16px", color : "black" }}>
                        Confirmation Page
                      </div>
                      <div className="form-box-e">
                        <span>Booking confirmation page, no active links</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="collapse" id="confirmation-page">
                <div className="">
                  <ConfirmationPage/>
                </div>
                </div>
              </div>
              <div className="edit-content-box">
                <a
                  className="form-box-a"
                  data-toggle="collapse"
                  href="#collect-payments"
                  role="button"
                  aria-expanded="false"
                  aria-controls=""
                >
                  <div className="form-box-c">
                    <div>
                    <i class="fa-regular fa-credit-card" style={{color : "black"}}></i>
                    </div>
                    <div className="form-box-d none">
                      <div style={{ fontSize: "16px", color : "black" }}>
                        Collect Payments
                      </div>
                      <div className="form-box-e">
                        <span>no payment method</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="collapse" id="collect-payments">
                <div className="">
                  <CollectPayments/>
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
export default EditEventType;
