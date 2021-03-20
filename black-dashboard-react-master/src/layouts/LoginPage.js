import React from "react";
import { useLocation } from "react-router-dom";

// core components
import Footer from "components/Footer/Footer.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";


// nodejs library that concatenates classes
import classNames from "classnames";
import "../assets/css/sign.css"

// reactstrap components
import {
  Form,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  Navbar
} from "reactstrap";



function LoginPage(props){
  const location = useLocation();
  const [bigChartData, setbigChartData] = React.useState("data1");
  console.log(bigChartData);
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const isSignIn=(bigChartData == "data1");
  const isSignUp=(bigChartData == "data2");
  const isForgetPassword=(bigChartData == "data3");
  console.log("print",isSignIn, isSignUp, isForgetPassword);
  return (
    <BackgroundColorContext.Consumer>
      {() => (
        <Container>
          <div >
            <Row style={{marginTop:'15%'}}>
              <Col md={{ offset: 4 }} style={{justifyContent: 'center', alignItems: 'center'}}>
                <Card className="card-chart pt-2" style={{background:'#19273C'}}>
                  <CardHeader>
                    <Row>
                    <Col sm="12">
                        <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                        >
                          <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: bigChartData === "data1",
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => setBgChartData("data1")}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              sign in
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-single-02" />
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: bigChartData === "data2",
                            })}
                            onClick={() => setBgChartData("data2")}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              sign up
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-gift-2" />
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: bigChartData === "data3",
                            })}
                            onClick={() => setBgChartData("data3")}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              forget passsword
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-tap-02" />
                            </span>
                          </Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div>
                      {isSignIn ? (
                        <Form>
                          <h3 className="ml-3">Sign In</h3>

                          <div className="form-group">
                              <label className="sign">Username</label>
                              <input type="text" className="form-control" placeholder="User name" />
                          </div>

                          <div className="form-group">
                              <label className="sign">Password</label>
                              <input type="password" className="form-control" placeholder="Enter password" />
                          </div>

                          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </Form>
                      ):(
                        <div>
                          {isSignUp ? (
                            <Form>
                            <h3 className="ml-3">Sign Up</h3>
  
                            <div className="form-group">
                                <label className="sign">Username</label>
                                <input type="text" className="form-control" placeholder="User name" />
                            </div>
  
  
                            <div className="form-group">
                                <label className="sign">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
  
                            <div className="form-group">
                                <label className="sign">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>
  
                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                          </Form>
  
                          ):(
                            <Form>
                            <h3 className="ml-3">Forget Password?</h3>
  
                            <div className="form-group">
                                <label className="sign">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
    
                            <button type="submit" className="btn btn-primary btn-block">Send Verifier To Your Email</button>
                          </Form>
                        )}
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <Navbar>
            <div >
                {location.pathname = <Footer fluid />}
            </div>
          </Navbar>
        </Container>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default LoginPage;
