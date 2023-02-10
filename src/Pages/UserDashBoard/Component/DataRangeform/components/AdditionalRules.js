import React, { useState } from "react";
const AdditionalRules = () => {
  const [option, setOption] = useState();
  const handleOption = (event) => {
    setOption(event.target.value);
    console.log(option);
  };
  return (
    <>
      <div>
        <div className="data-range-form data-range-form-a">
          <div className="data-range-grid">
            <h2 className="data-range-h2">start time increments</h2>
            <div className=" data-range-right">
              Set the frequency of available time slots for invitees.
            </div>
            <div className="data-range-left-c">
              <label className="data-range-label">
                Show available start times in increments of...
              </label>
              <div class="form-group col-md-10" style={{ paddingLeft: "0px" }}>
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
        <div className="data-range-form data-range-form-a">
          <div className="data-range-grid">
            <h2 className="data-range-h2">Scheduling conditions</h2>
            <div className=" data-range-right">
              Set the minimum amount of notice that is required and how many
              events are allowed per day.
            </div>
            <div className="data-range-left-c">
              <label className="data-range-label">
                Invitees can't schedule within...
              </label>
              <label class="form-check-label">
                <div className="d-f">
                  <div class="form-group col-md-2 pl-0">
                    <input
                      placeholder="12"
                      type="text"
                      class="form-control"
                      id=""
                    />
                  </div>
                  <div class=" dropdown form-group col-md-4 pl-0">
                    <input
                      type="text"
                      class="form-control "
                      placeholder="Select Days"
                      id=""
                      list="time"
                      name=""
                    />
                    <datalist id="time">
                      <option value="minutes" />
                      <option value="hours" />
                      <option value="days" />
                    </datalist>
                  </div>
                  of an event start time.
                </div>
              </label>
              <label className="data-range-label">
                Maximum allowed events per day for this type of event
              </label>
              <label class="form-check-label">
                <div class="form-group col-md-5 pl-0">
                  <input
                    placeholder="12"
                    type="text"
                    class="form-control"
                    id=""
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="data-range-form data-range-form-a">
          <div className="data-range-grid">
            <h2 className="data-range-h2">Time zone display</h2>
            <div className=" data-range-right">
              If you’re meeting in person, you should lock this to the time zone
              of your event location. Otherwise, Calendly detects your time
              zones to make sure everyone meets at the correct time.
            </div>
            <div className="data-range-left-c">
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-range"
                    id=""
                    value=""
                    checked
                  />
                  <label>
                    Automatically detect and show the times in my invitee's time
                    zone
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-range"
                    id=""
                    value=""
                  />
                  <label>Lock the timezone (best for in-person events)</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="data-range-form data-range-form-a">
          <div className="data-range-grid">
            <h2 className="data-range-h2">Secret event</h2>
            <div className=" data-range-right">
              Use this to hide the event on your main scheduling page.
            </div>
            <div className="data-range-left-c">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="" />
                <label class="form-check-label" for="exampleCheck1">
                  Make this a secret event
                </label>
              </div>
              <div className="sub-f">
              Only invitees who have this Calendly link can schedule with you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdditionalRules;
