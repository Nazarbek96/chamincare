import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=eb2169a44e3f07a93e88112db1affb0f&libraries=services,clusterer,drawing"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;