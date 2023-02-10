import React, { useState } from "react";
import Image from "../../../assets/Image/google-meet.svg";
import Image1 from "../../../assets/Image/zoom.svg";
import Image2 from "../../../assets/Image/ms-teams.svg";
import Image3 from "../../../assets/Image/webex.svg";
import Image4 from "../../../assets/Image/gotomeeting.svg";

const AddEventForm = () => {
  const [id, setId] = useState(1);
  return (
    <>
      <div>
        <div className="form-box">
          <form>
            <div className="form-box-a">
              <div className="form-box-c">
                <div
                  className="form-box-b"
                  style={{ backgroundColor: "rgb(130, 71, 245)" }}
                ></div>
                <div className="form-box-d none">
                  <div style={{ fontSize: "16px" }}>What event is this?</div>
                  <div className="form-box-e">
                    <span>No location given</span>
                  </div>
                </div>
              </div>
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#form-down"
                  
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#form-down"
                >
                  <div className="toptaber-right-button-a">
                    <span className="toptaber-right-button-plus">Save & Close</span>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <div className="form-box-g">
                <div class="form-group">
                  <label style={{ fontSize: "13px" }}>
                    <b>Event Name * </b>
                    <i class="fa-solid fa-circle-info"></i>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Event Name"
                  ></input>
                </div>
                <div class="form-group dropdown">
                  <div
                    className=""
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <label
                      for="exampleFormControlSelect1"
                      style={{ fontSize: "13px" }}
                    >
                      <b>Location </b>
                      <i class="fa-solid fa-circle-info"></i>
                    </label>
                    <input
                      type="text"
                      class="form-control dropdown-toggle"
                      placeholder="Add Location"
                    ></input>
                  </div>
                  <div
                    className="form-location dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                            >
                              <title>Physical location</title>
                              <path
                                d="M12 0C7.453 0 3.623 3.853 3.623 8.429c0 6.502 7.18 14.931 7.42 15.172.479.482 1.197.482 1.675.24l.24-.24c.239-.24 7.419-8.67 7.419-15.172C20.377 3.853 16.547 0 12 0zm0 11.56c-1.675 0-2.872-1.445-2.872-2.89S10.566 5.78 12 5.78c1.436 0 2.872 1.445 2.872 2.89S13.675 11.56 12 11.56z"
                                fill="#F75D59"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          In-personal
                          <div className="form-location-content-a">
                            Set an address or place
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <svg
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="100%"
                              height="100%"
                            >
                              <title>Phone call</title>
                              <path
                                d="M15.415 22.655c2.356 1.51 5.218 1.174 7.238-.84l.842-.838c.673-.672.673-2.014 0-2.685l-3.012-3.006c-.673-.671-1.541-.2-2.215.472-.673.671-2.679 1.334-3.352.663l-7.35-7.144c-.674-.671-.016-2.677.658-3.348.673-.671.673-2.014 0-2.685L5.65.67C4.977 0 3.63 0 2.957.671l-.841.671C.264 3.356-.073 6.21 1.274 8.558a56.353 56.353 0 0014.14 14.097z"
                                fill="#09f"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          Phone call
                          <div className="form-location-content-a">
                            Inbound or outbound calls
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <img src={Image} alt="google-meet"></img>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          Google Meet
                          <div className="form-location-content-a">
                            Web Conference
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <img src={Image1} alt="google-meet"></img>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          Zoom
                          <div className="form-location-content-a">
                            Web Conference
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <img src={Image2} alt="google-meet"></img>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          Microsoft Teams
                          <div className="form-location-content-a">
                            Web Conference
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <img src={Image3} alt="google-meet"></img>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          Webex
                          <div className="form-location-content-a">
                            Web Conference
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <img src={Image4} alt="google-meet"></img>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          GoTo Meeting
                          <div className="form-location-content-a">
                            Web Conference
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                            >
                              <title>Custom location</title>
                              <rect
                                x="0.72"
                                y="3.6"
                                width="22.56"
                                height="16.8"
                                rx="2.16"
                                stroke="#8247f5"
                                stroke-width="1.44"
                              ></rect>
                              <path
                                stroke="#8247f5"
                                stroke-width="1.5"
                                d="M4.75 6.88v11"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          Custom
                          <div className="form-location-content-a">
                            Leave customised location details
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="form-location-box dropdown-item">
                      <div className="form-location-box-a">
                        <div className="form-location-box-b">
                          <div className="form-location-logo">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                            >
                              <title>Ask invitee for location</title>
                              <path
                                d="M21.428 0H2.573C1.2 0 0 1.2 0 2.572v14.57c0 1.373 1.2 2.573 2.572 2.573h2.57v3.428c0 .514.343.857.858.857.172 0 .343 0 .515-.172l5.142-4.113h9.77c1.372 0 2.572-1.2 2.572-2.572V2.573C24 1.2 22.8 0 21.429 0z"
                                fill="#004796"
                              ></path>
                              <path
                                d="M12 4C9.828 4 8 5.814 8 7.967c0 3.06 3.429 7.027 3.542 7.14.23.226.572.226.8.113l.116-.113c.113-.114 3.542-4.08 3.542-7.14C16 5.814 14.172 4 12 4zm0 5.44c-.8 0-1.37-.68-1.37-1.36s.685-1.36 1.37-1.36 1.372.68 1.372 1.36S12.8 9.44 12 9.44z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="form-location-conent">
                          Ask invitee
                          <div className="form-location-content-a">
                            My invitee will set the location
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  {/* <select class="form-control" id="exampleFormControlSelect1">
                    <option>
                      <button className="form-location-box">
                         <div className="form-location-box-a">
                           <div className="form-location-box-b">
                             <div className="form-location-logo">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                             </div>
                           </div>
                         </div>
                      </button>
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select> */}
                </div>
                <div class="form-group">
                  <label
                    for="exampleFormControlTextarea1"
                    style={{ fontSize: "13px" }}
                  >
                    <b> Description/Instruction </b>
                    <i class="fa-solid fa-circle-info"></i>
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Write a summary and any details your invitee should know about the event."
                  ></textarea>
                </div>
                <div class="form-group">
                  <label style={{ fontSize: "13px" }}>
                    <b>Event Link * </b>
                    <i class="fa-solid fa-circle-info"></i>
                  </label>
                  <br></br>
                  <label style={{ marginBottom: "0px" }}>
                    proaxiom.in/user_name/
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Event Name"
                  ></input>
                </div>
                <div class="form-group">
                  <label style={{ fontSize: "13px" }}>
                    <b>Event color * </b>
                    <i class="fa-solid fa-circle-info"></i>
                  </label>
                  <div aria-labelledby="color-list-group-label">
                    <label className="color-label " onClick={() => setId(1)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Red (#ff4f00)"
                        className="color-label-a"
                        value="#ff4f00"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(255, 79, 0)" }}
                      ></div>
                      {id == 1 ? (
                        <>
                          <span className="color-label-c">
                            <i className="fa-solid fa-check"></i>
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Red</span>
                    </label>
                    <label className="color-label" onClick={() => setId(2)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Light pink (#ff758e)"
                        className="color-label-a"
                        value="#ff758e"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(255, 117, 142)" }}
                      ></div>
                      {id == 2 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Light pink</span>
                    </label>
                    <label className="color-label" onClick={() => setId(3)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Violet (#e55cff)"
                        className="color-label-a"
                        value="#e55cff"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(229, 92, 255)" }}
                      ></div>
                      {id == 3 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Magenta</span>
                    </label>
                    <label className="color-label" onClick={() => setId(4)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Violet (#8247f5)"
                        className="color-label-a"
                        value="#8247f5"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(130, 71, 245)" }}
                      ></div>
                      {id == 4 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Violet</span>
                    </label>
                    <label className="color-label" onClick={() => setId(5)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Blue (#0099ff)"
                        className="color-label-a"
                        value="#0099ff"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(0, 153, 255)" }}
                      ></div>
                      {id == 5 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Blue</span>
                    </label>
                    <label className="color-label" onClick={() => setId(6)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Cyan (#0ae8f0)"
                        className="color-label-a"
                        value="#0ae8f0"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(10, 232, 240)" }}
                      ></div>
                      {id == 6 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Cyan</span>
                    </label>
                    <label className="color-label" onClick={() => setId(7)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Lime green (#17e885)"
                        className="color-label-a"
                        value="#17e885"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(23, 232, 133)" }}
                      ></div>
                      {id == 7 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Lime green</span>
                    </label>
                    <label className="color-label" onClick={() => setId(8)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Electric Lime (#ccf000)"
                        className="color-label-a"
                        value="#ccf000"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(204, 240, 0)" }}
                      ></div>
                      {id == 8 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Electric Lime</span>
                    </label>
                    <label className="color-label" onClick={() => setId(9)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Bright yellow (#f8e436)"
                        className="color-label-a"
                        value="#f8e436"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(248, 228, 54)" }}
                      ></div>
                      {id == 9 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Bright yellow</span>
                    </label>
                    <label className="color-label" onClick={() => setId(10)}>
                      <input
                        name="color"
                        type="radio"
                        aria-label="Orange (#ffa600)"
                        className="color-label-a"
                        value="#ffa600"
                      />
                      <div
                        className="color-label-b"
                        style={{ backgroundColor: "rgb(255, 166, 0)" }}
                      ></div>
                      {id == 10 ? (
                        <span className="color-label-c">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        ""
                      )}
                      <span className="color-label-d show">Orange</span>
                    </label>
                  </div>
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
                  data-target="#form-down"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#form-down"
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
export default AddEventForm;
