import React from "react";
const WorkflowCard = (props)=>{
    return(<>
    <div className="workflows-card workflows-card-a">
                  <div className="workflows-card-b">
                    <div className="d-f">
                      <img
                        className="workflows-card-c"
                        src={props.image}
                        alt="reminder-mail"
                      />
                    </div>
                    <div className="workflows-card-d">
                      <div className="workflows-card-e">
                        {props.header}
                      </div>
                      <div className="workflows-card-f">
                        {props.content}
                      </div>
                    </div>
                    <div className="workflows-card-button">
                      <button
                        className="toptaber-right-button toptaber-right-button-2"
                        type="button"
                        style={{ minHeight : "38px"}}
                      >
                        <div className="toptaber-right-button-a">
                          <span className="toptaber-right-button-plus">
                            Use workflow
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
    </>)
}
export default WorkflowCard;