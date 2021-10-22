import React from 'react';

const ContactInfo = () => {
    return (
        <div className="location-area pt-100 pb-70">
            <div className="container">
                <div className="row location-wrap">
                    <div className="col-sm-6 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-location-pin"></i>
                            <h3>주소</h3>
                            <p>수원시 팔달구 일월로 22번길 7 <br /> (화서2동 724-2번지) 삼민빌딩 2층</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-ui-call"></i>
                            <h3>전화</h3>
                            <p>031-296-7799</p>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-fax"></i>
                            <h3>FAX</h3>
                            <p>031-296-7795</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;