/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Dashboard(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h3 className="title">Some Streams:</h3>
                <p className="category">
                  <Link to="/admin/streaming" style={{fontSize:'16px'}}>see all here</Link>
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-alert-circle-exc" />
                      <p>icon-alert-circle-exc</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-laptop" />
                      <p>icon-laptop</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-align-center" />
                      <p>icon-align-center</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-align-left-2" />
                      <p>icon-align-left-2</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-app" />
                      <p>icon-app</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-atom" />
                      <p>icon-atom</p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
