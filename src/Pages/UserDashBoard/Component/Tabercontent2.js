import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DataRange from "./DataRange";
import PastEvent from "./PastEvent";
import PendingEvent from "./PendingEvent";
import UpcomingEvent from "./UpcomingEvent";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import ScheduleEventFilter from "./SechduleEventFilter";
const Tabercontent2 = () => {
  const [id, setId] = useState(1);
  const handleChange = () => {
    if (id == 1) {
      setId(2);
    } else setId(1);
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <>
      <div className="taber_content2">
        <section className="taber-2-display">
          <div className="taber-2-display-a">Displaying 1 of 1 Events</div>
        </section>
        <div className="schedule-event">
          <Tabs>
            <div class="dropdown">
              <div className="filter-list">
                <div className="filter-list-bar">
                  <div className="filter-list-tabs tabs">
                    <TabList>
                      <Tab
                        className="tab-button fit-content"
                        style={{ marginLeft: "0px" }}
                      >
                        Upcoming
                      </Tab>
                      <Tab className="tab-button fit-content">Pending</Tab>
                      <Tab className="tab-button fit-content">Past</Tab>
                      <Tab className="tab-button fit-content ">
                        {" "}
                        <button
                          style={{
                            textDecoration: "none",
                            border: "none",
                            backgroundColor: "white",
                          }}
                          className="dropdown-toggle"
                          type="button"
                          data-toggle="collapse"
                          data-target="#date-range"
                          aria-expanded="false"
                          aria-controls="date-range"
                          onClick={() => handleChange()}
                        >
                          Data Range
                        </button>
                      </Tab>
                    </TabList>
                  </div>
                  <div className="flter-list-actions">
                    <div className="filter-list-action">
                      <button
                        className="filter-list-action-button"
                        style={{ padding: "4px 8px" }}
                        type="button"
                        data-toggle="collapse"
                        data-target="#filter"
                        aria-expanded="false"
                        aria-controls="filter"
                      >
                        <span>
                          <i class="fa fa-filter" aria-hidden="true"></i>
                        </span>
                        <span style={{ paddingLeft: "6px" }}>Filter</span>
                      </button>
                    </div>
                    <div className="filter-list-action">
                      <button
                        className="filter-list-action-button"
                        style={{ padding: "4px 8px" }}
                      >
                        <span>
                          <i class="fa-solid fa-download"></i>
                        </span>
                        <span style={{ paddingLeft: "6px" }}>Export</span>
                      </button>
                    </div>
                  </div>
                </div>
                <ScheduleEventFilter />
              </div>
              <TabPanel>
                <UpcomingEvent />
              </TabPanel>
              <TabPanel>
                <PendingEvent />
              </TabPanel>
              <TabPanel>
                <PastEvent />
              </TabPanel>
              <TabPanel>
                {id == 1 ? (
                  <div className="collapse" id="date-range">
                    <DateRangePicker
                      onChange={(item) => setState([item.selection])}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      ranges={state}
                      direction="horizontal"
                    />
                    <br />

                    <button
                      className="toptaber-right-button toptaber-right-button-2"
                      type="button"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleChange()}
                    >
                      <div className="toptaber-right-button-a">
                        <span className="toptaber-right-button-plus">
                          Apply
                        </span>
                      </div>
                    </button>
                    <button
                      className="add-one-on-one-share"
                      type="button"
                      style={{ float: "inherit" }}
                      onClick={() => handleChange()}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <DataRange />
                )}
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default Tabercontent2;
