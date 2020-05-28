import React, { Component } from "react";
import HomeFooter from "./HomeFooter.js";
import CovidWorld from "./CovidWorld";
import CovidSE from "./CovidSE";
import News from "./News";

import { Tabs, Tab } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <Tabs variant="pills" defaultActiveKey="covidSE" id="uncontrolled-tab-example">
        <Tab eventKey="covidSE" title="Sweden">
          <CovidSE />
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
    );
  }
}

export default HomePage;
