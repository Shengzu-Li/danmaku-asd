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
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

import flvjs from "flv.js";


function Streaming() {

  var streamkey = "live";

  React.useEffect(() =>{
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement');
      var flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: "http://localhost:8000/live/" + streamkey +".flv"
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  });

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              {/*<CardFooter>*/}
              <video id="videoElement" controls></video>
              {/*</CardFooter>*/}
              <CardHeader>
                <h3 className="title">ALL STREAMING:</h3>
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
                      <h4>stream1</h4>
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

export default Streaming;
