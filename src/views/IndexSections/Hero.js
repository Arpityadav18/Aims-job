import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import SearchBar from "../../components/SearchBar/index";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>

            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <div className="container mytest">
                    
                    {/* Job Role  */}
                    <select
                      name=""
                      id=""
                      className="form-control custom-select custom-dropdown"
                    >
                      <option id="dropdown1" value="" disabled hidden selected>
                        Job Role
                      </option>
                      <option style={{padding:"3px 3px",marginTop:"3px",height:"8px"}} id="dropdown1" value="iOS Developer">
                        iOS Developer
                      </option>
                      <option id="dropdown1" value="FrontEnd Developer">
                        FrontEnd Developer
                      </option>
                      <option id="dropdown1" value="BackEnd Developer">
                        BackEnd Developer
                      </option>
                      <option id="dropdown1" value="Android Developer">
                        Android Developer
                      </option>
                      <option id="dropdown1" value="Flutter Developer">
                        Flutter Developer
                      </option>
                    </select>

                    {/* Job Type */}
                    <select
                      name=""
                      id=""
                      className="form-control custom-select custom-dropdown"
                    >
                      <option id="dropdown" value="" disabled hidden selected>
                        Job Type
                      </option>
                      <option id="dropdown" value="Full Time">
                        Full Time
                      </option>
                      <option id="dropdown" value="Part Time">
                        Part Time
                      </option>
                      <option id="dropdown" value="Contract">
                        Contract
                      </option>
                    </select>

                    {/* Job Location */}
                    <select
                      name=""
                      id=""
                      className="form-control custom-select custom-dropdown"
                    >
                      <option id="dropdown" value="" disabled hidden selected>
                        Job Location
                      </option>
                      <option id="dropdown" value="Remote">
                        Remote
                      </option>
                      <option id="dropdown" value="In-Office">
                        In-Office
                      </option>
                      <option id="dropdown" value="Hybrid">
                        Hybrid
                      </option>
                    </select>

                    {/* Experience */}
                    <select
                      name=""
                      id=""
                      className="form-control custom-select custom-dropdown"
                    >
                      <option id="dropdown" value="" disabled hidden selected>
                        Experience
                      </option>
                      <option id="dropdown" value="Fresher">
                        Fresher
                      </option>
                      <option id="dropdown" value="Junior Level">
                        Junior Level
                      </option>
                      <option id="dropdown" value="Mid Level">
                        Mid Level
                      </option>
                      <option id="dropdown" value="Senior Level">
                        Senior Level
                      </option>
                    </select>

                    <Button color="primary" className="btncustome">
                      Search
                    </Button>
                  </div>
                  <Col className="text-center" lg="7">
                    <img
                      // style={{width:"120px",borderRadius:"20%",backgroundColor:"white"}}
                      // alt="..."
                      className="img-fluid bg-white"
                      // src={require("assets/img/brand/argon-react-white (3).png")}
                    />

                    <p className="lead text-white">
                      <b>
                        One Stop Solutions For All Hirings & Recruitments and
                        We're here to help you for Career Opportunities / Best
                        Hiring.
                      </b>
                    </p>

                    <div className="btn-wrapper mt-5">
                      <Button
                        className="mb-3 mb-sm-0"
                        // color="default"
                        // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        // size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Apply For JOB</span>
                      </Button>{" "}
                      <Button
                        className="mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/creativetimofficial/argon-design-system-react"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-id-card" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1"></span>
                          JOB On POST
                        </span>
                      </Button>
                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "40px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>

            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
