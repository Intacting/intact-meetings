import React from "react";
const NameInputModal = () => {
  return (
    <>
      <div
        className="modal"
        id="modal4"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="create-workflow-modal">
          <div className="create-workflow-modal-a">
            <div
              className="workflow-modal workflow-modal-a"
              style={{ border: "1px solid" }}
            >
              <div
                class="modal-dialog"
                style={{ margin: "10px" }}
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      <b>Edit Name Question</b>
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
                      <label className="edit-question-h">Name Input</label>
                      <select class="form-control" id="">
                        <option>Name</option>
                        <option>First Name, Last Name</option>
                      </select>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="" />
                      <label class="form-check-label" for="exampleCheck1">
                      Autofill Invitee Name, Email, and Text Reminder Phone Number (when applicable) from prior bookings
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="" />
                      <label class="form-check-label" for="exampleCheck1">
                      Allow invitees to add additional guests
                      </label>
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
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <div className="toptaber-right-button-a">
                        <span className="toptaber-right-button-plus">Save</span>
                      </div>
                    </button>
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
export default NameInputModal;
