import React from "react";
import { Link } from "react-router-dom";
import Robot from "../../../assets/Image/workflows-robot.svg";
import WorkflowCard from "./WorkflowCard";
import Remaindermail from "../../../assets/Image/remainder-mail.svg";
import Thankyouemail from "../../../assets/Image/thankyou-email.svg";
import Remindertext from "../../../assets/Image/reminder-text.svg";
import Confirmationtext from "../../../assets/Image/confirmation-text.svg";
import Surveyemail from "../../../assets/Image/survey-email.svg";
import CreateWorkflowModal from "./CreateWorkflowModal";
const Tabercontent3 = () => {
  return (
    <>
      <div className="taber-content3">
        <div className="workflows">
          <div className="workflow-trial">
            On January 20, 2023 your trial period expires and you'll be
            downgraded to a basic free subscription.
            <Link className="golden"> Upgrade your subscription</Link> to keep
            workflows and other features from your trial period.
          </div>
          <div>
            <div className="d-f save-time">
              <div>
                <div className="pb-12">
                  <h2 className="save-time-h2">Save time with workflows</h2>
                </div>
                <div className="pb-12">
                  <div className="save-time-content">
                    Automate all the work you do around events, such as text
                    messages when events are booked, email reminders before
                    events, and more. You can start with a commonly used
                    workflow or create your own
                  </div>
                </div>
              </div>
              <div>
                <img className="save-item-img" src={Robot} alt="robot" />
              </div>
            </div>
            <div className="d-f">
              <div className="left-side-workflow">
                Start with one of the common workflows below or create your own.
              </div>
              <div>
                <button
                  style={{
                    minHeight: "38px",
                    borderColor: "#c59948",
                    color: "#c59948",
                    backgroundColor:
                      "var(--text-color-secondary-4,rgba(255,255,255,1))",
                    fontWeight: "400",
                    fontSize: "1.05em",
                  }}
                  className="toptaber-right-button toptaber-right-button-2"
                  data-toggle="modal" data-target="#exampleModal"
                >
                  <div className="toptaber-right-button-a">
                    <span
                      className="toptaber-right-button-plus"
                      style={{ fontSize: "0.85em" }}
                    >
                      Create your own workflow
                    </span>
                  </div>
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <CreateWorkflowModal/>
                </div>
              </div>
            </div>
            <div className="workflows-box-section">
              <div className="workflows-box-section1 workflows-box-section2">
                <WorkflowCard
                  image={Remaindermail}
                  header="Email reminder to invitee"
                  content="Reduces no-shows --send automated email reminders to
                        invitees"
                />
                <WorkflowCard
                  image={Remaindermail}
                  header="Email reminder to host"
                  content="Never miss an event -- get automated email reminders"
                />
                <WorkflowCard
                  image={Thankyouemail}
                  header="send thank you email"
                  content="Build relationships with a quick thanks"
                />
                <WorkflowCard
                  image={Remindertext}
                  header="Text reminder to host"
                  content="Never miss an event -- set automated text reminders"
                />
                <WorkflowCard
                  image={Confirmationtext}
                  header="Text booking confirmation to host"
                  content="Keep host up-to-date with scheduled events"
                />
                <WorkflowCard
                  image={Surveyemail}
                  header="Email your own feedback survey"
                  content="Email a survey link from a third party like Typeform or Google Forms to get feedback from invitees after your event"
                />
              </div>
            </div>
            <div className="workflow-end d-f jc-center">
              <Link to="/user/add_workflow">
            <button
              className="detail-edit-button detail-edit-button-color"
              style={{ minHeight: "35px", width : "auto" }}
              type="button"
                        data-toggle="collapse"
                        data-target="#filter"
                        aria-expanded="false"
                        aria-controls="filter"
            >
              <div className="detail-edit-button-a">
                <span>Show more</span>
              </div>
            </button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabercontent3;
