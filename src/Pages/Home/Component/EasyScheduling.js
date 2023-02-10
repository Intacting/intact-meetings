import React from "react";
import ButtonBold from "../../../Components/Button-bold";
import ButtonLight from "../../../Components/Button-light";
import Image1 from "../../../assets/Image/Homepage-Hero-new.png";
const EasyScheduling = () => {
  return (
    <>
      <section className="section-a">
        <div className="section-b">
          <div className="row">
            <div className="col left">
              {/* <h6 className="sub-head">Calendly for Teams</h6> */}
              <h1 className="heading-esa">
                Easy scheduling <span className="CSnXO ahead">ahead</span>
              </h1>
              <div className="para for-button">
                <p className="para-1">
                  Proaxiom Booking is your scheduling automation platform for
                  eliminating the back-and-forth emails for finding the perfect
                  time — and so much more.
                </p>
                <div class="sc-1d6wj51-0 sc-19ksea3-0 header-esa-form-a header-esa-form">
                  <form
                    action="/app/signup"
                    method="get"
                    novalidate=""
                    data-testid="email-form"
                    id="email-form"
                    class="sc-60eeky-0 header-esa-form-b"
                  >
                    <div
                      data-testid="email-input"
                      class="sc-1d6wj51-0 header-form"
                    >
                      <input
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        class="sc-r1giur-0 krZmSC"
                        value="name"
                      />
                    </div>
                    <input type="hidden" name="lang" value="en" />
                    <div className="eeBhJO">
                      <ButtonBold
                        minheight="62px"
                        margin="0px"
                        width="max-content"
                        name="Sign up"
                      />
                    </div>
                    <span class="sc-60eeky-1 des-down">
                      Create your free account. No credit card required.
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="col wh-100">
              <div className="wh-a">
                <div className="image-wrapper-a img-block">
                  <img
                    style={{
                      objectFit: "contain",
                      opacity: 1,
                    }}
                    src={Image1}
                    alt="Smarter scheduling for teams"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EasyScheduling;
