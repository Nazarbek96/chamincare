import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import GoogleMap from "../components/Contact/GoogleMap";
import Footer from "../components/_App/Footer";
import KakaoMap from "../components/Contact/KakaoMap";

const Contact = () => {
  return (
    <React.Fragment>
      {/* <TopHeader /> */}
      <Navbar />
      <PageBanner
        pageTitle="문의하기"
        homePageUrl="/"
        homePageText="홈"
        activePageText="문의하기"
        bgImage="page-title-one"
      />

      <ContactInfo />

      {/* <ContactForm /> */}

      {/* <GoogleMap /> */}
      <KakaoMap/>

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
