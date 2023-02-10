import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import Image from "../../../../assets/Image/proaxiom-logo.png";
import DateRangeform from "./components/DateRangeform";
import Availability from "./components/Availability";
import AdditionalRules from "./components/AdditionalRules";
const DataRangeform = () => {
  const [option, setOption] = useState();
  const [additional, setAdditional] = useState(false);
  const handleOption = (event) => {
    setOption(event.target.value);
    console.log(option);
  };
  const handleChange = ()=>{
    setAdditional(!additional);
  }
  return (
    <>
      <div>
        <div className="form-box">
          <form>
            <div className="form-box-a">
              <div className="form-box-c">
                <div>
                  <i
                    class="fa-solid fa-calendar"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <div className="form-box-d none">
                  <div style={{ fontSize: "16px", color: "black" }}>
                    When can people book this event?
                  </div>
                  <div className="form-box-e">
                    <span>30 min, 60 rolling calender days</span>
                  </div>
                </div>
              </div>
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#datarange-form"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#datarange-form"
                >
                  <div className="toptaber-right-button-a">
                    <span className="toptaber-right-button-plus">Save & Close</span>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <div className="data-range-form data-range-form-a">
                <DateRangeform />
              </div>
            </div>
            <div>
              <div className="data-range-form data-range-form-a">
                <div className="data-range-grid">
                  <h2 className="data-range-h2">Duration</h2>
                  <div className="data-range-right">
                    Define how long your event will be. it can be as long as 12
                    hours.
                  </div>
                  <div className="data-range-left-c">
                    <div
                      class="form-group col-md-10"
                      style={{ paddingLeft: "0px" }}
                    >
                      <select
                        class="form-control"
                        id=""
                        onChange={(e) => handleOption(e)}
                      >
                        <option value="15min">15 min</option>
                        <option value="30min">30 min</option>
                        <option value="45min">45 min</option>
                        <option value="60min">60 min</option>
                        <option value="custom">custom</option>
                      </select>
                    </div>
                    {option == "custom" ? (
                      <div className="d-f">
                        <div class="col-md-6" style={{ paddingLeft: "0px" }}>
                          <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-4">
                          <select class="form-control">
                            <option>min</option>
                            <option>hrs</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Availability />
            </div>
            <div>
              <div className="data-range-form data-range-form-a">
                <div className="data-range-grid">
                  <h2 className="data-range-h2">
                    Want to add time before or after your events?
                  </h2>
                  <div className="data-range-right">
                    Give yourself some buffer time to prepare for or wrap up
                    from booked Calendly events.
                    <div className="data-range-right-a">
                      <div className="blue-bg"></div>
                      <div className="data-range-right-b">
                        <div className="left-b"></div>
                        <div className="data-range-right-user">USER</div>
                        <img
                          className="data-range-right-img"
                          src={Image}
                          alt="logo"
                        ></img>
                      </div>
                      <div className="blue-bg"></div>
                    </div>
                  </div>
                  <div className="data-range-left-c">
                    <div className="mb-16">
                      <div className="time-input">
                        <label className="before-event">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id=""
                            />
                            <div className="before-event-head">
                              Before event
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="before-event-input">
                        <div class="form-group">
                          <select class="form-control" id="">
                            <option>5 min</option>
                            <option>10 min</option>
                            <option>15 min</option>
                            <option>30 min</option>
                            <option>45 min</option>
                            <option>1 hr</option>
                            <option>1 hr 30 min</option>
                            <option>2 hrs</option>
                            <option>2 hrs 30 min</option>
                            <option>3 hrs</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mb-16">
                      <div className="time-input">
                        <label className="before-event">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id=""
                            />
                            <div className="before-event-head">After event</div>
                          </div>
                        </label>
                      </div>
                      <div className="before-event-input">
                        <div class="form-group">
                          <select class="form-control" id="">
                            <option>5 min</option>
                            <option>10 min</option>
                            <option>15 min</option>
                            <option>30 min</option>
                            <option>45 min</option>
                            <option>1 hr</option>
                            <option>1 hr 30 min</option>
                            <option>2 hrs</option>
                            <option>2 hrs 30 min</option>
                            <option>3 hrs</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="data-range-form data-range-form-a">
                <button
                  className="save-as-new-schedule"
                  type="button"
                  style={{ marginTop: "0px" }}
                  onClick={()=>handleChange()}
                >
                  Additional rules for our availability &nbsp;
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
            {additional==true ?
            <AdditionalRules/>:""}

            <div className="form-box-last">
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#datarange-form"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#datarange-form"
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
export default DataRangeform;
