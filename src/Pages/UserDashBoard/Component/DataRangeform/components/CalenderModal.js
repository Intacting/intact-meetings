import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CalendarModal = ()=>{
    const [value, onChange] = useState(new Date());
    return(<>
    <div className="modal" id="modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <b>Select the date(s) you want to assign specific hours</b>
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
                <Calendar onChange={onChange} value={value} />
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
                        <span className="toptaber-right-button-plus">Apply</span>
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
export default CalendarModal;