import React, { Component } from 'react';
import CovidWorld from './CovidWorld';
import CovidSE from './CovidSE';
import './home.css';

import { Tabs, Tab } from 'react-bootstrap';

class HomePage extends Component {
  render() {
    return (
      <div className="bg-light">
        <Tabs
          variant="tab"
          className="pt-3 pb-3 justify-content-center myClass bebas-font"
          defaultActiveKey="covidSE"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="covidSE" title="Sweden">
            <CovidSE />
          </Tab>
          <Tab eventKey="covidWorld" title="World">
            <CovidWorld />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default HomePage;
