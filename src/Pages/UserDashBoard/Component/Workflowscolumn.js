import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/Image/workflow-column.svg"; 
const Workflowscolumn = () => {
  return (
    <>
      <div>
        <div className="form-box">
          <form>
            <div className="form-box-a">
              <div className="form-box-c">
                <div>
                  <i class="fa-solid fa-bolt" style={{ color: "black" }}></i>
                </div>
                <div className="form-box-d none">
                  <div style={{ fontSize: "16px", color: "black" }}>
                    Workflows <span className="try-it">TRY IT</span>
                  </div>
                  <div className="form-box-e">
                    <span>
                      Set up automations around your events, such as email and
                      text notifications, thank you emails etc.
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#workflow-column"
                >
                  Cancel
                </button>
              </div>
            </div>
            <div>
              <div className="data-range-form data-range-form-a">
                <div className="d-f">
                  <div>
                    <div className="workflow-column1">
                      Apply workflows to your event type
                    </div>
                    <div className="workflow-column2">
                      Automate all the work you do around this event, like text
                      notifications and email reminders. Once you create a
                      workflow, you'll see where it fits in this event's
                      timeline.
                    </div>
                    <Link className="workflow-column3">Explore what you can do with workflows <i class="fa fa-external-link"></i></Link>
                  </div>
                  <img src={Image} alt="banner"/>
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
                  data-target="#workflow-column"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Workflowscolumn;
