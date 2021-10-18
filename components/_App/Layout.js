import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Disin - React Next Medical & Doctors Template</title>
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=eb2169a44e3f07a93e88112db1affb0f"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Disin - React Next Medical & Doctors Template" />
                <meta name="og:title" property="og:title" content="Disin - React Next Medical & Doctors Template"></meta>
                <meta name="twitter:card" content="Disin - React Next Medical & Doctors Template"></meta>
                <link rel="canonical" href="https://disin-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;