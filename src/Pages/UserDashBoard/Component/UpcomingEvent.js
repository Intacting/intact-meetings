import React, { useState } from "react";
import UpcomingEventlistcard from "./UpcomingEventlistcard";
const UpcomingEvent = () => {
  return (
    <>
      <UpcomingEventlistcard
        weekday="Tuesday"
        date=" 17 January 2023"
        day="Today"
        time="09:00am - 09:30am"
        color="rgb(255, 79, 0)"
        name="Name"
        type="USER"
        email="abc@gamil.com"
        message="description data"
      />
      
      <div className="event-list-end">
        <div className="light-color">You've reached the end of the list.</div>
      </div>
    </>
  );
};
export default UpcomingEvent;
