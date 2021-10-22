import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Services = () => {
    return (
        <React.Fragment>
            {/* <TopHeader /> */}
            <Navbar />
            <PageBanner 
                pageTitle="진료과목" 
                homePageUrl="/" 
                homePageText="홈" 
                activePageText="진료과목" 
                bgImage="page-title-one" 
            /> 
            <div className="services-area pt-100 pb-70">
                <div className="container">
                <div className="row">
            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-blood-test"></i>
                      <h3>만성질환</h3>
                      <p>고혈압, 당뇨, 고지혈증</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-blood-test"></i>
                      <h3>만성질환</h3>
                      <p>고혈압, 당뇨, 고지혈증</p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-prescription"></i>
                      <h3>소화기 질환</h3>
                      <p>만성 복통, 기능성 소화불량, 장염</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-prescription"></i>
                      <h3>소화기 질환</h3>
                      <p>만성 복통, 기능성 소화불량, 장염</p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-patient-file"></i>
                      <h3>내분비 질환</h3>
                      <p>갑상선, 골다공증</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-patient-file"></i>
                      <h3>내분비 질환</h3>
                      <p>갑상선, 골다공증</p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-medical-sign"></i>
                      <h3>간 질환</h3>
                      <p>지방간, A형 간염·B형 간염·C형 간염, 알콜성 간질환</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-medical-sign"></i>
                      <h3>간 질환</h3>
                      <p>지방간, A형 간염·B형 간염·C형 간염, 알콜성 간질환</p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-people"></i>
                      <h3>비만 클리닉</h3>
                      <p>체성분 검사, 메조테라피, 비만약물치료</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-people"></i>
                      <h3>비만 클리닉</h3>
                      <p>체성분 검사, 메조테라피, 비만약물치료</p>
                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-hospital"></i>
                      <h3>피부과 진료</h3>
                      <p>보톡스·필러·레이저, 아토피, 주부습진, 대상포진</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-hospital"></i>
                      <h3>피부과 진료</h3>
                      <p>보톡스·필러·레이저, 아토피, 주부습진, 대상포진</p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-medicine"></i>
                      <h3>이비인후과 진료</h3>
                      <p>감기, 독감, 비염, 축농증</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-medicine"></i>
                      <h3>이비인후과 진료</h3>
                      <p>감기, 독감, 비염, 축농증</p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-injection-syringe"></i>
                      <h3>예방접종</h3>
                      <p>
                        폐렴 백신, 대상포진 백신, 자궁경부암 백신, A형 간염
                        백신, B형 간염 백신, 파상풍 백신
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-injection-syringe"></i>
                      <h3>예방접종</h3>
                      <p>
                        폐렴 백신, 대상포진 백신, 자궁경부암 백신, A형 간염
                        백신, B형 간염 백신, 파상풍 백신
                      </p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-blood"></i>
                      <h3>수액&주사요법</h3>
                      <p>
                        아미노산 영양수액, 신데렐라·마늘·비욘세 주사, 태반주사,
                        비타민D 주사
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-blood"></i>
                      <h3>수액&주사요법</h3>
                      <p>
                        아미노산 영양수액, 신데렐라·마늘·비욘세 주사, 태반주사,
                        비타민D 주사
                      </p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-5ths">
              <div className="service-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="service-front">
                      <i className="icofont-no-smoking"></i>
                      <h3>금연 클리닉</h3>
                      <p>국가지원 금연 약물치료</p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-no-smoking"></i>
                      <h3>금연 클리닉</h3>
                      <p>국가지원 금연 약물치료</p>

                      {/* <Link href="/service-details">
                                                <a>Read More</a>
                                            </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                </div>
            </div>
 
            {/* <div className="expertise-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="expertise-item">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-doctor-alt"></i>
                                                <h3>Certified Doctors</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-stretcher"></i>
                                                <h3>Emergency</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-network"></i>
                                                <h3>Teachnology</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-ambulance-cross"></i>
                                                <h3>Ambulance</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="expertise-item">
                                <div className="expertise-right">
                                    <img src="/images/about4.jpg" alt="Expertise" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
  
            <Footer />
        </React.Fragment>
    )
}

export default Services;