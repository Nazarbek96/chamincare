import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import OurExpertise from "../components/HomeTwo/OurExpertise";
import Services from "../components/HomeOne/Services";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";

const About = () => {
  return (
    <React.Fragment>
      {/* <TopHeader /> */}
      <Navbar />
      <PageBanner
        pageTitle="소개"
        homePageUrl="/"
        homePageText="홈"
        activePageText="소개"
        bgImage="page-title-one"
      />

      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about1.jpg" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>환자를 위한 병원, 차민내과</h2>
                <p>
                  “환자분의 작은 소리까지도 귀 기울여 듣는 차민내과입니다.”{" "}
                </p>
                {/* <ul>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Browse Our Website
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Choose Service
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Send Messege
                                    </li>
                                </ul> */}
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <div className="appointment-item-two-right">
                      <div className="appointment-item-content">
                        <h2>작업 시간</h2>
                        <ul>
                          <li>
                            월요일 <span>9:00 AM - 7:00 PM</span>
                          </li>
                          <li>
                            화요일 <span>9:00 AM - 7:00 PM</span>
                          </li>
                          <li>
                            수요일 <span>9:00 AM - 7:00 PM</span>
                          </li>
                          <li>
                            목요일 <span>9:00 AM - 7:00 PM</span>
                          </li>
                          <li>
                            금요일 <span>9:00 AM - 7:00 PM</span>
                          </li>
                          <li>
                            토요일 <span>9:00 AM - 3:30 PM</span>
                          </li>
                          <li>
                            점심시간 <span>1:00 PM - 2:00 PM</span>
                          </li>
                          <li style={{fontWeight:"bold"}}>공휴일 휴진</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="counter-area counter-bg counter-area-four">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-patient-bed"></i>
                <h3 className="counter">850</h3>
                <p>Patients Beds</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-people"></i>
                <h3>
                  <span className="counter">25000</span>+
                </h3>
                <p>Happy Patients</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-doctor-alt"></i>
                <h3 className="counter">750</h3>
                <p>Doctors & Nurse</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-badge"></i>
                <h3 className="counter">18</h3>
                <p>Year Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <OurExpertise /> */}

      {/* <Services /> */}

      {/* <TestimonialSlider /> */}

      {/* <LatestBlogPost /> */}

      <Footer />
    </React.Fragment>
  );
};

export default About;
