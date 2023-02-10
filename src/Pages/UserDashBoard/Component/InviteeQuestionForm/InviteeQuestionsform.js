import React from "react";
import Row from "../../../../assets/Image/row.png";
import EditQuestionModal from "./Component/EditQuestionModal";
import NameInputModal from "./Component/NameInputModal";
const InviteeQuestionsform = () => {
  return (
    <>
      <div>
        <div className="form-box">
          <form>
            <div className="form-box-a">
              <div className="form-box-c">
                <div>
                  <img className="icon-img" src={Row} alt="row" />
                </div>
                <div className="form-box-d none">
                  <div style={{ fontSize: "16px", color: "black" }}>
                    Invitee Questions
                  </div>
                  <div className="form-box-e">
                    <span>Name, Email + 1 question</span>
                  </div>
                </div>
              </div>
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#InviteeQuestionform"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#InviteeQuestionform"
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
                <div>
              <button type="button" data-toggle="modal"
                  data-target="#modal4" className="bg-white b-n" style={{ textAlign: "left", width : "50%" }}>
                <div class="form-group">
                  <label for="">Name *</label>
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                  <label for="">Email</label>
                  <input type="email" class="form-control" />
                </div>
                <div className="add-guest">
                  <button type="button" className="add-guests">
                    Add Guests
                  </button>
                </div>
                </button>
                <NameInputModal/>
                </div>
                <button type="button" data-toggle="modal"
                  data-target="#modal5"
                 className="bg-white b-n">
                  <div class="form-group ">
                    <label for="" style={{ textAlign: "left" }}>
                      Please share anything that will help perpare for our
                      meeting.
                    </label>
                    <textarea class="form-control" id="" rows="3"></textarea>
                  </div>
                </button>
                <EditQuestionModal/>
                <div>
                <button
                  className="save-as-new-schedule"
                  type="button"
                  data-toggle="modal"
                  data-target="#modal5"
                  style={{marginTop : "0px"}}
                >
                    <i class="fa-solid fa-plus"></i>
                  Add New Question
                </button>
                <EditQuestionModal/>

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
                  data-target="#InviteeQuestionform"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#InviteeQuestionform"
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
export default InviteeQuestionsform;
