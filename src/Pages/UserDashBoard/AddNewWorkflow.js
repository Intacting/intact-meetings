import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../../Components/UserNav";
import CreateWorkflowModal from "./Component/CreateWorkflowModal";
import WorkflowCard from "./Component/WorkflowCard";
import Remaindermail from "../../assets/Image/remainder-mail.svg";
import Thankyouemail from "../../assets/Image/thankyou-email.svg";
import Remindertext from "../../assets/Image/reminder-text.svg";
import Confirmationtext from "../../assets/Image/confirmation-text.svg";
import Surveyemail from "../../assets/Image/survey-email.svg";
import Additionalemail from "../../assets/Image/additional-resource-email.svg";
import Meetingemail from "../../assets/Image/meeting-email.svg";
import CancelText from "../../assets/Image/cancel-text-email.svg";
import Followuptext from "../../assets/Image/followup-text.svg"; 
import Reconfirmationemail from "../../assets/Image/reconfirmation-email.svg";
import Reconfirmationtext from "../../assets/Image/reconfirmationtext.svg";
const AddNewWorkflow = () => {
  return (
    <>
      <div className="pass-page">
        <UserNav/>
        <div>
          <div className="subheader">
            <div className="wrapper">
              <div className="actions">
                <Link  to="/user">
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
                <h2 className="">
                  Add new workflow
                </h2>
                <h6>User</h6>
              </div>
            </div>
          </div>
          <div className="taber-content3">
        <div className="workflows">
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
            <hr></hr>
            <div className="workflows-box-section">
              <div className="workflows-box-section1 workflows-box-section2">
                
                <WorkflowCard
                  image={Remaindermail}
                  header="Email reminder to host"
                  content="Never miss an event -- get automated email reminders"
                />
                <WorkflowCard
                  image={Remaindermail}
                  header="Email reminder to invitee"
                  content="Reduces no-shows --send automated email reminders to
                        invitees"
                />
                <WorkflowCard
                  image={Thankyouemail}
                  header="send thank you email"
                  content="Build relationships with a quick thanks"
                />
                <WorkflowCard 
                image={Additionalemail}
                header="Email additional resources"
                content="Send links for additional resources to your invitees"
                />
                <WorkflowCard 
                image={Meetingemail}
                header="Request follow-up meeting"
                content="Don't wait to meet again"
                />
                <WorkflowCard
                  image={Surveyemail}
                  header="Email your own feedback survey"
                  content="Email a survey link from a third party like Typeform or Google Forms to get feedback from invitees after your event"
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
                image={CancelText}
                header="Text cancellation notification to host"
                content="keep hosts up-to-date with canceled events"
                />
                <WorkflowCard
                  image={Remindertext}
                  header="Text reminder to invitee"
                  content="Reduce no-shows -- send automated text reminders to invitees"
                />
                <WorkflowCard
                  image={Confirmationtext}
                  header="Text booking confirmation to invitee"
                  content="Let invitees know their event is scheduled"
                />
                <WorkflowCard
                image={CancelText}
                header="Text cancellation notification to invitee"
                content="Let invitees know as soon as event is cancelled"
                />
                <WorkflowCard
                image={Followuptext}
                header="Text follow-up to invitee"
                content="Finish up by texting your invitees after an event"
                />
                <WorkflowCard
                image={Reconfirmationemail}
                header="Email invitees to reconfirm"
                content="Reduce no-shows by asking your invitees to reconfirm they will attend your event"
                />
                <WorkflowCard 
                image={Reconfirmationtext}
                header="Text invitees to reconfirm"
                content="Reduce no-shows by asking your inviteed to reconfirm they will attend your event"
                />
              </div>
            </div>
            </div>
            </div>
        </div>

      </div>
    </>
  );
};
export default AddNewWorkflow;
