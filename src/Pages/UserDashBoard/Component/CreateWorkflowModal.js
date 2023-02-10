import React from "react";
const CreateWorkflowModal = () => {
  return (
    <>
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
                    <b>Create a workflow</b>
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
                      <b>What this happens</b>
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>New event is booked</option>
                      <option>Before event starts</option>
                      <option>Event starts</option>
                      <option>Event ends</option>
                      <option>Event is canceled</option>
                    </select>
                  </div>
                  <div class="form-group" style={{marginBottom : "0px"}}>
                    <div className="how-long">
                      <label style={{ fontSize: "14px" }}>
                        <b>How long after new event is booked?</b>
                      </label>
                      <div className="immediate">
                        <div className="immediate-1">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                            />
                            <label
                              class="form-check-label"
                              for="exampleRadios1"
                            >
                              immediately when new event is booked
                            </label>
                          </div>
                        </div>
                        <div className="immediate-1">
                          
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                              />
                              <div class="form-row" style={{ marginLeft: "0px" }}>
                                <div class="form-group col-md-4">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value="12"
                                  />
                                </div>
                                <div class="form-group col-md-6">
                                  <select id="inputState" class="form-control">
                                    <option selected>Hours</option>
                                    <option>Days</option>
                                    <option>Minutes</option>
                                  </select>
                                </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label style={{ fontSize: "14px" }}>
                      <b>Do this</b>
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Sent email to invitee</option>
                      <option>Sent email to host</option>
                      <option>Sent text to invitee</option>
                      <option>Sent text to host</option>
                    </select>
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
    </>
  );
};
export default CreateWorkflowModal;
