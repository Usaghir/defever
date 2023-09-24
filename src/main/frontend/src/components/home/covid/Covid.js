import React, { Component } from "react";
import CovidWorld from "./covidWorld/CovidWorld";
import "./Covid.css";

import { Tabs, Tab } from "react-bootstrap";

class Covid extends Component {
  render() {
    return (
      <div className="bg-light card mb-2 mt-2">
        <Tabs
          variant="tab"
          className="pt-3 pb-3 justify-content-center myClass bebas-font"
          defaultActiveKey="covidWorld"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="covidWorld" title="">
            <CovidWorld />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Covid;
