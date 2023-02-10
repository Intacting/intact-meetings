import React, { useState } from "react";
const PastEventlistcard = (props)=>{
    const [id, setId] = useState(1);
    return (
      <>
        <div className="event-list">
          <div>
            <h2 className="event-list-h2">
             {props.weekday}, {props.date} &nbsp; &nbsp;<b>{props.day}</b>
            </h2>
            <div className="event-list-content">
              <button className="event-list-a event-list-b event-list-c" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <table className="event-list-table">
                  <tbody>
                    <tr>
                      <td className="event-list-table-a">
                        <span
                          className="event-list-color"
                          style={{backgroundColor: `${props.color}`} }
                        ></span>
                      </td>
                      <td className="event-list-table-b">
                        <spnan className="event-list-d">{props.time}</spnan>
                      </td>
                      <td className="event-list-table-c none">
                        <div>
                          <div>
                            <b>{props.name}</b>
                          </div>
                          <div>
                            Event type <b>{props.type}</b>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="td-details">
                          <i class="fa-solid fa-angle-down"></i> &nbsp; Details
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </button>
              <div className="name-event-type">
                
                        <div>
                          <b>{props.name}</b>
                        </div>
                        <div>
                          Event type <b>{props.type}</b>
                        </div>
                      </div>
              <div className="collapse" id="collapseExample">
              <div className="d-f details-of-event d-i">
                <div className="details-of-event-left mb-20">
                  <div>
                    <button className="detail-edit-button detail-edit-button-color jc-left">
                      <div className="detail-edit-button-a">
                        <span className="detail-edit-button-b">
                        <i class="fa-solid fa-ban"></i>
                        </span>
                        <span>Mark as no-show</span>
                      </div>
                    </button>
                    
                  </div>
                </div>
                <div className="details-of-event-right">
                  <div className="details-of-event-right-row">
                    <label className="details-of-event-heading">Email</label>
                    <div>{props.email}</div>
                  </div>
                  <div className="details-of-event-right-row">
                    <label className="details-of-event-heading">location</label>
                    <div>
                      This is a Google meet web conference.{" "}
                      <a style={{ color: "var(--primary-color,rgb(0,105,255))" }}>
                        Join now
                      </a>
                    </div>
                  </div>
                  <div className="details-of-event-right-row">
                    <label className="details-of-event-heading">
                      invitee time zone
                    </label>
                    <div>India standard Time</div>
                  </div>
                  <div className="details-of-event-right-row">
                    <label className="details-of-event-heading">Questions</label>
                    <div>
                      <p className="mb-0 light-color">
                        {" "}
                        Please share anythingthat will help prepare for our
                        meeting.
                      </p>
                      <div>{props.message}</div>
                    </div>
                  </div>
                  <div className="details-of-event-right-row">
                  {id==1?
                  <>
                    <button className="add-meeting-notes" onClick={()=>setId(2)}>
                      Add meeting notes
                    </button>
                    <p className="mb-0 light-color">
                      (only the host will see these)
                    </p>
                    </>
                    :
                    <form>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Meeting Notes
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="form-box-f">
                      <button
                    className="toptaber-right-button toptaber-right-button-2"
                    type="button"
                    style={{marginRight : "10px"}}
                  >
                    <div className="toptaber-right-button-a">
                      <span className="toptaber-right-button-plus">Update</span>
                    </div>
                  </button>
                  <button
                    className="add-one-on-one-share"
                    type="button"
                    onClick={()=>setId(1)}
                    style={{float : "inherit"}}
                    
                  >
                    Cancel
                  </button>
                  
                </div>
                    </form>
                    }
                  </div>
                  <div className="created-date">Created {props.date}</div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
}
export default PastEventlistcard;