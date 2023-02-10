import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import SaveasNewSchedhule from "./SaveasNewSchedule";
import { Calendar } from "react-big-calendar";
import BigCalender from "./BigCalender";
import CalendarModal from "./CalenderModal";
const Availability = ()=>{
    // const [checked, setChecked] = useState(false);
  const [custom, setCustom] = useState(1);
  const [swap, setSwap] = useState(1);
    const Weeks = [
        { id:1, day: "Sun", checked : true},
        { id:2, day: "Mon", checked : true },
        { day: "Tue" },
        { day: "Wed"},
        { day: "Thu" },
        { day: "Fri"},
        { day: "Sat"},
      ];
      
      const handlecheck = (id) => {
        console.log("in check");
        // setChecked(!checked);
        for(var i=0;i<7;i++){
          if(Weeks[i].id==id){
          Weeks[i].checked=false;
          console.log(Weeks[i].checked);
          break;}
        }
      
      };
    
    return(<>
    <div className="data-range-form data-range-form-a">
                <div className="data-range-grid">
                  <h2 className="data-range-h2">
                    How do you want to offer your availability for this event
                    type?
                  </h2>
                  <div className="data-range-right">
                    Select one of your schedules or define custom hours specific
                    to this type of event.
                  </div>
                  <div className="data-range-left-c">
                    <Link
                      className={`existing_schedule ${
                        custom == 1 ? "active" : ""
                      }`}
                      onClick={() => setCustom(1)}
                    >
                      Use an existing schedule
                    </Link>
                    <Link
                      className={`existing_schedule ${
                        custom == 2 ? "active" : ""
                      }`}
                      onClick={() => setCustom(2)}
                    >
                      Set custom hours
                    </Link>
                  </div>
                </div>
                {custom == 1 ? (
                  <>
                    <div className="existing1">
                      <h2 className="data-range-h2">
                        Which schedule do you want to use?
                      </h2>
                      <div
                        class="form-group col-md-5"
                        style={{ paddingLeft: "0px" }}
                      >
                        <select class="form-control" id="">
                          <option>
                            <i class="fa-solid fa-star-sharp"></i> Working hours
                          </option>
                          <option>first</option>
                          <option>second</option>
                        </select>
                      </div>
                    </div>
                    <div className="existing2">
                      <h3 className="existing3">
                        <i class="fa-solid fa-earth-americas"></i>&nbsp; Indian
                        Standard Time
                      </h3>
                      <div className="weekly_hours d-f ">
                        <div className="weekly_hours1">
                          <h4 className="weekly_hours-h4">weekly hours</h4>
                          <div className="weekly_hours2">
                            <table>
                              <tr>
                                <td className="weekly_hours3">sun</td>
                                <td className="weekly_hours4">Unavailable</td>
                              </tr>
                              <tr>
                                <td className="weekly_hours3">mon</td>
                                <td className="weekly_hours4">
                                  9:00a.m. - 5:00p.m.
                                </td>
                              </tr>
                              <tr>
                                <td className="weekly_hours3">tue</td>
                                <td className="weekly_hours4">
                                  9:00a.m. - 5:00p.m.
                                </td>
                              </tr>
                              <tr>
                                <td className="weekly_hours3">wed</td>
                                <td className="weekly_hours4">
                                  9:00a.m. - 5:00p.m.
                                </td>
                              </tr>
                              <tr>
                                <td className="weekly_hours3">thu</td>
                                <td className="weekly_hours4">
                                  9:00a.m. - 5:00p.m.
                                </td>
                              </tr>
                              <tr>
                                <td className="weekly_hours3">fri</td>
                                <td className="weekly_hours4">
                                  9:00a.m. - 5:00p.m.
                                </td>
                              </tr>
                              <tr>
                                <td className="weekly_hours3">sat</td>
                                <td className="weekly_hours4">Unavailable</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div className="weekly_hours5">
                          <h4
                            className="weekly_hours-h4"
                            style={{ paddingLeft: "20px" }}
                          >
                            Date overrides
                          </h4>
                          <div className="weekly_hours6">
                            <div className="weekly_hours7">
                              To override your hours on specific dates, update
                              your schedule under Availability
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="time_zone">
                    <div className="time_zone1">
                      <div className="time_zone2">
                        <div className="time_zone3">
                          <div className="time_zone3">
                            <div className="time_zone4">
                              <p className="time_zone-p">time zone</p>
                              <div className="p-r">
                                <div className="dropdown">
                                  <button
                                    className="time_zone_button"
                                    type="button"
                                    id="timezone"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    Indian Standard Time &nbsp;{" "}
                                    <i class="fa-solid fa-angle-down"></i>
                                  </button>
                                  <div
                                    class="dropdown-menu"
                                    aria-labelledby="timezone"
                                    style={{ width: "300px" }}
                                  >
                                    <div
                                      className="dropdown-header"
                                      style={{ color: "black" }}
                                    >
                                      <b>Time Zone</b>
                                    </div>
                                    <div
                                      className="dropdown-header"
                                      style={{
                                        color: "black",
                                        paddingLeft: "5px",
                                      }}
                                    >
                                      <b>Asia</b>
                                    </div>
                                    <a class="dropdown-item" href="#">
                                      <div className="d-f jc-sb p-10">
                                        <div>Jordan Time</div>
                                        <div>9:18 a.m.</div>
                                      </div>
                                    </a>
                                    <a class="dropdown-item" href="#">
                                      <div className="d-f jc-sb p-10">
                                        <div>Asia/Baku</div>
                                        <div>10:22 a.m.</div>
                                      </div>
                                    </a>
                                    <a class="dropdown-item" href="#">
                                      <div className="d-f jc-sb p-10">
                                        <div>Syria Time</div>
                                        <div>9:23 a.m.</div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="time_zone3">
                            <button
                              className="save-as-new-schedule"
                              type="button"
                              data-toggle="modal"
                              data-target="#modal2"
                            >
                              Save as new schedule
                            </button>
                            <SaveasNewSchedhule />
                            <div className="time_zone5">
                              <button
                                type="button"
                                className={`${
                                  swap == 1 ? "highlighted" : ""
                                } time_zone6`}
                                onClick={() => setSwap(1)}
                              >
                                <i class="fa-solid fa-list"></i> List view
                              </button>
                              <button
                                type="button"
                                className={` ${
                                  swap == 2 ? "highlighted" : ""
                                } time_zone6 `}
                                onClick={() => setSwap(2)}
                              >
                                <i class="fa-solid fa-calendar"></i> Calendar
                                view
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {swap == 1 ? (
                        <div className="time_zone-bt d-f">
                          <div className="time_zone-br">
                            <fieldset className="list_view">
                              <legend>
                                <h3 className="list_view1">
                                  {" "}
                                  Set your weekly hours
                                </h3>
                              </legend>
                              <form>
                                <table>
                                  {Weeks.map((week) => {
                                    return (
                                      <>
                                        <tr className="list_section list_section1">
                                          <td className="first-list">
                                            <div class="form-check">
                                              <input
                                                type="checkbox"
                                                class="form-check-input"
                                                id=""
                                                onChange={()=>handlecheck(week.id)}
                                              />
                                              <label
                                                class="form-check-label"
                                                for=""
                                              >
                                                <b>
                                                {week.day}
                                                </b>
                                              </label>
                                            </div>
                                          </td>
                                          <td className="first-list1 unavailable">
                                            {week.checked ? (
                                              <div> Unavailable</div>
                                            ) : (
                                              <div className="time-input d-f">
                                                <div className="time-input1 ">
                                                  <select className="form-control time-input2">
                                                    <option>12:00pm</option>
                                                    <option>1:00pm</option>
                                                    <option>2:00pm</option>
                                                    <option>3:00pm</option>
                                                    <option>4:00pm</option>
                                                    <option>5:00pm</option>
                                                    <option>6:00pm</option>
                                                    <option>7:00pm</option>
                                                  </select>
                                                </div>
                                                &nbsp; - &nbsp;
                                                <div className="time-input1 ">
                                                  <select className="form-control time-input2">
                                                    <option>12:00pm</option>
                                                    <option>1:00pm</option>
                                                    <option>2:00pm</option>
                                                    <option>3:00pm</option>
                                                    <option>4:00pm</option>
                                                    <option>5:00pm</option>
                                                    <option>6:00pm</option>
                                                    <option>7:00pm</option>
                                                  </select>
                                                </div>
                                                <div className="list-icon ml-24">
                                                  <i class="fa-solid fa-trash-can"></i>
                                                </div>
                                              </div>
                                            )}
                                          </td>
                                          <td className="first-list2">
                                            <div className="list-icon">
                                              <i class="fa-solid fa-plus"></i>
                                            </div>
                                          </td>
                                          <td className="first-list2">
                                            <a
                                              href="#"
                                              role="button"
                                              id="dropdowncopy"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              <div className="list-icon">
                                                <i class="fa-regular fa-copy"></i>
                                              </div>
                                            </a>
                                            <div
                                              class="dropdown-menu"
                                              aria-labelledby="dropdowncopy"
                                            >
                                              <div className="dropdown-copy">
                                                copy time to..
                                              </div>
                                              <div className="dropdown-copy1 jc-sb">
                                                <div className="">
                                                  <div> Sunday</div>
                                                </div>
                                                <div class="form-check ">
                                                  <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id=""
                                                  ></input>
                                                </div>
                                              </div>
                                              <div className="dropdown-copy1 jc-sb">
                                                <div className="">
                                                  <div> Monday</div>
                                                </div>
                                                <div class="form-check ">
                                                  <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id=""
                                                  ></input>
                                                </div>
                                              </div>
                                              <div className="dropdown-copy1 jc-sb">
                                                <div className="">
                                                  <div> Tuesday</div>
                                                </div>
                                                <div class="form-check ">
                                                  <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id=""
                                                  ></input>
                                                </div>
                                              </div>
                                              <div className="dropdown-copy1 jc-sb">
                                                <div className="">
                                                  <div> Wednesday</div>
                                                </div>
                                                <div class="form-check ">
                                                  <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id=""
                                                  ></input>
                                                </div>
                                              </div>
                                              <div className="dropdown-copy1 jc-sb">
                                                <div className="">
                                                  <div> Thursday</div>
                                                </div>
                                                <div class="form-check ">
                                                  <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id=""
                                                  ></input>
                                                </div>
                                              </div>
                                              <div className="dropdown-copy1 jc-sb">
                                                <div className="">
                                                  <div> Friday</div>
                                                </div>
                                                <div class="form-check ">
                                                  <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id=""
                                                  ></input>
                                                </div>
                                              </div>
                                              <div className="dropdown-copy1 jc-sb">
                                                <div className="">
                                                  <div> Saturday</div>
                                                </div>
                                                <div class="form-check ">
                                                  <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id=""
                                                  ></input>
                                                </div>
                                              </div>
                                              <button
                                                className="toptaber-right-button toptaber-right-button-2"
                                                type="button"
                                                style={{ width: "150px" }}
                                              >
                                                <div className="toptaber-right-button-a">
                                                  <span className="toptaber-right-button-plus">
                                                    Apply
                                                  </span>
                                                </div>
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                                </table>
                              </form>
                            </fieldset>
                          </div>
                          <div className="override">
                            <div className="p-24">
                              <p className="override-p">Add date overrides</p>
                              <div className="override-div">
                                Add dates when your availability changes from
                                your weekly hours
                              </div>
                              <button type="button" className="override-button toptaber-right-button-2"
                              data-toggle="modal"
                              data-target="#modal3"
                              >
                                Add a date override
                              </button>
                              <CalendarModal/>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <BigCalender />
                      )}
                    </div>
                  </div>
                )}
              </div>
    </>)
}
export default Availability;