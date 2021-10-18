import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-item">
                            <h1>환자 중심의 진료에 최선을 다하는 차민내과가 되겠습니다</h1>
                            <p>환자분의 작은 소리까지도 귀 기울여 듣는 차민내과입니다.</p>
                            
                            <div className="common-btn-two">
                                {/* <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link> */}
                                <Link href="/about">
                                    <a className="cmn-btn-right-two">더 알아보기</a>
                                </Link>
                            </div>

                            <div className="banner-right">
                                <img src="/images/home-three/home-three-banner1.png" alt="Banner" />
                                <img src="/images/home-three/home-three-banner-shape2.png" alt="Banner" />
                                <img src="/images/home-three/home-three-banner-shape2.png" alt="Banner" />
                                <img src="/images/about-shape1.png" alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="heart-shape">
                <img src="/images/heart-graph.png" alt="Banner" />
            </div>
        </div>
    )
}

export default MainBanner;