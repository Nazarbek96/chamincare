import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const AboutOurHospital = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <div className="hospital-area pb-70">
        <div className="container-fluid p-0">
          <div className="hospital-shape">
            <img src="/images/home-three/home-three-hart.png" alt="Shape" />
          </div>

          <div className="row m-0 align-items-center">
            <div className="col-lg-6 p-0">
              <div className="hospital-item">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  className="hospital-play-btn popup-youtube"
                >
                  <i className="icofont-ui-play"></i>
                </div>

                <div className="row m-0">
                  <div className="col-lg-6 p-0">
                    <div className="hospital-left-one">
                      <img
                        src="/images/home-three/home3-about1.jpg"
                        alt="About"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="hospital-left-two">
                      <img
                        src="/images/home-three/home3-about2.jpg"
                        alt="About"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hospital-item hospital-right">
                <h2>차민내과에 오신 것을 환영합니다</h2>
                <div className="list-items">
                  <ul>
                    <li>30년 이상 경험의 내과 전문의 진료</li>
                    <li>
                      건강보험심사평가원 선정 "고혈압 적정성 평가 양호기관"
                    </li>
                    <li>건강보험심사평가원 선정 "항생제 처방률 1등급"</li>
                  </ul>
                </div>

                <div className="row align-items">
                  <ul className="col-lg-6">
                    <li>
                      <i className="icofont-check-circled"></i>
                      내과 전문의
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>
                      비만 클리닉
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>
                      금연 치료
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>
                      수액요법 & 예방접종
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>
                      피부과 진료
                    </li>
                  </ul>
                  <ul className="col-lg-6">
                    <li>
                      <i className="icofont-check-circled"></i>
                      이비인후과 진료
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>
                      소화기질환 진료
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>
                      내분비질환 진료
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>
                      간질환 진료
                    </li>
                  </ul>
                </div>

                <Link href="/about">
                  <a className="hospital-btn">더 알아보기</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </React.Fragment>
  );
};

export default AboutOurHospital;
