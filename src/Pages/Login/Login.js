import React from "react";
import ButtonBold from "../../Components/Button-bold";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import Image from "../../assets/Image/Chrome.svg";
import Image1 from "../../assets/Image/Bg-Shape.svg";
const Login = ()=>{
    return(<>
    <Nav/>
    <section className="section-a">
        <div className="section-b">
          <div className="row">
            <div className="col left " style={{ maxWidth : "560px" }}>
              {/* <h6 className="sub-head">Calendly for Teams</h6> */}
              <h1 className="heading-esa">
                Welcome back to <span className="CSnXO ahead">Proaxiom</span>
              </h1>
              <div className="para for-button">
                <p className="para-1">
                Log in to your account to get back to your hub for scheduling meetings.
                </p>
                <div class="sc-1d6wj51-0 sc-19ksea3-0 header-esa-form-a header-esa-form">
                    <p className="form-head">Email Address</p>
                  <form
                    action="/intact-meetings/app/signup"
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
                      href = "/intact-meetings/app/login/password"
                        minheight="62px"
                        margin="0px"
                        width="max-content"
                        name="Log in"
                      />
                    </div>
                  </form>
                </div>
                <p className="form-end-p">
                    <span className="form-end-pa">Don't have an account?</span>
                    <span className="form-end-b"><a className="button-bold" style={{borderColor: "transparent",
                           backgroundColor: "transparent", padding : "7px" }}>
                        <span className="form-end-pa" style={{ color: "#c59948" }}>Sign Up</span>
                        </a></span>
                </p>
              </div>
            </div>
            {/* <div className="col wh-100">
              <div className="wh-a">
                <div className="image-wrapper-a img-block">
                  <img
                    style={{
                      objectFit: "contain",
                      opacity: 1,
                    }}
                    src="https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1375&amp;h=1115&amp;q=50&amp;fm=png"
                    srcset="https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=750&amp;h=608&amp;q=50&amp;fm=png 750w,
https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1080&amp;h=876&amp;q=50&amp;fm=png 1080w,
https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1366&amp;h=1108&amp;q=50&amp;fm=png 1366w,
https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1375&amp;h=1115&amp;q=50&amp;fm=png 1375w"
                    alt="Smarter scheduling for teams"
                  ></img>
                </div>
              </div>
            </div> */}
            <div className=" col login-right">
              <div className="login-right-a login-right-b">
              <a className="wh-100">
                <div className="login-right-c">
                  <div className="login-right-first">
                    <div className="login-right-first-a">
                      <p className="whats-new">Whta's New?</p>
                    </div>
                    <div className="login-right-row">
                      <div className="login-right-row-a">
                        <img className="login-right-row-img" src={Image} alt="chrome"/>
                      </div>
                      <div className="login-right-row-text">
                        <h4>Proaxiom for Chrome</h4>
                      </div>
                    </div>
                  
                  </div>
                  <div className="login-right-second">
                    <div className="login-right-second-a">
                      <div className="login-right-second-b">
                        <p>
                        Use Proaxiom while you’re on the web, without switching tabs. Select and share hand-picked times or single-use links wherever you’re interacting with invitees.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="login-right-third">
                    <div className="login-right-third-a">
                      <a className="button-bold"  style={{borderColor: "transparent",
                           backgroundColor: "transparent", flexDirection : "row", minheight : "33px" }}>
                        <span className="wh-a" style={{ color: "#c59948"  }}>Get Chrome Extension </span>
                     <div className="login-right-icon"> <i class="fa-solid fa-arrow-right" style={{  color: "#c59948"   }}></i></div>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              <img className="login-right-img login-right-img-a" src={Image1} alt="img"/>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>)
}
export default Login;