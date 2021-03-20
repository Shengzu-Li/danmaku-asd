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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";


function StreamerProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Streamer Setting: id: 122122</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <label>maybe stream room front image here? </label>
                        <Col
                            className="font-icon-list col-xs-6 col-xs-6"
                            lg="5"
                            md="3"
                            sm="4"
                        >
                            <div className="font-icon-detail">
                            <i className="tim-icons icon-alert-circle-exc" />
                            <p>icon-alert-circle-exc</p>
                            </div>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Stream Room Title</label>
                        <Input
                          defaultValue="rest today"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>Streamer introduction</label>
                        <Input
                          cols="80"
                          defaultValue="i just want to be happy"
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
                <Button color="primary" type="click">
                  Start Streaming!
                </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StreamerProfile;
