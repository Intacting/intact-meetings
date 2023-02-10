import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserNav from "../../Components/UserNav";
import Image1 from "../../assets/Image/one_on_one.svg";
import Image2 from "../../assets/Image/one-group.svg";
import Image3 from "../../assets/Image/group-one.svg";
import Image4 from "../../assets/Image/round_robin.svg";
const CreateEventType = ()=>{
    return(<>
    <div className="pass-page">
    <UserNav/>
        <div>
            <div className="subheader">
                <div className="wrapper">
                    <div className="actions">
                        <Link to="/user">
                    <button
                                        style={{
                                          borderColor:
                                          "#c59948",
                                          color:
                                          "#c59948",
                                          backgroundColor:
                                            "var(--text-color-secondary-4,rgba(255,255,255,1))",
                                          fontWeight: "400",
                                          fontSize : "1.05em"
                                        }}
                                        className="toptaber-right-button toptaber-right-button-2"
                                      >
                                        <div className="toptaber-right-button-a">
                                          <span className="toptaber-right-button-plus" style={{ fontSize: "0.85em" }}>
                                            <i
                                              class="fa-solid fa-chevron-left"
                                              style={{ fontSize: "1rem" }}
                                            ></i>   Back
                                          </span>
                                        </div>
                                      </button></Link>
                    </div>
                    <div className="title">
                        <h2 className="fs-20" style={{ marginTop : "revert" }}>Create New Event Type</h2>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="wrapper">
                <div>
                    <div className="create-event-block">
                        <table className="create-event-table">
                            <tbody>
                                <tr className="create-event-table-tr">
                                    <td>
                                        <Link style={{textDecoration : "none"}} to="/user/create_event_type/one-to-one">
                                        <button className="create-event-table-a">
                                            <div className="event-img">
                                                <img src={Image1} alt="user to user"/>
                                            </div>
                                            <div className="create-event-table-content">
                                                <h2 className="fs-20 " style={{ marginBottom: "5px" }}>One-on-One</h2>
                                                <h3 className="fs-17" style={{ marginBottom: "5px" }}>
                                                    <b>One host</b> with <b>one invitee</b>
                                                    </h3>
                                                <p className="mb-0 create-event-table-p">Good for: coffee chat, 1:1 interview, etc.</p>
                                            </div>
                                            <div className="create-event-table-arrow">
                                                <span className="usernav-downarrow">
                                                <i class="fa-solid fa-chevron-right"></i>
                                                </span>
                                            </div>
                                        </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="create-event-table-tr">
                                    <td>
                                    <Link style={{textDecoration : "none"}} to="/user/create_event_type/group_event">
                                        <button className="create-event-table-a">
                                            <div className="event-img">
                                                <img src={Image2} alt="user to user"/>
                                            </div>
                                            <div className="create-event-table-content">
                                                <h2 className="fs-20 " style={{ marginBottom: "5px" }}>Group</h2>
                                                <h3 className="fs-17" style={{ marginBottom: "5px" }}>
                                                    <b>One host</b> with <b>group of invitees</b>
                                                    </h3>
                                                <p className="mb-0 create-event-table-p">Good for: webinars, online classes, etc.</p>
                                            </div>
                                            <div className="create-event-table-arrow">
                                                <span className="usernav-downarrow">
                                                <i class="fa-solid fa-chevron-right"></i>
                                                </span>
                                            </div>
                                        </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="create-event-table-tr">
                                    <td>
                                        <button className="create-event-table-a">
                                            <div className="event-img">
                                                <img src={Image3} alt="user to user"/>
                                            </div>
                                            <div className="create-event-table-content">
                                                <h2 className="fs-20 " style={{ marginBottom: "5px" }}>Collective</h2>
                                                <h3 className="fs-17" style={{ marginBottom: "5px" }}>
                                                    <b>More than one host</b> with <b>one invitee</b>
                                                    </h3>
                                                <p className="mb-0 create-event-table-p">Good for: panel interviews, group sales calls, etc.</p>
                                            </div>
                                            <div className="create-event-table-arrow">
                                                <span className="usernav-downarrow">
                                                <i class="fa-solid fa-chevron-right"></i>
                                                </span>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="create-event-table-tr">
                                    <td>
                                        <button className="create-event-table-a">
                                            <div className="event-img">
                                                <img src={Image4} alt="user to user"/>
                                            </div>
                                            <div className="create-event-table-content">
                                                <h2 className="fs-20 " style={{ marginBottom: "5px" }}>Rount Robin</h2>
                                                <h3 className="fs-17" style={{ marginBottom: "5px" }}>
                                                    <b>One rotating host</b> with <b>one invitee</b>
                                                    </h3>
                                                <p className="mb-0 create-event-table-p">Good for: distributinhg incoming sales lead</p>
                                            </div>
                                            <div className="create-event-table-arrow">
                                                <span className="usernav-downarrow">
                                                <i class="fa-solid fa-chevron-right"></i>
                                                </span>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="create-event-more-way">
                            <p className="create-event-more-p ">More Way to meet</p>
                            <div className="create-event-more-way-a">
                                <button className="create-event-more-way-b">
                                        <div>
                                            <h5 className="event-more-a">One-off meeting</h5>
                                            <p>Invite someone to pick a time with you without creating an Event Type.</p>
                                        </div>
                                        <div className="create-event-more-way-c">Create</div>
                                </button>
                                <button className="create-event-more-way-b">
                                        <div>
                                            <h5 className="event-more-a">Meeting poll</h5>
                                            <p>Let your group of invitees vote on a time that works for everyone.</p>
                                        </div>
                                        <div className="create-event-more-way-c">Create</div>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default CreateEventType;