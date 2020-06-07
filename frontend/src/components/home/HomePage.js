import React, { Component } from "react";
import HomeFooter from "./HomeFooter.js";
import CovidWorld from "./CovidWorld";
import CovidSE from "./CovidSE";
import News from "./News";

import { Tabs, Tab } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <div className ="bg-light rounded w-110">
      <Tabs variant="pills" className ="pt-3 pb-3 justify-content-center" defaultActiveKey="covidSE" id="uncontrolled-tab-example">
        <Tab eventKey="covidSE" className ="bg-blue" title="Sweden">
          <CovidSE className =""/>
          <HomeFooter />
        </Tab>
        <Tab eventKey="covidWorld" title="World">
          <CovidWorld />
          <HomeFooter />
        </Tab>
        <Tab eventKey="news" title="News">
          <News />
          <HomeFooter />
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default HomePage;
