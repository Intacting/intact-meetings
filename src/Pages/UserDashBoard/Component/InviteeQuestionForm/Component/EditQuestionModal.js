import React, { useState } from "react";
const EditQuestionModal = () => {
    const [option, setOption] = useState();
    const handleOption = (event) => {
        setOption(event.target.value);
        console.log(option);
      };
  return (
    <>
      <div
        className="modal"
        id="modal5"
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
                      <label className="edit-question-h">Question *</label>
                      <textarea class="form-control" id="" rows="2">Please share anything that will help prepare for our meeting.</textarea>
                    </div>
                    <div className="d-f jc-sb">
                    <a className="setting-display-button" style={{padding : "0px", width : "auto"}}>
                    <div className="setting-display-button-a" style={{display : "inline"}}>
                    <label
                        class="switch"
                        style={{ marginLeft: "auto", marginBottom: "0px" }}
                      >
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      &nbsp;
                      On/Off{" "}
                      
                    </div>
                  </a>
                  <div class="form-check">
    <input type="checkbox" class="form-check-input" id=""/>
    <label class="form-check-label" for="">Required</label>
  </div>
                  </div>
                  <div class="form-group" style={{paddingTop : "10px"}}>
                  <label className="edit-question-h">Answer Type</label>
                      <select class="form-control" id="" onChange={(e) => handleOption(e)}>
                        <option>One Line</option>
                        <option>Multiple Lines</option>
                        <option>Radio Buttons</option>
                        <option>Checkboxes</option>
                        <option>Dropdown</option>
                        <option>Phone Number</option>
                      </select>
                    </div>
                    {(option=="Radio Buttons")||(option=="Dropdown")? 
                    <div className="form-group" style={{paddingTop : "10px"}}>
                    <label className="edit-question-h">Answer *</label>
                    <div className="edit-question1">
                    Invitee can select one of the following:
                    </div>
                    <div className="d-f jc-sb mb-10">
                    <input type="text" style={{marginRight : "35px"}} class="form-control" id="" placeholder="Answer1"/>
                    <i class="fa-solid fa-trash-can bin"></i>
                    </div>
                    <div className="d-f jc-sb mb-10">
                    <input type="text" style={{marginRight : "35px"}} class="form-control" id="" placeholder="Answer1"/>
                    <i class="fa-solid fa-trash-can bin"></i>
                    </div>
                    <div className="d-f jc-sb mb-10">
                    <input type="text" style={{marginRight : "35px"}} class="form-control" id="" placeholder="Answer1"/>
                    <i class="fa-solid fa-trash-can bin"></i>
                    </div>
                    
                    </div>
                        :""}
                        {option=="Checkboxes"? 
                    <div className="form-group" style={{paddingTop : "10px"}}>
                    <label className="edit-question-h">Answer *</label>
                    <div className="edit-question1">
                    Invitee can select one or many of the following:
                    </div>
                    <div className="d-f jc-sb mb-10">
                    <input type="text" style={{marginRight : "35px"}} class="form-control" id="" placeholder="Answer1"/>
                    <i class="fa-solid fa-trash-can bin"></i>
                    </div>
                    <div className="d-f jc-sb mb-10">
                    <input type="text" style={{marginRight : "35px"}} class="form-control" id="" placeholder="Answer1"/>
                    <i class="fa-solid fa-trash-can bin"></i>
                    </div>
                    <div className="d-f jc-sb mb-10">
                    <input type="text" style={{marginRight : "35px"}} class="form-control" id="" placeholder="Answer1"/>
                    <i class="fa-solid fa-trash-can bin"></i>
                    </div>
                    
                    </div>
                        :""}
                        
                    <button className="delete-question b-n bg-white">
                    <i class="fa-solid fa-trash-can" style={{paddingTop : "3px"}}></i> &nbsp;
                         Delete Question
                         </button>

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
export default EditQuestionModal;
