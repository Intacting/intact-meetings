import React from "react";
const SaveasNewSchedhule = ()=>{
    return(<>
    <div className="modal" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="create-workflow-modal" >
        <div className="create-workflow-modal-a">
          <div className="workflow-modal workflow-modal-a" style={{border : "1px solid"}}>
            <div
              class="modal-dialog"
              style={{ margin: "10px", }}
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    <b>Want to save this as a new schedule?</b>
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
                    <p>Save these hours to reuse with other event types. Manage all your schedules under availability.</p>
                  <div class="form-group">
                    <label style={{ fontSize: "14px" }}>
                      <b>New schedule name</b>
                    </label>
                    <input type="text" class="form-control" placeholder="Working Hours, Exclusive Hours, etc...."/>
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
    </>)
}
export default SaveasNewSchedhule;