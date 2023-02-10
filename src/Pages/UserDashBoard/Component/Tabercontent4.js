import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/Image/illustration.svg";
const Tabercontent4 = () => {
  return (
    <>
      <div className="taber-content4">
        <div className=" workflows-box-section2 ">
          <div className="col routing-form">
            <h4>
              <b>Connect the right people, faster</b>
            </h4>
            <p>
              Routing forms let you gather information from someone upfront and
              send them to a specific booking page or website based on their
              responses.
            </p>
            <p style={{ margin: "8px 0 24px" }}>
              <p style={{ marginBottom: "0px" }}>
                1. Create an <b>intake form</b> to set up questions
              </p>
              <p style={{ marginBottom: "0px" }}>
                2. Set up <b>routing logic</b> to send invitees to a booking
                page and more
              </p>
            </p>
            <p>
              Learn more about how to use Routing Forms in our{" "}
              <Link style={{color : "#c59948"}}>Help Center.</Link>
            </p>
            <button
              style={{
                borderColor: "#c59948",
                color: "#c59948",
                backgroundColor:
                  "var(--text-color-secondary-4,rgba(255,255,255,1))",
                fontWeight: "400",
              }}
              className="toptaber-right-button toptaber-right-button-2"
              type="button"
              data-toggle="modal" data-target="#modal1"
            >
              <div className="toptaber-right-button-a">
                <span className="toptaber-right-button-plus">
                  <i class="fa-solid fa-plus" style={{ fontSize: "1rem" }}></i>{" "}
                  New routing form
                </span>
              </div>
            </button>
            <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="create-workflow-modal">
        <div className="create-workflow-modal-a">
          <div className="workflow-modal workflow-modal-a">
            <div
              class="modal-dialog"
              style={{ margin: "10px" }}
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    <b>New routing form</b>
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label style={{ fontSize: "14px" }}>
                      <b>Name your routing form</b>
                    </label>
                    <input type="text" class="form-control"/>
                  </div>
                </div>
                <div class="modal-footer">
                <button
                      className="add-one-on-one-share filter-dropdown-button b-width"
                      style={{ float: "left" }}
                      type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                      Cancel
                    </button>
                    <button
                      className="toptaber-right-button toptaber-right-button-2 b-width"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="toptaber-right-button-a">
                        <span className="toptaber-right-button-plus">Next</span>
                      </div>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                </div>
          </div>
          <div className="col routing-form">
            <div className="routing-img">
              <img src={Image} alt="illustration" />
            </div>
          </div>
        </div>
      </div>    
    </>
  );
};
export default Tabercontent4;
