import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/Image/invitee_invitation.svg";
import Image2 from "../../../assets/Image/email_follow_up.svg";
import Image3 from "../../../assets/Image/invitee_reminder.svg";
import Image4 from "../../../assets/Image/sms_reminder.svg";
import Image5 from "../../../assets/Image/invitee_confirmation.svg";
import Image6 from "../../../assets/Image/invitee_cancellation.svg";

const NotificationAndCancelPolicy = () => {
  const [id, setId] = useState(1);
  const handleChange = () => {
    if (id == 1) setId(2);
    else setId(1);
  };
  return (
    <>
      <div>
        <div className="form-box">
          <form>
            <div className="form-box-a">
              <div className="form-box-c">
                <div>
                  <i
                    class="fa-regular fa-envelope"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <div className="form-box-d none">
                  <div style={{ fontSize: "16px", color: "black" }}>
                    Notifications and Cancellation Policy
                  </div>
                  <div className="form-box-e">
                    <span>Calender Invitations, No Reminders</span>
                  </div>
                </div>
              </div>
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#notification-cancel-policy"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#notification-cancel-policy"
                >
                  <div className="toptaber-right-button-a">
                    <span className="toptaber-right-button-plus">
                      Save & Close
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <div className="data-range-form data-range-form-a">
                {id == 1 ? (
                  <div className="cancel-policy">
                    <div className="cancel-policy1">
                      <img src={Image1} alt="image"></img>
                    </div>
                    <div className="cancel-policy5">
                      <h2 className="cancel-policy2">
                        Calendar Invitations{" "}
                        <i class="fa-solid fa-circle-info"></i>
                      </h2>
                      <div className="cancel-policy3">
                        <div className="cancel-policy4">
                          <p className="mb-0">
                            An event will be created in your calendar and your
                            invitee will be added as an attendee.
                          </p>
                          <p className="fs-12 mb-0">
                            <strong>Note:</strong> Requires a Google, Office 365
                            or Exchange calendar connection with the ability to
                            add new Calendly events.
                          </p>
                          <Link
                            className="workflow-column3"
                            onClick={handleChange}
                          >
                            Switch to Email Confirmation
                          </Link>
                          <div class="collapse personalize_a" id="personalize">
                            <div className="personalize">
                              <div className="personalize1">
                                <div
                                  className="personalize2"
                                  style={{ width: "411px" }}
                                >
                                  <p className="fw-700 fs-17 mb-0">
                                    Upgrade your subscription
                                  </p>
                                  <p className="fs-12 mb-0">
                                    Your invitees are receiving default calendar
                                    invitations. Upgrade your subscription to
                                    customize these invitations.
                                  </p>
                                </div>
                                <button
                                  class="toptaber-right-button toptaber-right-button-2"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#notification-cancel-policy"
                                  aria-expanded="true"
                                >
                                  <div class="toptaber-right-button-a">
                                    <span class="toptaber-right-button-plus">
                                      Upgrade
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div
                              class="form-group"
                              style={{ paddingTop: "5px" }}
                            >
                              <label>Title</label>
                              <textarea
                                class="form-control"
                                rows="1"
                                disabled
                                placeholder="Invitee Full Name and My Name"
                              ></textarea>
                            </div>
                            <div class="form-group">
                              <label>Body</label>
                              <textarea
                                class="form-control"
                                rows="3"
                                disabled
                                placeholder="Event Name: Event Name"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="canel-policy6">
                          <div className="cancelpolicy7">
                            <button
                              className="b-n bg-white golden"
                              type="button"
                              data-toggle="collapse"
                              data-target="#personalize"
                              aria-expanded="false"
                              aria-controls="personalize"
                            >
                              Personalize
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (<>
                  <div className="cancel-policy">
                    <div className="cancel-policy1">
                      <img src={Image5} alt="image"></img>
                    </div>
                    <div className="cancel-policy5">
                      <h2 className="cancel-policy2">
                        Email Confirmations{" "}
                        <i class="fa-solid fa-circle-info"></i>
                      </h2>
                      <div className="cancel-policy3">
                        <div className="cancel-policy4">
                          <p className="mb-0">
                            Your invitee will receive an email confirmation with
                            links to create their own calendar event.
                          </p>
                          <Link
                            className="workflow-column3"
                            onClick={handleChange}
                          >
                            Switch to Calendar Confirmation
                          </Link>

                          <div class="collapse personalize_a" id="personalize1">
                            <div className="personalize">
                              <div className="personalize1">
                                <div
                                  className="personalize2"
                                  style={{ width: "411px" }}
                                >
                                  <p className="fw-700 fs-17 mb-0">
                                    Upgrade your subscription
                                  </p>
                                  <p className="fs-12 mb-0">
                                    Your invitees are receiving default calendar
                                    invitations. Upgrade your subscription to
                                    customize these invitations.
                                  </p>
                                </div>
                                <button
                                  class="toptaber-right-button toptaber-right-button-2"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#notification-cancel-policy"
                                  aria-expanded="true"
                                >
                                  <div class="toptaber-right-button-a">
                                    <span class="toptaber-right-button-plus">
                                      Upgrade
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div
                              class="form-group"
                              style={{ paddingTop: "5px" }}
                            >
                              <label>Subject</label>
                              <textarea
                                class="form-control"
                                rows="1"
                                disabled
                                placeholder="Invitee Full Name and My Name"
                              ></textarea>
                            </div>
                            <div class="form-group">
                              <label>Body</label>
                              <textarea
                                class="form-control"
                                rows="3"
                                disabled
                                placeholder="Event Name: Event Name"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="canel-policy6">
                          <div className="cancelpolicy7">
                            <button
                              className="b-n bg-white golden"
                              type="button"
                              data-toggle="collapse"
                              data-target="#personalize1"
                              aria-expanded="false"
                              aria-controls="personalize"
                            >
                              Personalize
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cancel-policy">
                  <div className="cancel-policy1">
                    <img src={Image6} alt="image"></img>
                  </div>
                  <div className="cancel-policy5">
                    <h2 className="cancel-policy2">
                      Email Cancellations{" "}
                      <i class="fa-solid fa-circle-info"></i>
                    </h2>
                    <div className="cancel-policy3">
                      <div className="cancel-policy4">
                        <p className="mb-0">
                          Email notifications will be sent to your invitee if
                          you cancel the event.
                        </p>

                        <div class="collapse personalize_a" id="personalize2">
                          <div className="personalize">
                            <div className="personalize1">
                              <div
                                className="personalize2"
                                style={{ width: "411px" }}
                              >
                                <p className="fw-700 fs-17 mb-0">
                                  Upgrade your subscription
                                </p>
                                <p className="fs-12 mb-0">
                                  Your invitees are receiving default calendar
                                  invitations. Upgrade your subscription to
                                  customize these invitations.
                                </p>
                              </div>
                              <button
                                class="toptaber-right-button toptaber-right-button-2"
                                type="button"
                                data-toggle="collapse"
                                data-target="#notification-cancel-policy"
                                aria-expanded="true"
                              >
                                <div class="toptaber-right-button-a">
                                  <span class="toptaber-right-button-plus">
                                    Upgrade
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div class="form-group" style={{ paddingTop: "5px" }}>
                            <label>Subject</label>
                            <textarea
                              class="form-control"
                              rows="1"
                              disabled
                              placeholder="Invitee Full Name and My Name"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label>Body</label>
                            <textarea
                              class="form-control"
                              rows="3"
                              disabled
                              placeholder="Event Name: Event Name"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="canel-policy6">
                        <div className="cancelpolicy7">
                          <button
                            className="b-n bg-white golden"
                            type="button"
                            data-toggle="collapse"
                            data-target="#personalize2"
                            aria-expanded="false"
                            aria-controls="personalize"
                          >
                            Personalize
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  </>
                )}
                <div className="cancel-policy">
                  <div className="cancel-policy1">
                    <img src={Image3} alt="image"></img>
                  </div>
                  <div className="cancel-policy5">
                    <h2 className="cancel-policy2">
                      Email Reminders <i class="fa-solid fa-circle-info"></i>
                    </h2>
                    <div className="cancel-policy3">
                      <div className="cancel-policy4">
                        <p className="mb-0">
                          An invitee will receive a reminder email before a
                          scheduled event at specified times.
                        </p>
                      </div>
                      <div className="cancel-policy6">
                        <div className="cancel-policy7">
                          <button className="b-n bg-white">Inactive</button>
                        </div>
                        <div className="cancel-policy7">
                          <input
                            type="checkbox"
                            data-toggle="toggle"
                            data-size="sm"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cancel-policy">
                  <div className="cancel-policy1">
                    <img src={Image2} alt="image"></img>
                  </div>
                  <div className="cancel-policy5">
                    <h2 className="cancel-policy2">Email Follow-up</h2>
                    <div className="cancel-policy3">
                      <div className="cancel-policy4">
                        <p className="mb-0">
                          Request a review or prompt next steps with an
                          automated email sent after the event is over.
                        </p>
                      </div>
                      <div className="cancel-policy6">
                        <div className="cancel-policy7">
                          <button className="b-n bg-white">Inactive</button>
                        </div>
                        <div className="cancel-policy7">
                          <input
                            type="checkbox"
                            data-toggle="toggle"
                            data-size="sm"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cancel-policy">
                  <div className="cancel-policy1">
                    <img src={Image4} alt="image"></img>
                  </div>
                  <div className="cancel-policy5">
                    <h2 className="cancel-policy2">
                      Text Reminders <i class="fa-solid fa-circle-info"></i>
                    </h2>
                    <div className="cancel-policy3">
                      <div className="cancel-policy4">
                        <p className="mb-0">
                          Your invitees will have the option of receiving text
                          reminders before a scheduled event at specified times.
                        </p>
                      </div>
                      <div className="cancel-policy6">
                        <div className="cancel-policy7">
                          <button className="b-n bg-white">Inactive</button>
                        </div>
                        <div className="cancel-policy7">
                          <input
                            type="checkbox"
                            data-toggle="toggle"
                            data-size="sm"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="width-440">
                  <button
                    className="show-cancellation-policy"
                    type="button"
                    data-toggle="collapse"
                    data-target="#show-cancellation-policy"
                    aria-expanded="false"
                    aria-controls="show-cancellation-policy"
                  >
                    <i class="fa-solid fa-chevron-right"></i>
                    &nbsp; Show Cancellation Policy
                  </button>
                  <div class="collapse" id="show-cancellation-policy">
                    <div className="in-cancel-policy">
                      <div className="in-cancel-policy1">
                        <div>
                          <Link>Upgrade your subscription</Link> to add a
                          cancellation policy to your event notifications.
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          disabled
                        />
                        <label class="form-check-label">
                        Include cancel and reschedule links in notifications
                        </label>
                      </div>
                      <div class="form-group">
                              <label className="fs-12 fw-700">Cancellation Policy</label>
                              <textarea
                                class="form-control"
                                rows="3"
                                disabled
                                placeholder="Event Name: Event Name"
                              ></textarea>
                            </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-box-last">
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#notification-cancel-policy"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#notification-cancel-policy"
                >
                  <div className="toptaber-right-button-a">
                    <span className="toptaber-right-button-plus">Save & Close</span>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default NotificationAndCancelPolicy;
