import React, { useState } from "react";
import { Link } from "react-router-dom";
const ConfirmationPage = () => {
  const [custom, setCustom] = useState(false);
  const [option, setOption] = useState("Display");
  const handleChange = () => {
    setCustom(!custom);
  };
  const handleOption = (event) => {
    setOption(event.target.value);
    console.log(option);
  };
  return (
    <>
      <div>
        <div className="form-box">
          <form>
            <div className="form-box-a">
              <div className="form-box-c">
                <div>
                  <i
                    class="fa-solid fa-arrow-up-right-from-square"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <div className="form-box-d none">
                  <div style={{ fontSize: "16px", color: "black" }}>
                    Confirmation Page
                  </div>
                  <div className="form-box-e">
                    <span>Booking confirmation page, no active links</span>
                  </div>
                </div>
              </div>
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#confirmation-page"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#confirmation-page"
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
                <div className="confirmation-form">
                  <div>
                    <h2 className="data-range-h2 fs-14">
                      On confirmation &nbsp;{" "}
                      <i class="fa-solid fa-circle-info"></i>
                    </h2>
                    <div
                      class="form-group col-md-12"
                      style={{ paddingLeft: "0px" }}
                    >
                      <select
                        class="form-control"
                        id=""
                        onChange={(e) => handleOption(e)}
                      >
                        <option value="Display">
                          Display Calendly confirmation page
                        </option>
                        <option value="Redirect">
                          Redirect to an external site
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {option == "Display" ? (
                  <div>
                    <h2 className="data-range-h2 fs-14">
                      Display button to schedule another event? &nbsp;{" "}
                      <i class="fa-solid fa-circle-info"></i>
                    </h2>
                    <div
                      class="form-group col-md-6"
                      style={{ paddingLeft: "0px" }}
                    >
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Schedule another event"
                        disabled
                      />
                    </div>

                    <p className="confirmation-form-p">
                      Use this section to display custom links after this event
                      is confirmed. For example, you might link to a custom
                      thank you page on your website. Custom links will appear
                      as buttons to invitees.
                    </p>
                    <div className="mb-20">
                      <div
                        className="in-cancel-policy1"
                        style={{ display: "block" }}
                      >
                        <Link>Upgrade your subscription</Link> to show a custom
                        link to your invitee after they confirm the event.
                      </div>
                    </div>
                    {custom == false ? (
                      <button
                        type="button"
                        className="toptaber-right-button-2 golden b-golden bg-white"
                        onClick={handleChange}
                      >
                        Add Custom Link
                      </button>
                    ) : (
                      <form>
                        <h2 className="data-range-h2 fs-14">Add Link</h2>
                        <div
                          class="form-group col-md-6"
                          style={{ paddingLeft: "0px" }}
                        >
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Your Custom Link"
                          />
                        </div>
                        <div
                          class="form-group col-md-6"
                          style={{ paddingLeft: "0px" }}
                        >
                          <input
                            class="form-control"
                            type="text"
                            placeholder="http://www.example.com"
                          />
                        </div>
                        <button
                          type="button"
                          className="toptaber-right-button-2 golden b-golden bg-white"
                          style={{ marginRight: "5px" }}
                        >
                          Add{" "}
                        </button>
                        <button
                          type="button"
                          className="toptaber-right-button-2 b-black bg-white"
                          onClick={handleChange}
                        >
                          Cancel
                        </button>
                      </form>
                    )}
                  </div>
                ) : (
                  <form>
                    <div
                      className="in-cancel-policy1 col-md-6"
                      style={{ display: "block" }}
                    >
                      <Link>Upgrade your subscription</Link> to send invitees to
                      a specific site after they confirm your Calendly event.
                    </div>
                    <h2 className="data-range-h2 mt-14 fs-14">
                      Redirect URL&nbsp; <i class="fa-solid fa-circle-info"></i>
                    </h2>
                    <div
                      class="form-group col-md-6"
                      style={{ paddingLeft: "0px" }}
                    >
                      <input
                        class="form-control"
                        type="text"
                        placeholder="http://www.example.com"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                      />
                      <label class="form-check-label" >
                      Pass event details to your redirected page. <Link>Learn more</Link>
                      </label>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="form-box-last">
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#confirmation-page"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#confirmation-page"
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
export default ConfirmationPage;
