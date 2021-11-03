import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-9">
              <div className="footer-item">
                <div className="footer-contact">
                  <h3>문의하기</h3>
                  <ul>
                    <div className="row">
                      {/* <li>
                        <i className="icofont-ui-message"></i>
                        <a href="mailto:info@disin.com">info@disin.com</a>
                        <a href="mailto:hello@disin.com">hello@disin.com</a>
                      </li> */}
                      <div className="col-md-6 col-lg-4">
                        <li>
                          <i className="icofont-stock-mobile"></i>
                          <a href="tel:0312967799">전화: 031-296-7799</a>
                          <a href="fax:0312967795">FAX: 031-296-7795</a>
                        </li>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <li>
                          <i className="icofont-location-pin"></i>
                          수원시 팔달구 일월로 22번길 7 <br /> (화서2동
                          724-2번지) 삼민빌딩 2층
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>빠른 링크</h3>
                  <ul>
                    <li>
                      <Link href="/about">
                        <a>우리에 대해</a>
                      </Link>
                    </li>
                    {/* <li>
                                            <Link href="/about">
                                                <a>Blog</a>
                                            </Link>
                                        </li> */}
                    {/* <li>
                                            <Link href="/blog-details">
                                                <a>Our Expertise</a>
                                            </Link>
                                        </li> */}
                    {/* <li>
                                            <Link href="/faq">
                                                <a>Faq</a>
                                            </Link>
                                        </li> */}
                    {/* <li>
                                            <Link href="/services">
                                                <a>진료과목</a>
                                            </Link>
                                        </li> */}
                    <li>
                      <Link href="/contact">
                        <a>문의하기</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-quick">
                                    <h3>진료과목</h3>
                                    <ul>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Dental Care</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Cardiology</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Hijama Therapy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Massage Therapy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Ambluance Sevices</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Medicine</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

            {/* <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-feedback">
                                    <h3>Feedback</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="your_message" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <div className="text-left">
                                            <button type="submit" className="btn feedback-btn">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Developed by{" "}
              <a href="https://fairlabs.io/" target="_blank">
                FAIR Labs
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
