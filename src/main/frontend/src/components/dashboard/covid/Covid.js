import React, { Component } from 'react';
import CovidWorld from './CovidWorld';
import CovidSE from './CovidSE';
import './Covid.css';

import { Tabs, Tab } from 'react-bootstrap';

class Covid extends Component {
  render() {
    return (
      <div className="bg-light mb-4">
        <Tabs
          variant="tab"
          className="pt-3 pb-3 justify-content-center myClass bebas-font"
          defaultActiveKey="covidWorld"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="covidWorld" title="World">
            <CovidWorld />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Covid;
