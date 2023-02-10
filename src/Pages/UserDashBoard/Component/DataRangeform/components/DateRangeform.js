import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DateRange } from "react-date-range";
const DateRangeform = ()=>{
  const [id, setId] = useState(1);
  const handleChange = (n) => {
    if (n == 1) {
      setId(1);
      console.log(1);
    }
    if (n == 2) {
      setId(2);
      console.log(2);
    }
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
    return(<>
    <div className="data-range-grid">
                  <h2 className="data-range-h2">Data range</h2>
                  <div className="data-range-right">
                    Set a range of dates when you can accept meetings.
                  </div>
                  <div className="data-range-left-c">
                    <label className="data-range-label">
                      Invitees can schedule...
                    </label>
                    <div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-range"
                          id=""
                          value="option1"
                          checked
                        />
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
                                list="browsers"
                                name="myBrowser"
                              />
                              <datalist id="browsers">
                                <option value="Calender days" />
                                <option value="Weekdays" />
                              </datalist>
                             
                            </div>
                            into the future
                          </div>
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-range"
                          id=""
                          value="option2"
                        />
                        <label class="form-check-label">
                          <div className="d-f">
                            Within a date range{" "}
                            {id == 1 ? (
                              <div className="col-md-6">
                                <input
                                  onClick={() => handleChange(2)}
                                  type="text"
                                  class="form-control form-group"
                                  placeholder="Date Range"
                                  value={state.startDate}
                                ></input>
                              </div>
                            ) : (
                              <div>
                                <DateRange
                                  editableDateInputs={true}
                                  onChange={(item) =>
                                    setState([item.selection])
                                  }
                                  moveRangeOnFirstSelection={false}
                                  ranges={state}
                                />
                                <br />
                                <Link
                                  className="toptaber-right-button toptaber-right-button-2"
                                  style={{ marginRight: "10px" }}
                                  onClick={() => handleChange(1)}
                                >
                                  <div className="toptaber-right-button-a">
                                    <span className="toptaber-right-button-plus">
                                      Apply
                                    </span>
                                  </div>
                                </Link>
                                <Link
                                  className="add-one-on-one-share"
                                  style={{ float: "inherit" }}
                                  onClick={() => handleChange(1)}
                                >
                                  Cancel
                                </Link>
                              </div>
                            )}
                          </div>
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-range"
                          id=""
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Indefinitely in to the future
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
    </>)
}
export default DateRangeform;