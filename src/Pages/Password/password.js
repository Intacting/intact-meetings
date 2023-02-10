import React from "react";
import Image from "../../assets/Image/proaxiom-symbol+text.png"
const Password = ()=>{
    return(<>
    <div className=" pass-page">
    <div className="password password-a">
    <h1 style={{ textAlign : "center" }}>
                <img
                  src={Image}
                  height="40px"
                  style={{ display : "inline",width: "190px",
                  height: "22px" }}
                  alt="Calendly logo"
                  width="auto"
                  className="logo-img"
                /></h1>
                <h2>Welcome, abc@gamil.com!</h2>
                <button className="password-b password-c">
                    (This is not me.)
                </button>
            <div className="log-sign-pass-box log-sign-pass-box-a">
                    <form action="/user">
                        <div>
                            <div className="form-head-a">
                                <label>Enter your password.</label>
                            </div>
                            <div>
                                <input className="form-log-input" placeholder="Password" name = "password" type="password"/>
                            </div>
                            <div className="form-head-b">
                            <button className="form-head-button form-head-button-a" type="submit">
                                <div className="continue">Continue</div>
                            </button>
                            </div>
                        </div>
                    </form>
            </div>
            <div className="log-sign-down">
                I forgot my password. Please <button className="log-sign-down-button-a">
                    send me a recovery email.
                </button>
                <br/>
                Don't have an account? <button className="log-sign-down-button-a">
                    Sign up.
                </button>
            </div>
            <div className="log-sign-last">
            <button className="log-sign-down-button-a">
                    English<span>
                    <i className="fa-solid fa-angle-down"></i>
                    </span>
                </button>
            </div>
    </div>
    
    </div>
    </>)
}
export default Password;